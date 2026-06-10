// @ts-nocheck

(function loadPuzzleLevel2() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[1] = {
    turingPuzzles: [
  {
    "title": "Eucalyptus Cipher Track",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Bushland scouts encrypted KOALA with +2 Caesar shift, giving MQCNC. Decode MQCNC back to the original word. Now solve the riddle and send your answer to the team.",
    "answer": "KOALA",
    "acceptedAnswers": [
      "koala"
    ],
    "hints": [
      "Shift each letter backward by 2."
    ],
    "rightExplain": "Correct. MQCNC shifted back by 2 is KOALA.",
    "wrongExplain": "Not quite. Reverse the +2 shift by moving letters back 2.",
    "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher"
  },
  {
    "title": "Creek Binary Weight",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: A creek bridge plate reads 10010 in binary. Convert it to decimal. Take a breath, crack the clue, and lock in your answer.",
    "answer": "18",
    "acceptedAnswers": [
      "18",
      "eighteen"
    ],
    "hints": [
      "10010 = 16 + 2."
    ],
    "rightExplain": "Correct. Binary 10010 equals 18.",
    "wrongExplain": "Try place values 16,8,4,2,1.",
    "learnUrl": "https://en.wikipedia.org/wiki/Binary_number"
  },
  {
    "title": "Wombat Burrow nearest-first route search",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Burrow graph: Start->A, Start->B, A->Goal, B->C, C->Goal. Using nearest-first route search, which node is expanded second after Start if neighbors are listed A then B? Write your final answer like a puzzle-book hero.",
    "answer": "A",
    "acceptedAnswers": [
      "a"
    ],
    "hints": [
      "nearest-first route search expands nodes in first-listed line order."
    ],
    "rightExplain": "Correct. The exploration line receives A then B, so A is expanded second overall.",
    "wrongExplain": "Check nearest-first route search insertion order from Start.",
    "learnUrl": "https://en.wikipedia.org/wiki/Breadth-first_search"
  },
  {
    "title": "Bushland Truth Table",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: For expression (A both-switch rule B) with A=1 and B=1, output? Write your final answer like a puzzle-book hero.",
    "answer": "1",
    "acceptedAnswers": [
      "1",
      "one"
    ],
    "hints": [
      "both-switch rule with both true returns true."
    ],
    "rightExplain": "Correct. 1 both-switch rule 1 is 1.",
    "wrongExplain": "Revisit both-switch rule gate rule.",
    "learnUrl": "https://en.wikipedia.org/wiki/Boolean_algebra"
  },
  {
    "title": "Lyrebird Sort Swap Count",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: In one bubble-sort pass on [4,2,3], how many swaps occur? Take a breath, crack the clue, and lock in your answer.",
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "two"
    ],
    "hints": [
      "Compare 4-2 then 4-3 in first pass."
    ],
    "rightExplain": "Correct. Swap 4 with 2, then 4 with 3.",
    "wrongExplain": "Trace adjacent comparisons in first pass.",
    "learnUrl": "https://en.wikipedia.org/wiki/Bubble_sort"
  },
  {
    "title": "Billabong Probability",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: A bag has 3 green gum nuts and 1 red gum nut. Probability of drawing red? Think calmly, then write the one best answer in the box.",
    "answer": "1/4",
    "acceptedAnswers": [
      "1/4",
      "0.25",
      "25%"
    ],
    "hints": [
      "Red outcomes over total outcomes."
    ],
    "rightExplain": "Correct. 1 favorable out of 4 total.",
    "wrongExplain": "Count total nuts and favorable red nuts.",
    "learnUrl": "https://en.wikipedia.org/wiki/Probability"
  },
  {
    "title": "Bushland Remainder Marker",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Trail marker says compute 37 remainder when divided by 6 to pick the safe fork. Write your final answer like a puzzle-book hero.",
    "answer": "1",
    "acceptedAnswers": [
      "1",
      "one"
    ],
    "hints": [
      "6x6 = 36, then remainder is 1."
    ],
    "rightExplain": "Correct. 37 remainder when divided by 6 is 1.",
    "wrongExplain": "Find nearest multiple of 6 below 37.",
    "learnUrl": "https://en.wikipedia.org/wiki/Modulo"
  },
  {
    "title": "Greedy Seed Pickup",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Seed values on a path: 9, 5, 2. A greedy picker takes highest immediate value first. Which value is picked first? Now solve the riddle and send your answer to the team.",
    "answer": "9",
    "acceptedAnswers": [
      "9",
      "nine"
    ],
    "hints": [
      "Greedy chooses best local option immediately."
    ],
    "rightExplain": "Correct. Greedy starts with 9.",
    "wrongExplain": "Think local maximum, not future totals.",
    "learnUrl": "https://en.wikipedia.org/wiki/Greedy_algorithm"
  },
  {
    "title": "Koala Hash Bucket",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Hash function h(x)=x remainder when divided by 5. Which bucket does key 17 go to? Use the clues, trust your logic, and enter your answer.",
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "two"
    ],
    "hints": [
      "Compute 17 remainder when divided by 5."
    ],
    "rightExplain": "Correct. Key 17 maps to bucket 2.",
    "wrongExplain": "Use remainder on division by 5.",
    "learnUrl": "https://en.wikipedia.org/wiki/Hash_table"
  },
  {
    "title": "Echidna Path Cost",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Paths to camp: A costs 4+3, B costs 2+6, C costs 5+1. Which has smallest total cost? Enter A, B, or C. Use the clues, trust your logic, and enter your answer.",
    "answer": "C",
    "acceptedAnswers": [
      "c"
    ],
    "hints": [
      "Compute each path total and compare."
    ],
    "rightExplain": "Correct. C totals 6, lower than A=7 and B=8.",
    "wrongExplain": "Add each path carefully before choosing.",
    "learnUrl": "https://en.wikipedia.org/wiki/Shortest_path_problem"
  },
  {
    "title": "Birdsong Compression",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Run-length encode AAAAABB. Enter encoded form using count+letter. Write your final answer like a puzzle-book hero.",
    "answer": "5A2B",
    "acceptedAnswers": [
      "5a2b"
    ],
    "hints": [
      "Count consecutive As then Bs."
    ],
    "rightExplain": "Correct. Five As then two Bs -> 5A2B.",
    "wrongExplain": "Group identical consecutive letters first.",
    "learnUrl": "https://en.wikipedia.org/wiki/Run-length_encoding"
  },
  {
    "title": "Bushland different-bits rule Gate",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A warning beacon uses different-bits rule with inputs 1 and 0. Output? Now solve the riddle and send your answer to the team.",
    "answer": "1",
    "acceptedAnswers": [
      "1",
      "one"
    ],
    "hints": [
      "different-bits rule is 1 when inputs differ."
    ],
    "rightExplain": "Correct. Inputs differ, so different-bits rule outputs 1.",
    "wrongExplain": "Check whether inputs are same or different.",
    "learnUrl": "https://en.wikipedia.org/wiki/Exclusive_or"
  },
  {
    "title": "Possum Stack Undo",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Around the campfire, the possum places token A on the crate, then token B on top, then takes the top token back. Which token remains on top? Use the clues, trust your logic, and enter your answer.",
    "answer": "A",
    "acceptedAnswers": [
      "a"
    ],
    "hints": [
      "Stack is last-in-first-out order: last in, first out."
    ],
    "rightExplain": "Correct. B is popped, leaving A on top.",
    "wrongExplain": "Trace stack order with last-in-first-out order behavior.",
    "learnUrl": "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
  },
  {
    "title": "Water Pump Line Order",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: At the bush water pump, KOALA joins the line first, then EMU. When one mate leaves from the front, who leaves? Think calmly, then write the one best answer in the box.",
    "answer": "KOALA",
    "acceptedAnswers": [
      "koala"
    ],
    "hints": [
      "A line at the pump follows first-in, first-out order."
    ],
    "rightExplain": "Correct. KOALA entered first, so leaves first.",
    "wrongExplain": "Use first-in-first-out order order for front-of-line removal.",
    "learnUrl": "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"
  },
  {
    "title": "Bushland Median Map",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Sample times are 8, 3, 5, 7, 4. What is the median? Take a breath, crack the clue, and lock in your answer.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "Sort values first, then pick middle."
    ],
    "rightExplain": "Correct. Sorted list is 3,4,5,7,8 so median is 5.",
    "wrongExplain": "Sort before taking center value.",
    "learnUrl": "https://en.wikipedia.org/wiki/Median"
  },
  {
    "title": "Gumtree Frequency Count",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: In code string ABACABA, how many times does A appear? Now solve the riddle and send your answer to the team.",
    "answer": "4",
    "acceptedAnswers": [
      "4",
      "four"
    ],
    "hints": [
      "Count every A occurrence."
    ],
    "rightExplain": "Correct. A appears 4 times.",
    "wrongExplain": "Count letters carefully from start to end.",
    "learnUrl": "https://en.wikipedia.org/wiki/Frequency_(statistics)"
  },
  {
    "title": "Bushland Markov Step",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: A weather model says if today is DRY, tomorrow is DRY with probability 0.7. Enter that transition probability. Write your final answer like a puzzle-book hero.",
    "answer": "0.7",
    "acceptedAnswers": [
      "0.7",
      "70%"
    ],
    "hints": [
      "Use the exact transition value given."
    ],
    "rightExplain": "Correct. P(DRY->DRY)=0.7.",
    "wrongExplain": "Read the transition probability directly.",
    "learnUrl": "https://en.wikipedia.org/wiki/Markov_chain"
  },
  {
    "title": "Platypus Bitmask",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: Apply bitmask 0110 to value 1110 using both-switch rule. Result? Think calmly, then write the one best answer in the box.",
    "answer": "0110",
    "acceptedAnswers": [
      "0110",
      "110"
    ],
    "hints": [
      "both-switch rule keeps 1 only where both bits are 1."
    ],
    "rightExplain": "Correct. 1110 both-switch rule 0110 = 0110.",
    "wrongExplain": "Compute bit by bit using both-switch rule.",
    "learnUrl": "https://en.wikipedia.org/wiki/Mask_(computing)"
  },
  {
    "title": "Bushland Finite-State Sign",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: State machine: S0 on input 1 goes to S1. If currently S0 and input is 1, next state? Think calmly, then write the one best answer in the box.",
    "answer": "S1",
    "acceptedAnswers": [
      "s1"
    ],
    "hints": [
      "Follow the given transition exactly."
    ],
    "rightExplain": "Correct. Input 1 moves S0 to S1.",
    "wrongExplain": "Read transition rule from current state S0.",
    "learnUrl": "https://en.wikipedia.org/wiki/Finite-state_machine"
  },
  {
    "title": "Myrtle Branch Predicate",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Condition is x > 10 with x = 12. Does branch execute? Enter YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Compare 12 and 10 directly."
    ],
    "rightExplain": "Correct. 12 > 10, branch runs.",
    "wrongExplain": "Evaluate the inequality carefully.",
    "learnUrl": "https://en.wikipedia.org/wiki/Conditional_(computer_programming)"
  }
],
    treasurePuzzles: [
  {
    "title": "Bushland Chest: Creek Bridge",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A bridge chest asks for gcd(18,24). Enter greatest common divisor. Now solve the riddle and send your answer to the team.",
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "hints": [
      "List common divisors or use Euclid algorithm."
    ],
    "rightExplain": "Correct. gcd(18,24)=6.",
    "wrongExplain": "Find largest number dividing both values.",
    "learnUrl": "https://en.wikipedia.org/wiki/Greatest_common_divisor"
  },
  {
    "title": "Bushland Chest: Wattle Cipher",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Cipher note says shift each letter in DPN by -1. Decode the chest codeword. Take a breath, crack the clue, and lock in your answer.",
    "answer": "COM",
    "acceptedAnswers": [
      "com"
    ],
    "hints": [
      "Move each letter one step back alphabetically."
    ],
    "rightExplain": "Correct. D->C, P->O, N->M gives COM.",
    "wrongExplain": "Shift backward, not forward.",
    "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher"
  },
  {
    "title": "Bushland Chest: Frog-Hop Path",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Shortest route weights are 2, 2, and 3 on three edges. Total route cost? Take a breath, crack the clue, and lock in your answer.",
    "answer": "7",
    "acceptedAnswers": [
      "7",
      "seven"
    ],
    "hints": [
      "Add all edge weights on chosen path."
    ],
    "rightExplain": "Correct. Total path cost is 7.",
    "wrongExplain": "Sum each edge on the route.",
    "learnUrl": "https://en.wikipedia.org/wiki/Shortest_path_problem"
  }
]
  };
})();
