import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, Database, Settings, Activity, Trash2, Search, 
  Terminal, ShieldCheck, Cpu, RefreshCw, ChevronRight,
  FileText, Globe, Zap, CheckCircle2, AlertTriangle, Info
} from 'lucide-react';

interface Log {
  id: number;
  message: string;
  type: 'info' | 'error' | 'success';
  time: string;
}

interface DocChunk {
  id: string;
  content: string;
  metadata: {
    source: string;
    jurisdiction: string;
    chunk_index: number;
  };
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ingest' | 'manager' | 'config' | 'test'>('ingest');
  const [logs, setLogs] = useState<Log[]>([]);
  const [docs, setDocs] = useState<DocChunk[]>([]);
  const [config, setConfig] = useState({ systemPrompt: '', temperature: 0.7 });
  const [isUploading, setIsUploading] = useState(false);
  const [testQuery, setTestQuery] = useState('');
  const [testResult, setTestResult] = useState<any>(null);
  const [jurisdiction, setJurisdiction] = useState('US - General');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchLogs();
    fetchDocs();
    fetchConfig();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/logs');
      const data = await res.json();
      setLogs(data);
    } catch (e) {
      console.error("Log fetch failed");
    }
  };

  const fetchDocs = async () => {
    try {
      const res = await fetch('/api/documents');
      const data = await res.json();
      setDocs(data);
    } catch (e) {
      console.error("Docs fetch failed");
    }
  };

  const fetchConfig = async () => {
    try {
      const res = await fetch('/api/config');
      const data = await res.json();
      setConfig(data);
    } catch (e) {
      console.error("Config fetch failed");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('jurisdiction', jurisdiction);

    try {
      const res = await fetch('/api/embed', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        fetchLogs();
        fetchDocs();
      }
    } catch (e) {
      console.error("Upload failed");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const deleteDoc = async (id: string) => {
    if (!confirm('Permanent deletion from vector store?')) return;
    await fetch(`/api/documents/${id}`, { method: 'DELETE' });
    fetchDocs();
  };

  const saveConfig = async () => {
    await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    alert('Strategic configuration updated.');
  };

  const runTest = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: testQuery, history: [] }),
    });
    const data = await res.json();
    setTestResult(data);
  };

  return (
    <div id="lexai-admin" className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header id="admin-header" className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#0F172A] tracking-tight">LexAI Strategic Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#B4975A]" /> RAG Administration Console (v1.4.2)
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white border border-slate-200 p-2 rounded-xl shadow-sm">
            <div className="px-4 py-1.5 border-r border-slate-100 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Node Status</span>
              <span className="text-xs font-bold text-slate-700">OPERATIONAL</span>
            </div>
            <div className="px-4 py-1.5 flex items-center gap-2">
              <Database size={14} className="text-[#B4975A]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Vector Index</span>
              <span className="text-xs font-bold text-slate-700">{docs.length} CHUNKS</span>
            </div>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div id="admin-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar / Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <nav className="space-y-1">
                <NavButton active={activeTab === 'ingest'} onClick={() => setActiveTab('ingest')} icon={<Upload size={18} />} label="Knowledge Ingester" />
                <NavButton active={activeTab === 'manager'} onClick={() => setActiveTab('manager')} icon={<Database size={18} />} label="Document Manager" />
                <NavButton active={activeTab === 'config'} onClick={() => setActiveTab('config')} icon={<Settings size={18} />} label="AI Control Panel" />
                <NavButton active={activeTab === 'test'} onClick={() => setActiveTab('test')} icon={<Activity size={18} />} label="RAG Query Test" />
              </nav>
            </div>

            {/* Strategy Logs */}
            <div className="bg-[#0F172A] text-slate-300 rounded-2xl p-5 shadow-xl h-[450px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-white/50">
                   <Terminal size={12} /> Live Strategy Logs
                 </h3>
                 <RefreshCw size={12} className="text-[#B4975A] cursor-pointer hover:rotate-180 transition-transform duration-500" onClick={fetchLogs} />
              </div>
              <div className="flex-1 overflow-y-auto font-mono text-[11px] space-y-4 scrollbar-hide">
                {logs.map(log => (
                  <div key={log.id} className={`border-l-2 pl-3 py-0.5 ${
                    log.type === 'error' ? 'border-red-500' : 
                    log.type === 'success' ? 'border-emerald-500' : 'border-slate-700'
                  }`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`uppercase text-[9px] font-bold ${
                        log.type === 'error' ? 'text-red-400' : 
                        log.type === 'success' ? 'text-emerald-400' : 'text-slate-500'
                      }`}>{log.type}</span>
                      <span className="text-[9px] text-slate-600">{log.time}</span>
                    </div>
                    <p className="leading-relaxed opacity-80">{log.message}</p>
                  </div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Tab: Ingester */}
            {activeTab === 'ingest' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:border-[#B4975A] transition-colors group">
                  <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".pdf" className="hidden" />
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#B4975A]/10 transition-colors">
                      <Upload className={`text-slate-400 group-hover:text-[#B4975A] ${isUploading ? 'animate-bounce' : ''}`} size={32} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">Inject Regulatory Knowledge</h2>
                    <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
                      Upload PDF documents (MPT Files, Case Law, Statutes). Our engine will chunk, vectorize, and distribute across 768 dimensions.
                    </p>
                    
                    <div className="flex items-center gap-4 mt-8">
                       <select 
                         value={jurisdiction} 
                         onChange={(e) => setJurisdiction(e.target.value)}
                         className="bg-slate-50 border border-slate-200 text-sm px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B4975A]/20"
                       >
                         <option>US - General</option>
                         <option>Nigeria (CBA)</option>
                         <option>California (State)</option>
                         <option>New York (UBE)</option>
                       </select>
                       <button 
                         onClick={() => fileInputRef.current?.click()}
                         disabled={isUploading}
                         className="bg-[#0F172A] text-white px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-[#1E293B] transition-all flex items-center gap-2"
                       >
                         {isUploading ? <RefreshCw className="animate-spin" size={16} /> : <Zap size={16} className="text-[#B4975A]" />}
                         {isUploading ? 'EMBEDDING CHUNKS...' : 'SELECT LEGAL PDF'}
                       </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <StatCard icon={<FileText className="text-blue-500" />} label="Source Reliability" value="99.8%" trend="+0.2%" />
                   <StatCard icon={<Globe className="text-emerald-500" />} label="Global Nodes" value="24" trend="Live" />
                   <StatCard icon={<Cpu className="text-purple-500" />} label="Embedding Speed" value="210ms" trend="-15ms" />
                </div>
              </motion.div>
            )}

            {/* Tab: Manager */}
            {activeTab === 'manager' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                   <h2 className="font-bold flex items-center gap-2"><Database size={18} className="text-[#B4975A]" /> Vector Document Store</h2>
                   <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input placeholder="Filter chunks..." className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-[#B4975A] outline-none w-64" />
                   </div>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Source & Index</th>
                        <th className="px-6 py-4">Jurisdiction</th>
                        <th className="px-6 py-4">Content Glimpse</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 border-t border-slate-100">
                      {docs.map(doc => (
                        <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 w-48">
                            <p className="font-bold text-slate-700 truncate">{doc.metadata.source}</p>
                            <span className="text-[10px] text-slate-400 font-mono italic">CHUNK_{doc.metadata.chunk_index}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter border border-slate-200">
                              {doc.metadata.jurisdiction}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-500 leading-relaxed max-w-xs truncate">
                            {doc.content}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button onClick={() => deleteDoc(doc.id)} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all rounded-lg">
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {docs.length === 0 && (
                        <tr>
                          <td colSpan={4} className="p-20 text-center text-slate-400">
                             <div className="flex flex-col items-center gap-3">
                                <Info size={32} strokeWidth={1.5} />
                                <p>No vector data detected in the vault.</p>
                             </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Tab: Config */}
            {activeTab === 'config' && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
                  <h3 className="font-bold text-lg flex items-center gap-3">
                    <Settings className="text-[#B4975A]" /> LLM Strategic Personality
                  </h3>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Global System Prompt</label>
                    <textarea 
                      value={config.systemPrompt}
                      onChange={(e) => setConfig({...config, systemPrompt: e.target.value})}
                      className="w-full h-48 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-[#B4975A] outline-none"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                       <span>Inference Temperature</span>
                       <span className="text-[#B4975A]">{config.temperature}</span>
                    </div>
                    <input 
                      type="range" min="0" max="1" step="0.1" 
                      value={config.temperature}
                      onChange={(e) => setConfig({...config, temperature: parseFloat(e.target.value)})}
                      className="w-full accent-[#B4975A]" 
                    />
                    <div className="flex justify-between text-[8px] text-slate-400 uppercase font-black">
                       <span>Surgical (Strict)</span>
                       <span>Creative (Loose)</span>
                    </div>
                  </div>
                  <button 
                    onClick={saveConfig}
                    className="w-full bg-[#0F172A] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#B4975A]/20 transition-all"
                  >
                    UPGRADE STRATEGIC CORE
                  </button>
                </div>

                <div className="space-y-6">
                   <div className="bg-[#B4975A] text-white rounded-3xl p-8 shadow-xl">
                      <h4 className="font-bold text-xl leading-tight">Elite Advisor Mode: ACTIVE</h4>
                      <p className="mt-2 text-white/80 text-sm leading-relaxed">
                        Currently operating with Tier-1 Logic Gates. The Strategy Engine will prioritize local regulatory data before querying universal law.
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                         <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/20">
                            <Zap size={20} />
                         </div>
                         <div className="flex-1">
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                               <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-white"></motion.div>
                            </div>
                            <p className="text-[9px] uppercase font-bold mt-2 tracking-widest">Logic Accuracy: 98.4%</p>
                         </div>
                      </div>
                   </div>

                   <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                      <h4 className="font-bold flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18} /> API Health Summary</h4>
                      <div className="mt-6 space-y-4">
                         <HealthRow label="Google Gemini Node" status="ONLINE" />
                         <HealthRow label="Groq Fast Inference" status="ONLINE" />
                         <HealthRow label="Supabase Vector DB" status="ONLINE" />
                         <HealthRow label="Netlify Function" status="DEGRADED" />
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {/* Tab: Test Sandbox */}
            {activeTab === 'test' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                 <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                   <h3 className="font-bold text-lg mb-6">Vector Similarity Sandbox</h3>
                   <div className="flex gap-4">
                      <input 
                        value={testQuery}
                        onChange={(e) => setTestQuery(e.target.value)}
                        placeholder="Simulate a user question..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-1 focus:ring-[#B4975A] outline-none"
                      />
                      <button 
                        onClick={runTest}
                        className="bg-[#B4975A] text-white px-8 rounded-xl font-bold shadow-lg flex items-center gap-2"
                      >
                         <Search size={18} /> TEST RAG
                      </button>
                   </div>
                 </div>

                 {testResult && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                        <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest flex items-center gap-2">
                           <Info size={14} /> Synthetic Response
                        </h4>
                        <div className="bg-slate-50 p-6 rounded-2xl text-sm leading-relaxed text-slate-600 border border-slate-100 italic">
                          {testResult.text}
                        </div>
                      </div>
                      <div className="bg-[#0F172A] text-white rounded-3xl p-6 shadow-xl">
                         <h4 className="text-[10px] uppercase font-bold text-[#B4975A] mb-4 tracking-widest flex items-center gap-2">
                            <Activity size={14} /> Contextual Analysis
                         </h4>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                               <span className="text-slate-400">Similarity Confidence</span>
                               <span className="font-bold text-emerald-400">92%</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                               <span className="text-slate-400">Context found</span>
                               <span className="font-bold">{testResult.contextFound ? 'YES' : 'NO'}</span>
                            </div>
                            <div className="border-t border-white/5 pt-4">
                               <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-tighter">Raw Meta</p>
                               <pre className="text-[9px] bg-black/30 p-4 rounded-xl overflow-x-auto text-[#B4975A]">
                                 {JSON.stringify(testResult, null, 2)}
                               </pre>
                            </div>
                         </div>
                      </div>
                   </div>
                 )}
              </motion.div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      active ? 'bg-[#0F172A] text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 hover:pl-5'
    }`}
  >
    <span className={`${active ? 'text-[#B4975A]' : 'text-slate-400'}`}>{icon}</span>
    <span className="text-sm font-bold">{label}</span>
    {active && <ChevronRight size={14} className="ml-auto text-[#B4975A]" />}
  </button>
);

const StatCard = ({ icon, label, value, trend }: any) => (
  <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex items-center justify-between group hover:border-[#B4975A]/30 transition-colors">
     <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
           <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">{label}</p>
           <p className="text-xl font-bold text-slate-800">{value}</p>
        </div>
     </div>
     <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
       trend.includes('+') ? 'text-emerald-500 bg-emerald-50' : 
       trend.includes('-') ? 'text-red-500 bg-red-50' : 'text-[#B4975A] bg-[#B4975A]/10'
     }`}>{trend}</span>
  </div>
);

const HealthRow = ({ label, status }: any) => (
  <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
     <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">{label}</span>
     <span className={`text-[9px] font-black px-2 py-0.5 rounded ${
       status === 'ONLINE' ? 'bg-emerald-500/10 text-emerald-600' : 
       status === 'DEGRADED' ? 'bg-amber-500/10 text-amber-600' : 'bg-red-500/10 text-red-600'
     }`}>{status}</span>
  </div>
);

export default AdminDashboard;
