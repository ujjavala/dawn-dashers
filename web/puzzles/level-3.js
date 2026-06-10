// @ts-nocheck

(function loadPuzzleLevel3() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[2] = {
    turingPuzzles: [
  {
    "title": "Servo Access Hamming Weight",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: A panel code is 10110110. Enter its Hamming weight (number of 1 bits). Use the clues, trust your logic, and enter your answer.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "Count each 1 in the bit string."
    ],
    "rightExplain": "Correct. There are five 1 bits.",
    "wrongExplain": "Recount 1s, not total bits.",
    "learnUrl": "https://en.wikipedia.org/wiki/Hamming_weight"
  },
  {
    "title": "Neon Relay different-bits rule Chain",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Compute 1 different-bits rule 1 different-bits rule 0 in the servo relay chain. Think calmly, then write the one best answer in the box.",
    "answer": "0",
    "acceptedAnswers": [
      "0",
      "zero"
    ],
    "hints": [
      "different-bits rule pairs: 1 different-bits rule 1 = 0, then 0 different-bits rule 0 = 0."
    ],
    "rightExplain": "Correct. The chain resolves to 0.",
    "wrongExplain": "Evaluate different-bits rule left to right.",
    "learnUrl": "https://en.wikipedia.org/wiki/Exclusive_or"
  },
  {
    "title": "Warehouse Dijkstra Step",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: From node S, tentative distances are A=6, B=3, C=9. Which node is settled next by Dijkstra? Now solve the riddle and send your answer to the team.",
    "answer": "B",
    "acceptedAnswers": [
      "b"
    ],
    "hints": [
      "Dijkstra settles smallest tentative distance next."
    ],
    "rightExplain": "Correct. Node B has the minimum distance 3.",
    "wrongExplain": "Pick the smallest current tentative distance.",
    "learnUrl": "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
  },
  {
    "title": "Servo Bay Topological Hint",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Dependencies: BuildCore before TestCore, TestCore before DeployCore. Which task must be first? Think calmly, then write the one best answer in the box.",
    "answer": "BUILDCORE",
    "acceptedAnswers": [
      "buildcore",
      "build core"
    ],
    "hints": [
      "A prerequisite must occur before dependent tasks."
    ],
    "rightExplain": "Correct. BuildCore must come first.",
    "wrongExplain": "Find the task with no incoming dependency.",
    "learnUrl": "https://en.wikipedia.org/wiki/Topological_sorting"
  },
  {
    "title": "safety number in the Parts Ledger",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A odd-even count check byte uses even odd-even count check. Data bits are 1011001 (four 1s). What odd-even count check bit is appended? Now solve the riddle and send your answer to the team.",
    "answer": "0",
    "acceptedAnswers": [
      "0",
      "zero"
    ],
    "hints": [
      "Even odd-even count check means total 1s should remain even."
    ],
    "rightExplain": "Correct. Already even, so odd-even count check bit is 0.",
    "wrongExplain": "Check whether current count of 1s is even or odd.",
    "learnUrl": "https://en.wikipedia.org/wiki/Parity_bit"
  },
  {
    "title": "Servo Line Scheduling",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Jobs arrive in order J1, J2, J3 under first-in-first-out order scheduling. Which job runs second? Think calmly, then write the one best answer in the box.",
    "answer": "J2",
    "acceptedAnswers": [
      "j2"
    ],
    "hints": [
      "first-in-first-out order preserves arrival order."
    ],
    "rightExplain": "Correct. J2 runs second.",
    "wrongExplain": "List execution exactly in arrival order.",
    "learnUrl": "https://en.wikipedia.org/wiki/Scheduling_(computing)"
  },
  {
    "title": "Greedy Charging Robot",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Robot battery pickups are [4, 9, 6]. Greedy picks largest immediate charge. First pick? Think calmly, then write the one best answer in the box.",
    "answer": "9",
    "acceptedAnswers": [
      "9",
      "nine"
    ],
    "hints": [
      "Greedy chooses local maximum first."
    ],
    "rightExplain": "Correct. 9 is chosen first.",
    "wrongExplain": "Select highest current value.",
    "learnUrl": "https://en.wikipedia.org/wiki/Greedy_algorithm"
  },
  {
    "title": "Servo Log Base2",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: How many bits are needed to represent 31 in unsigned binary? Write your final answer like a puzzle-book hero.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "2^5 = 32, so 0..31 fits in 5 bits."
    ],
    "rightExplain": "Correct. 31 is 11111, which is 5 bits.",
    "wrongExplain": "Find smallest n with 2^n > 31.",
    "learnUrl": "https://en.wikipedia.org/wiki/Binary_number"
  },
  {
    "title": "Industrial Bay Median Latency",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Latencies are 12, 9, 14, 7, 10. What is the median latency? Take a breath, crack the clue, and lock in your answer.",
    "answer": "10",
    "acceptedAnswers": [
      "10",
      "ten"
    ],
    "hints": [
      "Sort values and pick middle."
    ],
    "rightExplain": "Correct. Sorted: 7,9,10,12,14 -> median 10.",
    "wrongExplain": "Sort before taking the center.",
    "learnUrl": "https://en.wikipedia.org/wiki/Median"
  },
  {
    "title": "Servo Bay state-path machine",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: state-path machine transition: from Q1 on input 0 go to Q2. Current state Q1, input 0. Next state? Now solve the riddle and send your answer to the team.",
    "answer": "Q2",
    "acceptedAnswers": [
      "q2"
    ],
    "hints": [
      "Follow the one matching transition."
    ],
    "rightExplain": "Correct. Q1 with 0 transitions to Q2.",
    "wrongExplain": "Use current state and current symbol only.",
    "learnUrl": "https://en.wikipedia.org/wiki/Deterministic_finite_automaton"
  },
  {
    "title": "Bitwise Shift Dock",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Compute 0011 left-shifted by 1 bit (4-bit view). Now solve the riddle and send your answer to the team.",
    "answer": "0110",
    "acceptedAnswers": [
      "0110",
      "110"
    ],
    "hints": [
      "Left shift moves bits left and appends 0 at right."
    ],
    "rightExplain": "Correct. 0011 << 1 becomes 0110.",
    "wrongExplain": "Shift all bits one place to the left.",
    "learnUrl": "https://en.wikipedia.org/wiki/Bitwise_operation"
  },
  {
    "title": "Servo Cache Hit Rate",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: A run had 18 cache hits and 6 misses. Enter hit rate as a fraction of total. Write your final answer like a puzzle-book hero.",
    "answer": "3/4",
    "acceptedAnswers": [
      "3/4",
      "0.75",
      "75%"
    ],
    "hints": [
      "Hit rate = hits / (hits + misses)."
    ],
    "rightExplain": "Correct. 18/(18+6) = 18/24 = 3/4.",
    "wrongExplain": "Compute hits divided by all accesses.",
    "learnUrl": "https://en.wikipedia.org/wiki/Cache_performance_measurement_and_metric"
  },
  {
    "title": "Assembler Branch Offset",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Program counter is at 40 and target is 46. What forward offset is needed? Now solve the riddle and send your answer to the team.",
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "hints": [
      "Offset is target - current position."
    ],
    "rightExplain": "Correct. Forward offset is +6.",
    "wrongExplain": "Subtract current PC from target.",
    "learnUrl": "https://en.wikipedia.org/wiki/Branch_(computer_science)"
  },
  {
    "title": "Servo Bay Trie Prefix",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Words in trie: code, coder, cobble. What 2-letter prefix is shared by all? Think calmly, then write the one best answer in the box.",
    "answer": "CO",
    "acceptedAnswers": [
      "co"
    ],
    "hints": [
      "Compare beginnings of each word."
    ],
    "rightExplain": "Correct. All begin with CO.",
    "wrongExplain": "Take the longest common start from all words.",
    "learnUrl": "https://en.wikipedia.org/wiki/Trie"
  },
  {
    "title": "Industrial Logic Simplify",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Simplify expression (X both-switch rule 1). Enter equivalent expression. Write your final answer like a puzzle-book hero.",
    "answer": "X",
    "acceptedAnswers": [
      "x"
    ],
    "hints": [
      "both-switch rule with 1 leaves value unchanged."
    ],
    "rightExplain": "Correct. X both-switch rule 1 = X.",
    "wrongExplain": "Recall identity elements in Boolean algebra.",
    "learnUrl": "https://en.wikipedia.org/wiki/Boolean_algebra"
  },
  {
    "title": "Servo Probability Binomial",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Two independent fair sensor checks each pass with probability 1/2. Probability both pass? Think calmly, then write the one best answer in the box.",
    "answer": "1/4",
    "acceptedAnswers": [
      "1/4",
      "0.25",
      "25%"
    ],
    "hints": [
      "Independent joint probability multiplies."
    ],
    "rightExplain": "Correct. (1/2)*(1/2)=1/4.",
    "wrongExplain": "Multiply probabilities for independent events.",
    "learnUrl": "https://en.wikipedia.org/wiki/Independence_(probability_theory)"
  },
  {
    "title": "Control Loop Invariant",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Invariant says sum stays 10. Current pair is (x,y)=(6,4). Is invariant satisfied? YES or NO. Use the clues, trust your logic, and enter your answer.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Check whether x+y equals 10."
    ],
    "rightExplain": "Correct. 6+4 keeps the invariant true.",
    "wrongExplain": "Compute x+y and compare to 10.",
    "learnUrl": "https://en.wikipedia.org/wiki/Loop_invariant"
  },
  {
    "title": "Servo Graph Cycle Check",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Edges are A-B, B-C, C-A. Does this graph contain a cycle? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "A-B-C-A returns to start without repeating edges."
    ],
    "rightExplain": "Correct. Triangle A-B-C-A is a cycle.",
    "wrongExplain": "Trace whether you can return to start via unique edges.",
    "learnUrl": "https://en.wikipedia.org/wiki/Cycle_(graph_theory)"
  },
  {
    "title": "Industrial surprise level Warmup",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: A source emits only symbol Z every time. Is its information surprise level high or low? Enter LOW or HIGH. Use the clues, trust your logic, and enter your answer.",
    "answer": "LOW",
    "acceptedAnswers": [
      "low"
    ],
    "hints": [
      "No uncertainty means low surprise level."
    ],
    "rightExplain": "Correct. A constant symbol stream has low surprise level.",
    "wrongExplain": "surprise level rises with uncertainty, not certainty.",
    "learnUrl": "https://en.wikipedia.org/wiki/Entropy_(information_theory)"
  },
  {
    "title": "Servo Tape Rule Pair",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Rule: in state A reading 1 -> write 0, move Left, go to state B. What next state is entered? Write your final answer like a puzzle-book hero.",
    "answer": "B",
    "acceptedAnswers": [
      "b"
    ],
    "hints": [
      "Read the final part of the transition triple."
    ],
    "rightExplain": "Correct. Transition ends in state B.",
    "wrongExplain": "State transition is given directly at rule end.",
    "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine"
  }
],
    treasurePuzzles: [
  {
    "title": "Servo Chest: Neon Panel",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Panel reads hex A. Convert to decimal to unlock. Now solve the riddle and send your answer to the team.",
    "answer": "10",
    "acceptedAnswers": [
      "10",
      "ten"
    ],
    "hints": [
      "Hex A equals decimal 10."
    ],
    "rightExplain": "Correct. Hex A is 10.",
    "wrongExplain": "Recall hex digits after 9.",
    "learnUrl": "https://en.wikipedia.org/wiki/Hexadecimal"
  },
  {
    "title": "Servo Chest: Conveyor Logic",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Lock logic is not-both rule(1,1). Output? Use the clues, trust your logic, and enter your answer.",
    "answer": "0",
    "acceptedAnswers": [
      "0",
      "zero"
    ],
    "hints": [
      "not-both rule is NOT(both-switch rule). both-switch rule(1,1)=1 then negate."
    ],
    "rightExplain": "Correct. not-both rule(1,1)=0.",
    "wrongExplain": "Compute both-switch rule first, then invert.",
    "learnUrl": "https://en.wikipedia.org/wiki/NAND_gate"
  },
  {
    "title": "Servo Chest: Microcode Branch",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: If instruction pointer is 120 and branch offset is -8, new pointer? Take a breath, crack the clue, and lock in your answer.",
    "answer": "112",
    "acceptedAnswers": [
      "112"
    ],
    "hints": [
      "Add signed offset to current pointer."
    ],
    "rightExplain": "Correct. 120 + (-8) = 112.",
    "wrongExplain": "Use current address plus offset.",
    "learnUrl": "https://en.wikipedia.org/wiki/Instruction_pointer"
  }
]
  };
})();
