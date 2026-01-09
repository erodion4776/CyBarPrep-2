export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  failMessage: string;
  passMessage: string;
}

export const questionBank: Question[] = [
  {
    id: 1,
    question: "A plaintiff sued a defendant for negligence after a car accident. At trial, the plaintiff called a witness who testified that the defendant was speeding. On cross-examination, the defendant's attorney asked the witness, 'Isn't it true you were once convicted of felony perjury 12 years ago?' The plaintiff's attorney objects. Is the evidence of the conviction admissible?",
    options: [
      "Yes, because it is a crime involving dishonesty.",
      "Yes, because any felony is admissible for impeachment.",
      "No, because the conviction is more than 10 years old.",
      "No, because the probative value is substantially outweighed by the danger of unfair prejudice."
    ],
    correctAnswer: 2,
    explanation: "Under Federal Rule of Evidence 609(b), if more than 10 years have passed since the conviction or release from confinement (whichever is later), evidence of the conviction is admissible only if its probative value substantially outweighs its prejudicial effect and the proponent gives notice. Here, the 12-year-old conviction is generally inadmissible unless specific balancing and notice requirements are met.",
    failMessage: "You missed the 10-year rule nuance. Foreign-trained attorneys often overlook the specific time-limit exceptions in the Federal Rules of Evidence. We can fix these technical gaps in a strategy session.",
    passMessage: "Excellent work. You spotted the time-limit issue. To maintain this precision across 200 questions, you need a solid execution plan."
  },
  {
    id: 2,
    question: "A buyer and a seller entered into a written contract for the sale of 500 widgets at $10 each, delivery on June 1. On May 15, the seller called the buyer and said, 'I'm not sure if I can deliver the widgets because my factory is undergoing repairs.' The buyer immediately sued for breach of contract. Will the buyer's suit succeed?",
    options: [
      "Yes, because the seller's statement constituted an anticipatory repudiation.",
      "Yes, because the buyer has a right to demand assurances.",
      "No, because the seller's statement was not a clear and unequivocal refusal to perform.",
      "No, because the buyer failed to mitigate damages by waiting until June 1."
    ],
    correctAnswer: 2,
    explanation: "Anticipatory repudiation requires a clear, unequivocal, and unconditional statement that the party will not perform. A statement of doubt or uncertainty (like 'I'm not sure') is not a repudiation. The buyer could have demanded adequate assurances, but suing immediately for breach is premature.",
    failMessage: "Distinguishing between 'repudiation' and 'insecurity' is a classic Bar Exam trap. We can help you master the U.C.C. logic required to catch these nuances.",
    passMessage: "Great job. You recognized the difference between a doubt and a definitive refusal. Let's ensure your strategy remains this sharp across all contract sub-topics."
  },
  {
    id: 3,
    question: "A homeowner hired a contractor to build a deck for $5,000. After the contractor finished the frame, the homeowner told him, 'I'm short on cash right now. If you finish the deck, I'll pay you $6,000 instead of $5,000.' The contractor finished the deck and requested $6,000. Is the homeowner legally obligated to pay the extra $1,000?",
    options: [
      "Yes, because the homeowner made a new promise.",
      "Yes, because the contractor relied on the promise to his detriment.",
      "No, because of the pre-existing duty rule.",
      "No, because the contract was not in writing as required by the Statute of Frauds."
    ],
    correctAnswer: 2,
    explanation: "Under the common law 'pre-existing duty rule', a promise to pay more for a duty the party is already legally obligated to perform is unenforceable for lack of new consideration. Since the contractor was already under a duty to build the deck for $5,000, the promise to pay $6,000 lacks consideration.",
    failMessage: "The Pre-Existing Duty Rule is a fundamental hurdle. Foreign practitioners often assume a new promise is enough; the Bar Exam requires 'Consideration' logic.",
    passMessage: "Precise. You identified the lack of new consideration. Strategic focus like this is what clears the 270 threshold."
  },
  {
    id: 4,
    question: "In a civil case in federal court, a defendant filed a motion for summary judgment. The defendant supported the motion with affidavits from three eyewitnesses. The plaintiff responded by stating, 'I will prove the defendant is lying at trial,' but provided no evidence. How should the court rule?",
    options: [
      "Grant the motion, because the plaintiff failed to show a genuine dispute of material fact.",
      "Deny the motion, because credibility of witnesses is a jury question.",
      "Grant the motion, because affidavits are superior to trial testimony.",
      "Deny the motion, because the plaintiff has a constitutional right to a jury trial."
    ],
    correctAnswer: 0,
    explanation: "Under Rule 56, once the moving party shows an absence of evidence supporting the non-moving party's case, the non-moving party must set forth specific facts—not mere allegations—showing a genuine dispute. A promise to prove a lie at trial is insufficient to defeat summary judgment.",
    failMessage: "Civil Procedure timing and burdens are complex. We specialize in helping foreign attorneys navigate the procedural traps of the Federal Rules.",
    passMessage: "Correct. You understood the burden-shifting in Rule 56. Let's build on this momentum for your MEE preparation."
  },
  {
    id: 5,
    question: "A pedestrian was hit by a car while crossing the street. The pedestrian sued the driver for battery. At trial, the pedestrian proved that the driver intended to swerve the car toward the pedestrian to scare him, but did not intend to actually hit him. Will the pedestrian prevail on the battery claim?",
    options: [
      "Yes, because of the doctrine of transferred intent.",
      "Yes, because the driver intended to cause an imminent apprehension of contact.",
      "No, because the driver did not intend to cause harmful or offensive contact.",
      "No, because battery requires a specific intent to injure."
    ],
    correctAnswer: 1,
    explanation: "Transferred intent applies when a defendant intends to commit one intentional tort (like assault) and instead commits another (like battery). Here, intending to scare (assault) resulting in contact (battery) satisfies the intent element.",
    failMessage: "Transferred intent is a subtle but high-yield topic. Missing these 'easy' points is what keeps candidates in the 250s. We can change that.",
    passMessage: "Spot on. You applied the transferred intent doctrine correctly. That's the level of technical accuracy the MEE requires."
  },
  {
    id: 6,
    question: "A defendant is charged with robbery. At trial, the prosecutor offers a certified copy of the defendant's prior conviction for embezzlement to prove that the defendant is the type of person who steals. Is this evidence admissible?",
    options: [
      "Yes, to show the defendant's propensity to steal.",
      "Yes, if the defendant has already testified.",
      "No, because it is inadmissible character evidence.",
      "No, unless the defendant has opened the door by offering evidence of his own good character."
    ],
    correctAnswer: 2,
    explanation: "FRE 404(a) generally prohibits evidence of a person's character or trait to prove that on a particular occasion the person acted in accordance with the character or trait (propensity evidence). Prior crimes cannot be used to show 'he's a thief.'",
    failMessage: "FRE 404 is the most tested rule on the Evidence MBE. Understanding when propensity is allowed vs. prohibited is vital.",
    passMessage: "Correct. Propensity evidence is the 'Third Rail' of the MBE. You navigated it perfectly.",
  },
  {
    id: 7,
    question: "A state law prohibits the sale of any out-of-state dairy products that do not meet the state's 'ultra-pasteurization' standards, which are stricter than federal standards. The law's purpose is to protect the health of state citizens. Is this law constitutional?",
    options: [
      "Yes, because protecting health is a valid exercise of the state's police power.",
      "Yes, because the state standards are stricter than federal ones.",
      "No, because it violates the Dormant Commerce Clause by discriminating against out-of-state commerce.",
      "No, because federal law preempts all state food safety regulations."
    ],
    correctAnswer: 2,
    explanation: "Under the Dormant Commerce Clause, state laws that discriminate against out-of-state commerce are virtually per se invalid unless the state can show the law is necessary to achieve an important, non-protectionist interest and there are no less discriminatory means.",
    failMessage: "Constitutional Law often trips up foreign attorneys due to the unique 'Dormant Commerce Clause' framework. It requires a specific analytical lens.",
    passMessage: "Excellent. You identified the discriminatory nature of the regulation. Your ConLaw logic is on the right track."
  },
  {
    id: 8,
    question: "A man died without a will, leaving a large estate. His daughter and a man claiming to be his long-lost son both filed for a share of the estate. At the hearing, the daughter offered a letter the man wrote to his sister 20 years ago saying, 'I think I have a son in Ohio.' Is this letter admissible?",
    options: [
      "No, as hearsay.",
      "Yes, under the statement of personal or family history exception.",
      "Yes, as an ancient document.",
      "Yes, as a statement against interest."
    ],
    correctAnswer: 1,
    explanation: "FRE 804(b)(4) provides a hearsay exception for statements concerning the declarant's own birth, adoption, marriage, divorce, legitimacy, relationship by blood, marriage, or adoption, or similar facts of personal or family history.",
    failMessage: "Hearsay exceptions are the 'bread and butter' of Evidence. Knowing the 'unavailability' requirements for 804 exceptions is critical.",
    passMessage: "Correct. You found the family history exception. This technical mastery is key to your Evidence score."
  },
  {
    id: 9,
    question: "A plaintiff, a citizen of New York, sued a defendant, a citizen of New Jersey, in a New Jersey state court for $100,000 arising from a contract dispute. May the defendant remove the case to federal court?",
    options: [
      "Yes, because there is complete diversity and the amount exceeds $75,000.",
      "Yes, because the plaintiff is from a different state.",
      "No, because of the 'In-State Defendant' rule.",
      "No, because the amount in controversy must be $150,000 for removal."
    ],
    correctAnswer: 2,
    explanation: "Under 28 U.S.C. § 1441(b)(2), a civil action otherwise removable solely on the basis of diversity jurisdiction may not be removed if any of the defendants is a citizen of the State in which the action is brought.",
    failMessage: "The 'In-State Defendant Rule' is a favorite removal trap. We help you learn to spot these procedural hurdles instantly.",
    passMessage: "Spot on. You caught the In-State Defendant limitation. That's a high-level CivPro insight."
  },
  {
    id: 10,
    question: "A thief stole a laptop from a coffee shop. While running away, the thief was cornered by a witness. The thief pulled out a knife and threatened the witness to let him go. The witness stepped aside, and the thief escaped. What is the most serious crime the thief has committed?",
    options: [
      "Larceny",
      "Robbery",
      "Assault",
      "Extortion"
    ],
    correctAnswer: 1,
    explanation: "Robbery is larceny (taking from the person/presence) by force or threat of force. While the initial taking was larceny, the use of force to accomplish the escape converts the crime into robbery in most jurisdictions.",
    failMessage: "Larceny vs. Robbery is all about 'Force' timing. The Bar Exam loves testing the 'continuous transaction' theory of robbery.",
    passMessage: "Precise. You recognized that force used during escape counts toward robbery. Great legal intuition."
  },
  {
    id: 11,
    question: "A store owner placed a sign in his window: 'I will pay $1,000 to anyone who finds and returns my lost cat, Mr. Whiskers.' A neighbor, unaware of the sign, found the cat and returned it. Is the store owner legally obligated to pay the $1,000?",
    options: [
      "Yes, because the neighbor performed the requested act.",
      "Yes, because it was a public offer.",
      "No, because there was no mutual assent since the neighbor was unaware of the offer.",
      "No, because the contract lacked a definite time for performance."
    ],
    correctAnswer: 2,
    explanation: "In a unilateral contract, the offeree must be aware of the offer to accept it by performance. If the neighbor was unaware of the reward offer, there was no 'meeting of the minds' and thus no contract.",
    failMessage: "Unilateral contracts and 'Knowledge of Offer' are common foreign law vs. US law conflict points. We help reconcile these differences.",
    passMessage: "Correct. Assent requires knowledge. You're thinking like an MBE expert."
  },
  {
    id: 12,
    question: "A tenant's lease ended on December 31. On January 1, the tenant remained in the apartment and sent the landlord a check for the usual monthly rent. The landlord cashed the check. What type of tenancy has been created?",
    options: [
      "A tenancy at will.",
      "A periodic tenancy.",
      "A tenancy for years.",
      "No tenancy was created; the tenant is a trespasser."
    ],
    correctAnswer: 1,
    explanation: "When a tenant stays past the lease end (holdover) and the landlord accepts rent, a new periodic tenancy is generally created by operation of law (usually month-to-month in residential settings).",
    failMessage: "Property law 'Holdovers' have specific consequences. Don't let the ancient terminology distract you from the clear rules.",
    passMessage: "Correct. Acceptance of rent creates a periodic tenancy. Your Property foundation is solid."
  },
  {
    id: 13,
    question: "A defendant is on trial for murder. The prosecutor calls a witness who says, 'I heard the victim scream right before he died: 'Oh my god, John is shooting me!'' John is the defendant. Is this statement admissible?",
    options: [
      "Yes, as a dying declaration.",
      "Yes, as an excited utterance.",
      "No, because it is hearsay.",
      "Both A and B are potential grounds for admission."
    ],
    correctAnswer: 3,
    explanation: "The statement likely qualifies as an Excited Utterance (made while under the stress of a startling event) and a Dying Declaration (made while believing death was imminent, about the cause of death).",
    failMessage: "Evidence questions often have multiple paths to admissibility. Choosing the *best* one—or recognizing both—is crucial.",
    passMessage: "Masterful. You spotted the overlap between 803 and 804 exceptions. That's a top-tier score indicator."
  },
  {
    id: 14,
    question: "A federal court is hearing a diversity case involving a car accident in New York. The New York statute of limitations is 3 years. The federal court's own internal 'policy' suggests 4 years. Which should the court apply?",
    options: [
      "The federal 4-year policy, under the Supremacy Clause.",
      "The New York 3-year statute, because it is substantive under the Erie Doctrine.",
      "Whichever is longer, to promote justice.",
      "Whichever the judge decides, under federal common law."
    ],
    correctAnswer: 1,
    explanation: "Under the Erie Doctrine, a federal court sitting in diversity must apply state substantive law and federal procedural law. Statutes of limitations are considered substantive for Erie purposes (outcome-determinative).",
    failMessage: "Erie is the 'final boss' of Civil Procedure. We break it down into a simple, three-step checklist that never fails.",
    passMessage: "Perfect. You recognized that statutes of limitations are substantive. Your Erie analysis is flawless."
  },
  {
    id: 15,
    question: "A man was walking his dog when he saw a child trapped in a burning car. The man successfully rescued the child but suffered severe burns. He sued the child's parents for his medical bills. Will he succeed?",
    options: [
      "Yes, under the doctrine of 'danger invites rescue.'",
      "Yes, because the parents have a duty to protect their child.",
      "No, because he voluntarily assumed the risk.",
      "No, because the parents did not owe the man a duty of care."
    ],
    correctAnswer: 3,
    explanation: "While 'danger invites rescue' allows a rescuer to sue the party who *caused* the danger, it does not create a general right to recover from the rescued party's family unless they were negligent in causing the fire. Here, no negligence by the parents was mentioned.",
    failMessage: "Torts is full of 'moral' distractions. The Bar Exam tests 'Legal Duty,' not 'Moral Duty.' Let's sharpen that distinction.",
    passMessage: "Strictly logical. You avoided the emotional trap and looked for the legal duty. That's how you pass."
  },
  {
    id: 16,
    question: "A witness is testifying about a contract. The original contract was lost in a fire. The witness has a photocopy of the contract. May the photocopy be used in place of the original?",
    options: [
      "Yes, under the 'Best Evidence Rule' exceptions.",
      "No, only the original is admissible.",
      "Yes, but only if the witness can prove the fire was accidental.",
      "No, photocopies are always hearsay."
    ],
    correctAnswer: 0,
    explanation: "FRE 1003 allows a duplicate to be admissible to the same extent as an original unless a genuine question is raised as to the original's authenticity. Furthermore, under FRE 1004, if the original is lost or destroyed (not by the proponent in bad faith), other evidence of the content is admissible.",
    failMessage: "The 'Best Evidence Rule' is rarely about the 'best' evidence—it's about the 'original' document rule. We simplify these definitions for you.",
    passMessage: "Correct. Photocopies (duplicates) are highly admissible under the FRE. You've got the rule down."
  },
  {
    id: 17,
    question: "A defendant is charged with burglary. During the trial, the defendant's wife is called to testify by the prosecution about what she saw the defendant doing in their backyard on the night of the crime. She refuses to testify. Can she be compelled?",
    options: [
      "Yes, because Spousal Immunity only applies in civil cases.",
      "Yes, because backyards are not 'confidential' spaces.",
      "No, because of Spousal Immunity (Spousal Testimonial Privilege).",
      "No, because of the Confidential Marital Communications privilege."
    ],
    correctAnswer: 2,
    explanation: "Spousal Immunity (Testimonial Privilege) allows a witness-spouse to refuse to testify against their spouse in a criminal case. The privilege belongs to the witness-spouse (in federal court).",
    failMessage: "Distinguishing between 'Spousal Immunity' and 'Marital Communications' is a 170+ level task. We make it easy with our privilege grid.",
    passMessage: "Excellent. You correctly identified that the testimonial privilege protects the spouse from being forced to take the stand at all."
  },
  {
    id: 18,
    question: "An individual was arrested for a crime. After being read his Miranda rights, he remained silent for two hours of questioning. Finally, he said, 'I'm thirsty, but I did it.' Is his confession admissible?",
    options: [
      "No, because he exercised his right to remain silent by not speaking.",
      "No, because the questioning was too long.",
      "Yes, because he did not explicitly and unambiguously invoke his right to remain silent.",
      "Yes, because silence constitutes a waiver of rights."
    ],
    correctAnswer: 2,
    explanation: "Under Berghuis v. Thompkins, a suspect must explicitly and unambiguously invoke their right to remain silent. Mere silence is not an invocation; therefore, a subsequent statement can be a valid waiver.",
    failMessage: "Constitutional Criminal Procedure nuances like 'unambiguous invocation' are frequently tested. We help you learn the 'Magic Words' required.",
    passMessage: "Sharp. You knew that silence isn't enough to stop the questioning. Your Crim Pro knowledge is Bar-ready."
  },
  {
    id: 19,
    question: "A property owner's deed says his land extends to the 'center of the stream.' Over 20 years, the stream slowly shifted its path by 50 feet, adding land to the owner's side. Who owns the new 50-foot strip of land?",
    options: [
      "The state.",
      "The original owner of the land on the other side of the stream.",
      "The current property owner, via accretion.",
      "The federal government, under the Navigable Waters Act."
    ],
    correctAnswer: 2,
    explanation: "Slow, imperceptible changes in water boundaries (accretion) result in the new land belonging to the owner of the bank to which it is added.",
    failMessage: "Property terms like 'Accretion' vs. 'Avulsion' are classic vocabulary traps. We ensure you never mix them up on Exam Day.",
    passMessage: "Correct. Accretion gives you the land; Avulsion (sudden change) does not. You know your Property nuances."
  },
  {
    id: 20,
    question: "A plaintiff won a $100,000 judgment against a defendant in federal court. The defendant did not appeal. Two months later, the plaintiff sued the same defendant again for the same accident, but this time for 'emotional distress' not mentioned in the first suit. How should the court rule?",
    options: [
      "Allow the suit, because emotional distress is a different 'theory' of recovery.",
      "Allow the suit, because the first suit only covered physical damage.",
      "Dismiss the suit, under the doctrine of Claim Preclusion (Res Judicata).",
      "Dismiss the suit, under the doctrine of Issue Preclusion (Collateral Estoppel)."
    ],
    correctAnswer: 2,
    explanation: "Claim Preclusion (Res Judicata) prohibits a party from re-litigating a claim that was or *could have been* litigated in a prior action that reached a final judgment on the merits between the same parties. A single accident creates a single 'claim' for all damages.",
    failMessage: "Res Judicata is about 'Should Have.' If it's the same transaction, you only get one shot. We help you master the 'Transactional Test'.",
    passMessage: "Perfect. You recognized that you can't split a claim. Your preclusion logic is exactly where it needs to be."
  },
  {
    id: 21,
    question: "O conveys Blackacre 'to A and her heirs, but if Blackacre is ever used for commercial purposes, then to B and his heirs.' What interest does B have?",
    options: [
      "A shifting executory interest.",
      "A springing executory interest.",
      "A remainder.",
      "Nothing, because the interest violates the Rule against Perpetuities."
    ],
    correctAnswer: 3,
    explanation: "The interest 'to B and his heirs' is a shifting executory interest that is conditioned on an event (commercial use) that might not occur within 21 years of a life in being. Since there is no time limit on when Blackacre might be used for commercial purposes, it violates the RAP and is voided, leaving A with a Fee Simple Determinable (if it were 'so long as') or Fee Simple Subject to Condition Subsequent (if O kept the right). Here, it leaves A with a fee simple absolute as the condition is stricken.",
    failMessage: "The Rule Against Perpetuities is the 'dreaded' topic for a reason. Foreign-trained attorneys often apply local civil law logic to common law future interests. We can simplify this for you.",
    passMessage: "Incredible. You navigated the RAP successfully. That's a high-level Property insight that most candidates miss."
  },
  {
    id: 22,
    question: "A defendant intended to kill his rival. He waited outside the rival's house with a rifle. When the rival stepped out, the defendant fired, but his shot missed the rival and instead hit and killed a passerby whom the defendant did not see. What is the defendant's most likely conviction for the death of the passerby?",
    options: [
      "First-degree murder, via transferred intent.",
      "Involuntary manslaughter, because he did not intend to kill the passerby.",
      "Depraved heart murder, because he was reckless.",
      "Attempted murder only, as the death of the passerby was an accident."
    ],
    correctAnswer: 0,
    explanation: "Under the doctrine of transferred intent, if a defendant acts with the intent to kill one person and instead kills another, the intent to kill is transferred to the actual victim. Since the defendant had the intent to kill his rival (premeditated/deliberate), he is liable for first-degree murder of the passerby.",
    failMessage: "Transferred intent isn't just for Torts! The Bar Exam frequently applies it to Homicide to catch candidates off guard.",
    passMessage: "Precise. You recognized that the 'intent' follows the 'bullet.' Your Criminal Law foundation is robust."
  },
  {
    id: 23,
    question: "A seller and a buyer entered into a contract for the sale of a house. After the contract was signed but before the closing, the house was destroyed by a fire caused by a lightning strike. Neither party was at fault. The contract was silent on the risk of loss. Who bears the loss under the majority rule?",
    options: [
      "The seller, because he still holds legal title.",
      "The buyer, under the doctrine of equitable conversion.",
      "Both parties equally, as a matter of equity.",
      "The insurance company, regardless of which party bore the risk."
    ],
    correctAnswer: 1,
    explanation: "Under the common law doctrine of equitable conversion, once a binding contract for the sale of land is signed, the buyer is considered the equitable owner of the real property. Therefore, the risk of loss falls on the buyer, even if the seller remains in possession.",
    failMessage: "Equitable Conversion is a 'majority rule' that contradicts many foreign civil codes. Mastering these 'Common Law' defaults is essential for the MBE.",
    passMessage: "Spot on. You remembered that the 'equitable' title passes at the moment of the contract signing. Great work."
  },
  {
    id: 24,
    question: "A defendant believed that his neighbor had stolen his lawnmower. The defendant decided to break into the neighbor's garage at night to take it back. While inside, the defendant realized the lawnmower was actually his own which he had lent to the neighbor and forgotten. He took the mower and left. Is the defendant guilty of burglary?",
    options: [
      "Yes, because he entered with the intent to commit a theft.",
      "Yes, because the neighbor had a superior right of possession at that moment.",
      "No, because he did not actually commit a larceny (it was his own property).",
      "No, because he had a 'claim of right' defense to the underlying felony."
    ],
    correctAnswer: 0,
    explanation: "Burglary is the breaking and entering of the dwelling of another at night with the *intent* to commit a felony therein. The crime is complete upon entry with the required intent. Even if the underlying felony (larceny) couldn't be completed because of a claim of right, the intent to take property he *believed* was being stolen suffices in many jurisdictions, but specifically, the Bar tests the 'intent at the time of entry' element.",
    failMessage: "The 'Intent at Entry' rule is a frequent source of error. The Bar Exam doesn't care if the felony was actually committed—only that you intended it when you crossed the threshold.",
    passMessage: "Correct. You focused on the 'Intent' element of Burglary rather than the outcome of the larceny. That's a key distinction."
  },
  {
    id: 25,
    question: "A and B own Blackacre as joint tenants with right of survivorship. A executes a mortgage on her interest in Blackacre to a bank to secure a loan. In a 'Lien Theory' jurisdiction, what is the effect on the joint tenancy?",
    options: [
      "The joint tenancy is severed, and A and B become tenants in common.",
      "The joint tenancy remains intact.",
      "The joint tenancy is severed only if A defaults on the loan.",
      "The mortgage is void because one joint tenant cannot mortgage their interest without the other's consent."
    ],
    correctAnswer: 1,
    explanation: "In a 'Lien Theory' jurisdiction (the majority), a mortgage is viewed as a lien and does not transfer title. Therefore, it does not destroy the unity of title and the joint tenancy is not severed. In a 'Title Theory' jurisdiction, the mortgage would sever the tenancy.",
    failMessage: "Lien Theory vs. Title Theory is a classic Property split. Foreign attorneys must memorize these US-specific jurisdictional differences.",
    passMessage: "Excellent. You identified the majority 'Lien Theory' rule and its impact on the four unities. Your Property analysis is sharp."
  },
  {
    id: 26,
    question: "A defendant was arrested and charged with a felony. At his first appearance, he requested an attorney, but the court denied it because he was not 'indigent enough.' The defendant represented himself and was convicted. On appeal, he argued his 6th Amendment right was violated. The prosecution argued it was 'harmless error' because the evidence against him was overwhelming. How should the appellate court rule?",
    options: [
      "Affirm, if the error was indeed harmless beyond a reasonable doubt.",
      "Reverse, because the denial of counsel at trial is a structural error.",
      "Reverse, only if the defendant can show he would have won with a lawyer.",
      "Affirm, because the 6th Amendment only applies to federal trials."
    ],
    correctAnswer: 1,
    explanation: "The total deprivation of the right to counsel at trial is considered a 'structural error' that is not subject to harmless error analysis. It results in automatic reversal of the conviction.",
    failMessage: "Harmless Error vs. Structural Error is a high-level Crim Pro concept. Most candidates confuse the two. We help you categorize every constitutional violation correctly.",
    passMessage: "Perfect. You recognized that some rights are so fundamental that their violation can never be considered 'harmless.' Top-tier logic."
  },
  {
    id: 27,
    question: "A landowner granted an easement to a neighbor to 'use the driveway for ingress and egress.' Ten years later, the neighbor built a second house on his lot and started using the driveway for both houses. The landowner sued to block the extra use. How should the court rule?",
    options: [
      "Block the extra use, because an easement is limited to its original scope.",
      "Allow the use, because the easement is 'appurtenant' to the land.",
      "Allow the use, if the increase in use is reasonable and foreseeable.",
      "Block the use, because adding a second house 'surcharges' the easement."
    ],
    correctAnswer: 2,
    explanation: "The scope of an easement is generally determined by the intent of the parties. However, unless the grant states otherwise, it is presumed that the easement is intended to accommodate the reasonable future development of the dominant estate. A second house is often considered reasonable.",
    failMessage: "Easement 'Scope' is a flexible standard that catches many off guard. It's not about what was there then, but what's reasonable now.",
    passMessage: "Correct. You understood the 'Reasonable Development' presumption for easements. That's a sophisticated Property insight."
  },
  {
    id: 28,
    question: "A defendant and his friend agreed to rob a liquor store. The friend went inside with a gun while the defendant waited in the getaway car. Inside, the friend got nervous and shot the clerk, killing him. Can the defendant be convicted of first-degree murder?",
    options: [
      "No, because the defendant did not intend for anyone to die.",
      "No, because the shooting was not a foreseeable consequence of the robbery.",
      "Yes, under the felony-murder rule.",
      "Yes, but only if the defendant was also armed."
    ],
    correctAnswer: 2,
    explanation: "Under the felony-murder rule, a defendant is liable for any death that occurs during the commission of an inherently dangerous felony (like robbery), even if the killing was accidental. Accomplices are equally liable for deaths caused by their co-felons.",
    failMessage: "Felony Murder is the 'harsh' reality of US Criminal Law. We help foreign attorneys adjust to the 'Strict Liability' nature of this homicide theory.",
    passMessage: "Spot on. You applied the 'co-felon liability' aspect of the felony-murder rule perfectly. Great work."
  },
  {
    id: 29,
    question: "An owner of a large tract of land sold the back half to a buyer. The back half was completely 'landlocked' with no access to a public road except across the owner's remaining land. No easement was mentioned in the deed. Does the buyer have a right to cross the owner's land?",
    options: [
      "No, because the deed is the final expression of the parties' intent.",
      "Yes, an easement by prescription.",
      "Yes, an easement by necessity.",
      "Yes, an easement by implication based on prior use."
    ],
    correctAnswer: 2,
    explanation: "An easement by necessity is created when a landowner conveys a portion of their land that is landlocked, leaving the new owner with no out-of-way access except over the grantor's remaining land. It arises by operation of law, not by prior use.",
    failMessage: "Necessity vs. Implication is a common MBE mix-up. Remember: Necessity requires 'Strict' landlocking; Implication requires 'Prior Use.'",
    passMessage: "Incisive. You correctly identified the requirements for an Easement by Necessity. Your Property foundations are solid."
  },
  {
    id: 30,
    question: "A defendant was walking down the street when he saw a woman leave her purse on a bench and walk away. He picked up the purse, intending to find the owner. Two blocks later, he saw a beautiful watch inside and decided to keep it. What is the defendant's most likely conviction?",
    options: [
      "Larceny",
      "Larceny by trick",
      "Embezzlement",
      "No crime, because the initial taking was not trespassory."
    ],
    correctAnswer: 0,
    explanation: "Under the 'continuing trespass' doctrine, if a defendant takes property with a non-felonious intent (but the taking is still technically a trespass because he has no right to it) and later decides to keep it, the 'intent' is deemed to coincide with the 'taking.'",
    failMessage: "The 'Continuing Trespass' doctrine is the Bar's favorite way to 'fix' the timing of intent for Larceny. Mastering this is key to a 160+ MBE score.",
    passMessage: "Excellent. You remembered the 'continuing trespass' exception to the concurrence of act and intent. That's a high-yield insight."
  },
  {
    id: 31,
    question: "A state's recording act says: 'No conveyance of real property shall be valid against a subsequent purchaser for value, without notice thereof, whose conveyance is first recorded.' What type of recording statute is this?",
    options: [
      "Race",
      "Notice",
      "Race-Notice",
      "Pure Notice"
    ],
    correctAnswer: 2,
    explanation: "A Race-Notice statute protects a subsequent purchaser only if they take without notice AND record first. The presence of 'without notice' and 'first recorded' (or 'first duly recorded') identifies this as Race-Notice.",
    failMessage: "Statute Parsing is a vital skill. 'Notice' protects the BFP; 'Race' protects the first to record; 'Race-Notice' requires both. Don't let the word order confuse you.",
    passMessage: "Masterful. You parsed the statutory language correctly. This is one of the most consistently tested Property topics."
  },
  {
    id: 32,
    question: "A defendant is charged with a specific-intent crime. He offers evidence that he was voluntarily intoxicated at the time of the offense to show he could not form the required intent. Is this evidence admissible?",
    options: [
      "Yes, to negate the specific intent element of the crime.",
      "No, because voluntary intoxication is never a defense.",
      "Yes, for any crime, including general intent crimes.",
      "No, unless the intoxication was so severe it caused temporary insanity."
    ],
    correctAnswer: 0,
    explanation: "Voluntary intoxication is a defense to specific-intent crimes (like burglary, larceny, or first-degree murder) if it prevents the defendant from forming the required state of mind. It is NOT a defense to general-intent or reckless crimes.",
    failMessage: "Specific vs. General intent is the 'Rosetta Stone' of Criminal Law. We help you memorize which crimes allow an intoxication defense and which don't.",
    passMessage: "Correct. You understood the limitation of the voluntary intoxication defense to specific-intent crimes. Great work."
  },
  {
    id: 33,
    question: "A landlord and tenant have a written lease that prohibits subletting without the landlord's consent. The tenant sublets to a friend without asking. The landlord finds out and wants to evict the friend. Can the landlord do so?",
    options: [
      "Yes, because the prohibition on subletting is valid.",
      "No, because the landlord has no 'privity of estate' with the subtenant.",
      "No, because the law 'abhors' a forfeiture of a leasehold.",
      "Yes, but only if the lease specifically says the landlord can be 'unreasonable' in withholding consent."
    ],
    correctAnswer: 0,
    explanation: "Prohibitions on assignment or subletting are generally valid and enforceable. If a tenant violates the restriction, the landlord can usually terminate the lease and evict both the tenant and the subtenant.",
    failMessage: "Don't overthink Landlord-Tenant! Most contract-style restrictions in a lease are enforceable as written. We'll show you the few exceptions that actually matter.",
    passMessage: "Precise. You identified the enforceability of the sublease restriction. Your Property knowledge is very practical."
  },
  {
    id: 34,
    question: "A defendant approached a man and said, 'If you don't give me your wallet, I'll beat you up tomorrow.' The man gave him the wallet. What crime has the defendant committed?",
    options: [
      "Robbery",
      "Extortion",
      "Larceny",
      "Assault"
    ],
    correctAnswer: 1,
    explanation: "Extortion (blackmail) involves obtaining property through a threat of *future* harm. Robbery involves a threat of *imminent* harm. Since the threat was for 'tomorrow,' it is extortion.",
    failMessage: "Timing of the threat is the 'Key' to distinguishing Robbery from Extortion. One is imminent; the other is future. Simple, but highly tested.",
    passMessage: "Sharp. You caught the 'future harm' nuance that differentiates Extortion from Robbery. Excellent."
  },
  {
    id: 35,
    question: "A buyer is under contract to buy a piece of land. A title search reveals that the land is subject to a restrictive covenant that limits building height to two stories. The buyer wants to cancel the contract, claiming the title is unmarketable. Can he?",
    options: [
      "Yes, because any encumbrance makes title unmarketable.",
      "No, unless the height restriction is currently being violated.",
      "No, because land-use restrictions are not encumbrances.",
      "Yes, because a restrictive covenant is a private encumbrance that renders title unmarketable."
    ],
    correctAnswer: 3,
    explanation: "Marketable title is title free from reasonable doubt or the threat of litigation. While public zoning laws do not make title unmarketable, private restrictive covenants are considered encumbrances that render title unmarketable unless the buyer waives them.",
    failMessage: "Private vs. Public restrictions have opposite effects on 'Marketability.' This is a 1-in-3 Property question on the MBE. We ensure you're on the right side of it.",
    passMessage: "Excellent. You recognized that private covenants are title defects, unlike general zoning laws. That's a crucial distinction."
  },
  {
    id: 36,
    question: "A defendant intended to kill her husband by poisoning his coffee. She used a powder she believed was arsenic, but it was actually sugar. The husband drank the coffee and was unharmed. Is the defendant guilty of attempted murder?",
    options: [
      "Yes, because she had the intent and took a substantial step.",
      "No, because of the 'factual impossibility' of killing someone with sugar.",
      "No, because no actual harm occurred.",
      "Yes, but only if the husband actually felt sick (assault)."
    ],
    correctAnswer: 0,
    explanation: "Factual impossibility (the fact that the crime couldn't actually be completed because of the circumstances) is NOT a defense to attempt. If the defendant had the intent and took a substantial step, she is guilty.",
    failMessage: "Factual Impossibility is NEVER a defense! Don't let the Bar Exam trick you into thinking a 'failed' attempt is innocent just because it was doomed from the start.",
    passMessage: "Correct. You navigated the 'impossibility' trap successfully. Intent + Substantial Step = Attempt. Period."
  },
  {
    id: 37,
    question: "A property owner borrowed $100,000 from Bank A, giving a mortgage on his land. He then borrowed $50,000 from Bank B, giving a second mortgage. He defaulted on both. Bank B foreclosed. What happens to Bank A's mortgage?",
    options: [
      "It is wiped out by the foreclosure sale.",
      "It remains on the property, and the buyer at the sale takes 'subject to' it.",
      "It is paid first from the proceeds of Bank B's sale.",
      "It is converted into a personal judgment against the owner."
    ],
    correctAnswer: 1,
    explanation: "Foreclosure by a junior lienor (Bank B) wipes out junior interests but does NOT affect senior interests (Bank A). The buyer at the foreclosure sale takes the property subject to the senior mortgage.",
    failMessage: "Foreclosure Priority is the 'math' of Property law. Senior liens stay; Junior liens go. Mastering this hierarchy is vital for your score.",
    passMessage: "Perfect. You understood that senior liens survive a junior foreclosure. This is a core Property principle."
  },
  {
    id: 38,
    question: "A defendant is charged with the arson of an abandoned warehouse. He proves that he did not intend to burn the building, but was only starting a small fire to keep warm, which accidentally spread. Is he guilty of arson?",
    options: [
      "Yes, because arson is a strict liability crime.",
      "Yes, because he acted with 'malice' by creating a fire hazard.",
      "No, because arson requires the 'specific intent' to burn the structure.",
      "No, unless the warehouse was currently being used as a 'dwelling.'"
    ],
    correctAnswer: 1,
    explanation: "Arson is a 'malice' crime, not a specific-intent crime. Malice in the criminal context means either the intent to do the act or acting with extremely reckless disregard of an obvious risk that the harm will occur.",
    failMessage: "Arson 'Malice' is broader than you think. You don't need to want the building to burn; you just need to be extremely reckless. Don't fall for the 'accidental' defense.",
    passMessage: "Great job. You correctly identified that 'malice' includes reckless disregard. Your Criminal Law definitions are precise."
  },
  {
    id: 39,
    question: "A landowner's lot is naturally supported by his neighbor's adjacent lot. The neighbor excavated his land, causing the landowner's lot to sink. The landowner had built a heavy shed on his lot right before the sinking. The neighbor argued the shed's weight caused the collapse. Under what theory can the landowner recover?",
    options: [
      "Strict liability, regardless of the shed.",
      "Strict liability, but only if the land would have sunk even without the shed.",
      "Negligence only, because land with buildings is not protected by strict liability.",
      "No recovery is possible for lateral support in modern jurisdictions."
    ],
    correctAnswer: 1,
    explanation: "A landowner has a right to lateral support from adjacent land. If the land is in its natural state, the neighbor is strictly liable. If there are buildings, the neighbor is strictly liable only if the land *would have collapsed* even in its natural state. Otherwise, negligence must be proven.",
    failMessage: "Lateral Support rules change based on whether the land is 'Natural' or 'Improved.' This 'Would Have Sunk' test is the classic Bar Exam differentiator.",
    passMessage: "Correct. You applied the 'Would Have Sunk' test for lateral support perfectly. That's a high-level Property concept."
  },
  {
    id: 40,
    question: "A defendant was pulled over for a broken taillight. The officer arrested the defendant after finding an outstanding warrant for unpaid tickets. After the defendant was handcuffed and placed in the back of the patrol car, the officer searched the defendant's car and found a bag of cocaine in the glove box. Is the cocaine admissible?",
    options: [
      "Yes, as a search incident to a lawful arrest.",
      "Yes, under the 'automobile exception.'",
      "No, because the defendant was secured and could not reach the car.",
      "No, unless the officer had reason to believe evidence of the crime of arrest (unpaid tickets) was in the car."
    ],
    correctAnswer: 3,
    explanation: "Under Arizona v. Gant, a search of a vehicle incident to arrest is allowed only if: (1) the arrestee is unsecured and within reaching distance of the passenger compartment, OR (2) the officer has reason to believe evidence of the *crime of arrest* might be in the vehicle. Since the crime was unpaid tickets, there was no reason to believe evidence of that crime was in the car.",
    failMessage: "The Gant rule restricted vehicle searches significantly. Foreign attorneys often rely on older, broader 'Search Incident to Arrest' rules. We keep your knowledge current with the latest SCOTUS standards.",
    passMessage: "Masterful. You applied the Gant limitation correctly. Your knowledge of Search and Seizure is exceptionally up-to-date."
  }
];
