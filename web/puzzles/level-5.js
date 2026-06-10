// @ts-nocheck

(function loadPuzzleLevel5() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[4] = {
    turingPuzzles: [
  {
    "title": "Tasmanian Tape Challenge",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: A Turing rule is (q0,1)->(q1,0,R). Starting in q0 reading 1, what symbol remains on current cell after transition? Take a breath, crack the clue, and lock in your answer.",
    "answer": "0",
    "acceptedAnswers": [
      "0",
      "zero"
    ],
    "hints": [
      "Write action occurs before move action."
    ],
    "rightExplain": "Correct. The cell is overwritten with 0 before moving right.",
    "wrongExplain": "Read transition triple in order: write, move, next state.",
    "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine"
  },
  {
    "title": "Cradle Mountain Halting Hint",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A ranger asks whether one algorithm can always decide if any other arbitrary program halts. According to computability theory, YES or NO? Now solve the riddle and send your answer to the team.",
    "answer": "NO",
    "acceptedAnswers": [
      "no",
      "n"
    ],
    "hints": [
      "This is the famous Halting Problem result."
    ],
    "rightExplain": "Correct. No general decider exists for all programs.",
    "wrongExplain": "Recall Turing proof: universal halting decider is impossible.",
    "learnUrl": "https://en.wikipedia.org/wiki/Halting_problem"
  },
  {
    "title": "Huon Valley NP Clue",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: If a solution can be verified quickly (in polynomial time), the problem is in class P or NP by definition? Enter NP or P. Take a breath, crack the clue, and lock in your answer.",
    "answer": "NP",
    "acceptedAnswers": [
      "np"
    ],
    "hints": [
      "NP is defined by efficiently verifiable certificates."
    ],
    "rightExplain": "Correct. Efficient verification is the NP hallmark.",
    "wrongExplain": "Differentiate solving quickly from verifying quickly.",
    "learnUrl": "https://en.wikipedia.org/wiki/NP_(complexity)"
  },
  {
    "title": "Tasmania SAT Snapshot",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Clause is (x either-switch rule y either-switch rule z). If x=0, y=0, z=1, is clause satisfied? YES or NO. Think calmly, then write the one best answer in the box.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "either-switch rule clause is true if any literal is true."
    ],
    "rightExplain": "Correct. z=1 satisfies the clause.",
    "wrongExplain": "Check whether at least one literal is true.",
    "learnUrl": "https://en.wikipedia.org/wiki/Boolean_satisfiability_problem"
  },
  {
    "title": "Misty Bayes Posterior",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Prior P(A)=0.1 and evidence multiplies odds by 9. Is posterior greater than 0.1? YES or NO. Think calmly, then write the one best answer in the box.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Positive likelihood ratio above 1 increases belief."
    ],
    "rightExplain": "Correct. Odds increase, so posterior exceeds prior.",
    "wrongExplain": "Update direction follows likelihood ratio.",
    "learnUrl": "https://en.wikipedia.org/wiki/Bayes%27_theorem"
  },
  {
    "title": "surprise level in the Cold Wind",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: A source emits four symbols equally likely. surprise level is 1, 2, or 4 bits? Enter 1, 2, or 4. Think calmly, then write the one best answer in the box.",
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "two"
    ],
    "hints": [
      "surprise level of uniform n-symbol source is log2(n)."
    ],
    "rightExplain": "Correct. log2(4)=2 bits.",
    "wrongExplain": "Use log2 of number of equiprobable outcomes.",
    "learnUrl": "https://en.wikipedia.org/wiki/Entropy_(information_theory)"
  },
  {
    "title": "Tasman Graph Cut",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Partition graph nodes into two sets with crossing edges count 7. Is cut value 7? YES or NO. Think calmly, then write the one best answer in the box.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Cut value equals number (or sum weight) of crossing edges."
    ],
    "rightExplain": "Correct. Cut value is exactly the crossing count given.",
    "wrongExplain": "Use the definition of cut value directly.",
    "learnUrl": "https://en.wikipedia.org/wiki/Cut_(graph_theory)"
  },
  {
    "title": "Bruny Island Dynamic Table",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: DP table gives OPT[3]=8 and OPT[4]=13 from recurrence OPT[n]=OPT[n-1]+OPT[n-2]. What is OPT[5]? Think calmly, then write the one best answer in the box.",
    "answer": "21",
    "acceptedAnswers": [
      "21",
      "twenty one"
    ],
    "hints": [
      "Use last two known DP entries."
    ],
    "rightExplain": "Correct. OPT5 = 13 + 8 = 21.",
    "wrongExplain": "Recurrence uses immediate previous two values.",
    "learnUrl": "https://en.wikipedia.org/wiki/Dynamic_programming"
  },
  {
    "title": "Tasmanian Branch and Bound",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Current best solution cost is 42. A branch lower bound is 45. Should this branch be pruned? YES or NO. Think calmly, then write the one best answer in the box.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Minimization: prune when lower bound exceeds current best."
    ],
    "rightExplain": "Correct. Bound 45 cannot beat incumbent 42, so prune.",
    "wrongExplain": "Compare branch bound against best-known objective.",
    "learnUrl": "https://en.wikipedia.org/wiki/Branch_and_bound"
  },
  {
    "title": "Overland Approximation Ratio",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Algorithm output cost is 15, optimum is 12 (minimization). Approximation ratio output/optimum? Now solve the riddle and send your answer to the team.",
    "answer": "1.25",
    "acceptedAnswers": [
      "1.25",
      "5/4"
    ],
    "hints": [
      "Compute 15 divided by 12."
    ],
    "rightExplain": "Correct. Ratio is 1.25.",
    "wrongExplain": "Divide algorithm cost by optimal cost.",
    "learnUrl": "https://en.wikipedia.org/wiki/Approximation_algorithm"
  },
  {
    "title": "Tasmania Markov Chain",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Transition matrix row for SUNNY is [0.6 to SUNNY, 0.4 to RAIN]. If today SUNNY, probability tomorrow RAIN? Think calmly, then write the one best answer in the box.",
    "answer": "0.4",
    "acceptedAnswers": [
      "0.4",
      "40%"
    ],
    "hints": [
      "Use the entry from SUNNY row to RAIN column."
    ],
    "rightExplain": "Correct. Transition probability is 0.4.",
    "wrongExplain": "Read the specific matrix entry.",
    "learnUrl": "https://en.wikipedia.org/wiki/Markov_chain"
  },
  {
    "title": "Cradle Gradient Norm",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Gradient vector is (3,4). Its Euclidean norm is? Write your final answer like a puzzle-book hero.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "Use sqrt(3^2 + 4^2)."
    ],
    "rightExplain": "Correct. Norm is 5.",
    "wrongExplain": "Apply Pythagorean distance formula.",
    "learnUrl": "https://en.wikipedia.org/wiki/Euclidean_distance"
  },
  {
    "title": "Tasman Logic Quantifier",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Statement: \"For all integers n, n^2 >= 0\". Is statement true? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Square of any real/integer is nonnegative."
    ],
    "rightExplain": "Correct. Universal statement holds.",
    "wrongExplain": "Check whether any counterexample exists.",
    "learnUrl": "https://en.wikipedia.org/wiki/Quantifier_(logic)"
  },
  {
    "title": "NP Witness Check",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Given candidate path length 19 and claimed bound <=20, does this witness satisfy the bound? YES or NO. Think calmly, then write the one best answer in the box.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Verification is direct comparison with threshold."
    ],
    "rightExplain": "Correct. 19 is within bound 20.",
    "wrongExplain": "Compare candidate value to allowed maximum.",
    "learnUrl": "https://en.wikipedia.org/wiki/NP_(complexity)"
  },
  {
    "title": "Tasmanian Reduction Clue",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: If problem A polynomially reduces to known hard problem B, does this suggest A is at least as hard as B? YES or NO. Take a breath, crack the clue, and lock in your answer.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Reduction preserves hardness direction from target to source in this framing."
    ],
    "rightExplain": "Correct. Such reduction indicates A is at least as hard as B in this context.",
    "wrongExplain": "Remember how polynomial reductions compare problem difficulty.",
    "learnUrl": "https://en.wikipedia.org/wiki/Reduction_(complexity)"
  },
  {
    "title": "Tassie Automata Closure",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Regular languages are closed under union. Is this true? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "This is a standard closure property of regular languages."
    ],
    "rightExplain": "Correct. Union of regular languages is regular.",
    "wrongExplain": "Recall regular-language closure rules.",
    "learnUrl": "https://en.wikipedia.org/wiki/Regular_language"
  },
  {
    "title": "Mersey River Min-Cut Max-Flow",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: A network has max flow value 14. What is min cut value by theorem? Take a breath, crack the clue, and lock in your answer.",
    "answer": "14",
    "acceptedAnswers": [
      "14",
      "fourteen"
    ],
    "hints": [
      "Max-flow min-cut theorem equates these values."
    ],
    "rightExplain": "Correct. Min cut equals max flow: 14.",
    "wrongExplain": "Use max-flow min-cut equality.",
    "learnUrl": "https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem"
  },
  {
    "title": "Tasmania Simulated Annealing",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: At high temperature, does simulated annealing accept some worse moves? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Early exploration accepts uphill/downhill with higher probability."
    ],
    "rightExplain": "Correct. High temperature allows occasional worse moves.",
    "wrongExplain": "Think exploration before cooling narrows choices.",
    "learnUrl": "https://en.wikipedia.org/wiki/Simulated_annealing"
  },
  {
    "title": "Southwest Coast Information Gain",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: surprise level before split is 1.0, after split weighted surprise level is 0.6. Information gain? Use the clues, trust your logic, and enter your answer.",
    "answer": "0.4",
    "acceptedAnswers": [
      "0.4"
    ],
    "hints": [
      "Gain = before - after."
    ],
    "rightExplain": "Correct. Information gain is 0.4.",
    "wrongExplain": "Subtract post-split surprise level from original surprise level.",
    "learnUrl": "https://en.wikipedia.org/wiki/Information_gain_in_decision_trees"
  },
  {
    "title": "Final Tasman Checkpoint",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A decider must halt on all inputs. If a machine loops forever on one input, is it a decider? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "NO",
    "acceptedAnswers": [
      "no",
      "n"
    ],
    "hints": [
      "Deciders must halt for every possible input."
    ],
    "rightExplain": "Correct. Non-halting on any input means not a decider.",
    "wrongExplain": "Use the formal requirement for decidability.",
    "learnUrl": "https://en.wikipedia.org/wiki/Decider_(Turing_machine)"
  }
],
    treasurePuzzles: [
  {
    "title": "Tasmania Chest: Misty Automata",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Regular expression a*b accepts strings of zero or more a then one b. Does aaab match? YES or NO. Write your final answer like a puzzle-book hero.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "aaab is many a then one b."
    ],
    "rightExplain": "Correct. aaab matches a*b.",
    "wrongExplain": "Check pattern: any number of a, then b.",
    "learnUrl": "https://en.wikipedia.org/wiki/Regular_expression"
  },
  {
    "title": "Tasmania Chest: Halting Sign",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A function that always returns after finite steps is called halting. Is this halting behavior? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Finite completion means halt."
    ],
    "rightExplain": "Correct. Finite-step completion is halting.",
    "wrongExplain": "Determine whether execution always terminates.",
    "learnUrl": "https://en.wikipedia.org/wiki/Halting"
  },
  {
    "title": "Tasmania Chest: Final Cipher",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A summit chest label says \"TAS\" shifted +1 became \"UBT\". Decode UBT by shifting -1. Now solve the riddle and send your answer to the team.",
    "answer": "TAS",
    "acceptedAnswers": [
      "tas"
    ],
    "hints": [
      "Reverse the given shift by one step back."
    ],
    "rightExplain": "Correct. UBT shifted back gives TAS.",
    "wrongExplain": "Move each letter back by one.",
    "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher"
  }
]
  };
})();
