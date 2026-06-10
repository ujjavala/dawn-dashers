// @ts-nocheck

(function loadPuzzleLevel1() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[0] = {
    turingPuzzles: [
  {
    "title": "Outback Radio Reversal",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: At a cracked roadhouse radio in the outback, the call sign plays as NALA. Reverse it to reveal the codename you must report. Use the clues, trust your logic, and enter your answer.",
    "answer": "ALAN",
    "acceptedAnswers": [
      "alan"
    ],
    "hints": [
      "Read the letters from right to left."
    ],
    "rightExplain": "Right. NALA reversed is ALAN, your first clean decode in the dust.",
    "wrongExplain": "Not yet. This one is only a reversal, no extra shift.",
    "learnUrl": "https://en.wikipedia.org/wiki/Alan_Turing"
  },
  {
    "title": "Spinifex Binary Marker",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: A rusted marker near spinifex grass reads 101 in binary. Convert it to decimal to unlock the gate. Use the clues, trust your logic, and enter your answer.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "Binary 101 means 1x4 + 0x2 + 1x1."
    ],
    "rightExplain": "Correct. 101 equals 5, and the gate servo clicks open.",
    "wrongExplain": "Try again. Evaluate each binary place value.",
    "learnUrl": "https://en.wikipedia.org/wiki/Binary_number"
  },
  {
    "title": "Dune Pattern Stones",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Five stones in a dune channel show 3, 5, 7, 9, ?. The next safe stepping stone is the missing number. Take a breath, crack the clue, and lock in your answer.",
    "answer": "11",
    "acceptedAnswers": [
      "11",
      "eleven"
    ],
    "hints": [
      "The pattern increases by 2 each time."
    ],
    "rightExplain": "Correct. You followed the odd-number rhythm through the dunes.",
    "wrongExplain": "Close. Look for a constant difference between terms.",
    "learnUrl": "https://en.wikipedia.org/wiki/Sequence"
  },
  {
    "title": "Road Sign Caesar Shift",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: A weathered sign says FNV with note \"shift back 1\". Decode the original 3-letter word. Use the clues, trust your logic, and enter your answer.",
    "answer": "EMU",
    "acceptedAnswers": [
      "emu"
    ],
    "hints": [
      "Shift each letter one step backward in the alphabet."
    ],
    "rightExplain": "Correct. F->E, N->M, V->U gives EMU.",
    "wrongExplain": "Nope. Move each letter back, not forward.",
    "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher"
  },
  {
    "title": "Campfire Logic Gate",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Two switches control a camp lamp with an both-switch rule gate. Inputs are 1 and 0. What is the output? Take a breath, crack the clue, and lock in your answer.",
    "answer": "0",
    "acceptedAnswers": [
      "0",
      "zero"
    ],
    "hints": [
      "both-switch rule returns 1 only when both inputs are 1."
    ],
    "rightExplain": "Correct. With one 0 input, both-switch rule outputs 0.",
    "wrongExplain": "Not this time. both-switch rule is strict: both must be 1.",
    "learnUrl": "https://en.wikipedia.org/wiki/Logic_gate"
  },
  {
    "title": "Outback Track Graph",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: You can go Bore->Well (1 hop), Well->Relay (1 hop), Bore->Relay (3 hops). What is the shortest hop count from Bore to Relay? Take a breath, crack the clue, and lock in your answer.",
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "two"
    ],
    "hints": [
      "Compare the direct path to the path via Well."
    ],
    "rightExplain": "Right. Bore->Well->Relay costs 2 hops, better than 3.",
    "wrongExplain": "Recheck path costs; shortest path is not always the direct edge.",
    "learnUrl": "https://en.wikipedia.org/wiki/Shortest_path_problem"
  },
  {
    "title": "Dusty odd-even count check Check",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: A simple odd-even count check check expects an even count of 1 bits. For 1101, is odd-even count check currently even or odd? Use the clues, trust your logic, and enter your answer.",
    "answer": "ODD",
    "acceptedAnswers": [
      "odd"
    ],
    "hints": [
      "Count the number of 1s in 1101."
    ],
    "rightExplain": "Correct. There are three 1s, so odd-even count check is odd.",
    "wrongExplain": "Count again carefully; odd-even count check depends on total 1s.",
    "learnUrl": "https://en.wikipedia.org/wiki/Parity_bit"
  },
  {
    "title": "Outback Base Conversion",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A fuel chit says 12 in decimal, but the lock asks for binary. Enter 12 as binary. Now solve the riddle and send your answer to the team.",
    "answer": "1100",
    "acceptedAnswers": [
      "1100"
    ],
    "hints": [
      "12 = 8 + 4 in powers of 2."
    ],
    "rightExplain": "Correct. 12 in binary is 1100.",
    "wrongExplain": "Try decomposing 12 into powers of 2.",
    "learnUrl": "https://en.wikipedia.org/wiki/Binary_number"
  },
  {
    "title": "Roadhouse Coin Toss",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: A fair coin decides which dusty lane opens. What is the probability of heads? Take a breath, crack the clue, and lock in your answer.",
    "answer": "1/2",
    "acceptedAnswers": [
      "1/2",
      "0.5",
      "50%"
    ],
    "hints": [
      "A fair coin has two equally likely outcomes."
    ],
    "rightExplain": "Correct. Heads probability is 1/2.",
    "wrongExplain": "Not quite. Think equal outcomes for a fair coin.",
    "learnUrl": "https://en.wikipedia.org/wiki/Probability"
  },
  {
    "title": "Crate Sorting at the Servo Yard",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: You scan crate IDs: 8, 3, 5. Which value appears first after sorting ascending? Think calmly, then write the one best answer in the box.",
    "answer": "3",
    "acceptedAnswers": [
      "3",
      "three"
    ],
    "hints": [
      "Ascending means smallest to largest."
    ],
    "rightExplain": "Correct. 3 is the minimum and comes first.",
    "wrongExplain": "Nope. Ascending starts with the smallest number.",
    "learnUrl": "https://en.wikipedia.org/wiki/Sorting_algorithm"
  },
  {
    "title": "Opal safety number Slip",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A note says safety number is the sum of digits in code 472. What safety number should you submit? Now solve the riddle and send your answer to the team.",
    "answer": "13",
    "acceptedAnswers": [
      "13",
      "thirteen"
    ],
    "hints": [
      "Add 4 + 7 + 2."
    ],
    "rightExplain": "Correct. Digit sum is 13.",
    "wrongExplain": "Try direct digit addition.",
    "learnUrl": "https://en.wikipedia.org/wiki/Checksum"
  },
  {
    "title": "Loop Counter in the Dust",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Pseudo-code reads: count = 0; for i from 1 to 4: count += 1. Final count? Take a breath, crack the clue, and lock in your answer.",
    "answer": "4",
    "acceptedAnswers": [
      "4",
      "four"
    ],
    "hints": [
      "The loop runs once for each i value 1,2,3,4."
    ],
    "rightExplain": "Correct. Four iterations, count ends at 4.",
    "wrongExplain": "Count loop iterations one by one.",
    "learnUrl": "https://en.wikipedia.org/wiki/For_loop"
  },
  {
    "title": "Waterhole Network Degree",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Node B connects to A, C, and D in a tiny outback network map. What is degree(B)? Take a breath, crack the clue, and lock in your answer.",
    "answer": "3",
    "acceptedAnswers": [
      "3",
      "three"
    ],
    "hints": [
      "Degree is number of edges touching the node."
    ],
    "rightExplain": "Correct. B has three connections.",
    "wrongExplain": "Recount edges incident to node B.",
    "learnUrl": "https://en.wikipedia.org/wiki/Degree_(graph_theory)"
  },
  {
    "title": "Rust Clock Modulo",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: An old relay clock advances 14 ticks on a 5-tick cycle. What is 14 remainder when divided by 5? Use the clues, trust your logic, and enter your answer.",
    "answer": "4",
    "acceptedAnswers": [
      "4",
      "four"
    ],
    "hints": [
      "Find the remainder after dividing 14 by 5."
    ],
    "rightExplain": "Correct. 14 remainder when divided by 5 is 4.",
    "wrongExplain": "Check the remainder from 14 / 5.",
    "learnUrl": "https://en.wikipedia.org/wiki/Modulo"
  },
  {
    "title": "Camp either-switch rule Gate",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: At a night camp panel, either-switch rule gate inputs are 0 and 0. Output? Now solve the riddle and send your answer to the team.",
    "answer": "0",
    "acceptedAnswers": [
      "0",
      "zero"
    ],
    "hints": [
      "either-switch rule outputs 1 if at least one input is 1."
    ],
    "rightExplain": "Correct. With 0 and 0, either-switch rule outputs 0.",
    "wrongExplain": "Not this one. either-switch rule needs at least one 1 to output 1.",
    "learnUrl": "https://en.wikipedia.org/wiki/Logic_gate"
  },
  {
    "title": "Run-Length Trail Mark",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: A trail mark encodes 3A2B using run-length notation. Decode the full string. Think calmly, then write the one best answer in the box.",
    "answer": "AAABB",
    "acceptedAnswers": [
      "aaabb"
    ],
    "hints": [
      "3A means AAA and 2B means BB."
    ],
    "rightExplain": "Correct. The decoded mark is AAABB.",
    "wrongExplain": "Try expanding each count-letter pair.",
    "learnUrl": "https://en.wikipedia.org/wiki/Run-length_encoding"
  },
  {
    "title": "Prime Opal Seal",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: A lock opens only if the number is prime. Is 29 prime? Enter YES or NO. Write your final answer like a puzzle-book hero.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Check divisors up to sqrt(29)."
    ],
    "rightExplain": "Correct. 29 has no divisors other than 1 and itself.",
    "wrongExplain": "Recheck divisibility; 29 is not divisible by 2,3,5.",
    "learnUrl": "https://en.wikipedia.org/wiki/Prime_number"
  },
  {
    "title": "Bush Telegraph Sequence",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Signal values are 1, 1, 2, 3, 5, ?. Enter the next value. Now solve the riddle and send your answer to the team.",
    "answer": "8",
    "acceptedAnswers": [
      "8",
      "eight"
    ],
    "hints": [
      "Each term is the sum of the previous two."
    ],
    "rightExplain": "Correct. Fibonacci continues with 8.",
    "wrongExplain": "Look at pairwise sums of previous terms.",
    "learnUrl": "https://en.wikipedia.org/wiki/Fibonacci_number"
  },
  {
    "title": "Outback Set Intersection",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Set A = {1,2,3} and set B = {2,4}. Enter the intersection value. Take a breath, crack the clue, and lock in your answer.",
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "two"
    ],
    "hints": [
      "Intersection keeps only shared elements."
    ],
    "rightExplain": "Right. The only shared element is 2.",
    "wrongExplain": "Find what appears in both sets, not either set.",
    "learnUrl": "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
  },
  {
    "title": "Tiny Tape Transition",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: A tape head reads 0. Rule says: write 1 and move right. What symbol is now written in the current cell? Write your final answer like a puzzle-book hero.",
    "answer": "1",
    "acceptedAnswers": [
      "1",
      "one"
    ],
    "hints": [
      "The rule explicitly tells what to write before moving."
    ],
    "rightExplain": "Correct. The cell changes to 1, then head moves right.",
    "wrongExplain": "Read rule order: write first, then move.",
    "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine"
  }
],
    treasurePuzzles: [
  {
    "title": "Outback Chest: Dust Compass",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Inside a red-dust chest, a compass wheel shows directions N,E,S,W coded as 0,1,2,3. If pointer turns from N by +2, where does it point? Use the clues, trust your logic, and enter your answer.",
    "answer": "S",
    "acceptedAnswers": [
      "s",
      "south"
    ],
    "hints": [
      "Map N=0 then add 2 steps clockwise."
    ],
    "rightExplain": "Correct. Two steps from N lands on S.",
    "wrongExplain": "Count clockwise steps from north.",
    "learnUrl": "https://en.wikipedia.org/wiki/Compass_rose"
  },
  {
    "title": "Outback Chest: Opal Digits",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: An opal box asks for digital root of 987. Keep summing digits until one digit remains. Think calmly, then write the one best answer in the box.",
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "hints": [
      "9+8+7=24, then 2+4=6."
    ],
    "rightExplain": "Correct. Digital root is 6.",
    "wrongExplain": "Repeat digit sums until one digit.",
    "learnUrl": "https://en.wikipedia.org/wiki/Digital_root"
  },
  {
    "title": "Outback Chest: Sandstorm Boolean",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Chest lock opens when (A either-switch rule B) is true. A=0, B=1. Does it open? YES or NO. Use the clues, trust your logic, and enter your answer.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "either-switch rule needs at least one true input."
    ],
    "rightExplain": "Correct. One true input is enough to open.",
    "wrongExplain": "Evaluate either-switch rule with one 1 input.",
    "learnUrl": "https://en.wikipedia.org/wiki/Boolean_algebra"
  }
]
  };
})();
