// @ts-nocheck

(function loadPuzzleLevel4() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[3] = {
    turingPuzzles: [
  {
    "title": "Lighthouse Beam Binary",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: The lighthouse blinks 111001 in binary for this tide cycle. Convert to decimal. Use the clues, trust your logic, and enter your answer.",
    "answer": "57",
    "acceptedAnswers": [
      "57",
      "fifty seven"
    ],
    "hints": [
      "32+16+8+1 = 57."
    ],
    "rightExplain": "Correct. 111001 corresponds to 57.",
    "wrongExplain": "Use place values 32,16,8,4,2,1.",
    "learnUrl": "https://en.wikipedia.org/wiki/Binary_number"
  },
  {
    "title": "Coastal Routing Dijkstra",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Harbor graph distances from source are Jetty=11, Beacon=7, Wharf=9. Which node is settled next? Take a breath, crack the clue, and lock in your answer.",
    "answer": "BEACON",
    "acceptedAnswers": [
      "beacon"
    ],
    "hints": [
      "Pick smallest tentative distance."
    ],
    "rightExplain": "Correct. Beacon at distance 7 settles next.",
    "wrongExplain": "Choose minimum among tentative labels.",
    "learnUrl": "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
  },
  {
    "title": "Tide Table remainder when divided by Arithmetic",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: A tide register loops every 12 ticks. After 53 ticks, what position index remains (remainder when divided by 12)? Use the clues, trust your logic, and enter your answer.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "Find 53 remainder 12."
    ],
    "rightExplain": "Correct. 53 remainder when divided by 12 = 5.",
    "wrongExplain": "12x4 is 48; what remains?",
    "learnUrl": "https://en.wikipedia.org/wiki/Modulo"
  },
  {
    "title": "Coastline Bayesian Clue",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: A detector is 90% accurate for storms. Prior storm chance is 20%. Detector says storm. Which is larger now: 20% or posterior? Enter POSTERIOR or PRIOR. Now solve the riddle and send your answer to the team.",
    "answer": "POSTERIOR",
    "acceptedAnswers": [
      "posterior"
    ],
    "hints": [
      "A positive test with good accuracy usually increases probability."
    ],
    "rightExplain": "Correct. Evidence raises belief above prior in this setup.",
    "wrongExplain": "Think update after evidence, not before.",
    "learnUrl": "https://en.wikipedia.org/wiki/Bayes%27_theorem"
  },
  {
    "title": "Pier different-bits rule safety number",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Compute different-bits rule safety number of bytes 1010 and 1100. Now solve the riddle and send your answer to the team.",
    "answer": "0110",
    "acceptedAnswers": [
      "0110",
      "110"
    ],
    "hints": [
      "different-bits rule bit is 1 when bits differ."
    ],
    "rightExplain": "Correct. 1010 different-bits rule 1100 = 0110.",
    "wrongExplain": "Do bitwise comparison position by position.",
    "learnUrl": "https://en.wikipedia.org/wiki/Exclusive_or"
  },
  {
    "title": "Wavefront nearest-first route search Layers",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: In nearest-first route search from node S, nodes A and B are at depth 1, node C from A at depth 2. What depth is C? Now solve the riddle and send your answer to the team.",
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "two"
    ],
    "hints": [
      "Depth increases by one per edge from source."
    ],
    "rightExplain": "Correct. C is two edges away from S.",
    "wrongExplain": "Count edges from source node S to C.",
    "learnUrl": "https://en.wikipedia.org/wiki/Breadth-first_search"
  },
  {
    "title": "Lighthouse state-path machine Accept",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: state-path machine accepts strings ending with 1. Does 1011 get accepted? YES or NO. Think calmly, then write the one best answer in the box.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Check the final bit only for this state-path machine rule."
    ],
    "rightExplain": "Correct. 1011 ends with 1, so accepted.",
    "wrongExplain": "Use acceptance criterion: string must end with 1.",
    "learnUrl": "https://en.wikipedia.org/wiki/Deterministic_finite_automaton"
  },
  {
    "title": "Coastal Prefix Code",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Codes are A=0, B=10, C=11. Decode bitstream 011. Take a breath, crack the clue, and lock in your answer.",
    "answer": "AC",
    "acceptedAnswers": [
      "ac"
    ],
    "hints": [
      "Use prefix chunks from left to right: 0 then 11."
    ],
    "rightExplain": "Correct. 0 maps to A and 11 maps to C, so the decode is AC.",
    "wrongExplain": "Try parsing with prefix property from left to right.",
    "learnUrl": "https://en.wikipedia.org/wiki/Prefix_code"
  },
  {
    "title": "Harbor harbor flow Load",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: Arrival rate is 6 boats/hour, service rate 8 boats/hour. Is system stable (arrival < service)? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Compare lambda and mu directly."
    ],
    "rightExplain": "Correct. 6 < 8 so basic stability condition holds.",
    "wrongExplain": "Check if arrivals exceed service capacity.",
    "learnUrl": "https://en.wikipedia.org/wiki/Queueing_theory"
  },
  {
    "title": "Signal Compression Ratio",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Original log length is 200 chars, compressed length 80 chars. Enter compression ratio original/compressed. Take a breath, crack the clue, and lock in your answer.",
    "answer": "2.5",
    "acceptedAnswers": [
      "2.5",
      "5/2"
    ],
    "hints": [
      "Compute 200 divided by 80."
    ],
    "rightExplain": "Correct. Ratio is 2.5.",
    "wrongExplain": "Divide original size by compressed size.",
    "learnUrl": "https://en.wikipedia.org/wiki/Data_compression"
  },
  {
    "title": "Coastal Dynamic Programming",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Recurrence says F(n)=F(n-1)+F(n-2), with F(1)=1 and F(2)=2. What is F(4)? Use the clues, trust your logic, and enter your answer.",
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "five"
    ],
    "hints": [
      "First find F(3), then F(4)."
    ],
    "rightExplain": "Correct. F3=3 and F4=5.",
    "wrongExplain": "Expand recurrence step by step.",
    "learnUrl": "https://en.wikipedia.org/wiki/Dynamic_programming"
  },
  {
    "title": "Lighthouse Gradient Step",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: A model parameter w=10, gradient is +3, learning rate 0.1. New w after one gradient-descent step? Take a breath, crack the clue, and lock in your answer.",
    "answer": "9.7",
    "acceptedAnswers": [
      "9.7"
    ],
    "hints": [
      "step-down learning method: w_new = w - lr * grad."
    ],
    "rightExplain": "Correct. 10 - 0.1x3 = 9.7.",
    "wrongExplain": "Subtract lr multiplied by gradient.",
    "learnUrl": "https://en.wikipedia.org/wiki/Gradient_descent"
  },
  {
    "title": "Saltwind Confusion Matrix",
    "instruction": "The wind shifts and a fresh clue arrives in your path. Story clue: Classifier results: TP=30, FP=10. Precision equals TP/(TP+FP). Enter precision. Write your final answer like a puzzle-book hero.",
    "answer": "0.75",
    "acceptedAnswers": [
      "0.75",
      "3/4",
      "75%"
    ],
    "hints": [
      "Use 30/(30+10)."
    ],
    "rightExplain": "Correct. Precision is 0.75.",
    "wrongExplain": "Apply precision formula exactly.",
    "learnUrl": "https://en.wikipedia.org/wiki/Precision_and_recall"
  },
  {
    "title": "Coastal Minimax Choice",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Two moves have worst-case scores: Move A = 2, Move B = 5. Which does minimax choose? Use the clues, trust your logic, and enter your answer.",
    "answer": "B",
    "acceptedAnswers": [
      "b"
    ],
    "hints": [
      "Maximize the minimum guaranteed score."
    ],
    "rightExplain": "Correct. Minimax picks B because 5 > 2 in worst case.",
    "wrongExplain": "Compare worst-case outcomes only.",
    "learnUrl": "https://en.wikipedia.org/wiki/Minimax"
  },
  {
    "title": "Lighthouse surprise level Bit",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: A fair coin source has surprise level how many bits per toss? Take a breath, crack the clue, and lock in your answer.",
    "answer": "1",
    "acceptedAnswers": [
      "1",
      "one"
    ],
    "hints": [
      "Maximum uncertainty between two equal outcomes is 1 bit."
    ],
    "rightExplain": "Correct. Fair binary source surprise level is 1 bit.",
    "wrongExplain": "surprise level of fair yes/no source is the textbook baseline.",
    "learnUrl": "https://en.wikipedia.org/wiki/Entropy_(information_theory)"
  },
  {
    "title": "Coastal Hill-Climb Trap",
    "instruction": "The terrain hums with secrets, and this challenge is the next one to crack. Story clue: An optimizer reaches a point better than neighbors but not globally best. Is this a local optimum? YES or NO. Now solve the riddle and send your answer to the team.",
    "answer": "YES",
    "acceptedAnswers": [
      "yes",
      "y"
    ],
    "hints": [
      "Local optimum beats nearby points only."
    ],
    "rightExplain": "Correct. That is the definition of a local optimum.",
    "wrongExplain": "Distinguish local best from global best.",
    "learnUrl": "https://en.wikipedia.org/wiki/Local_optimum"
  },
  {
    "title": "Jetty A-Star Estimate",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: A* uses f(n)=g(n)+h(n). If g=7 and h=4, what is f? Think calmly, then write the one best answer in the box.",
    "answer": "11",
    "acceptedAnswers": [
      "11",
      "eleven"
    ],
    "hints": [
      "Add path-so-far and heuristic estimate."
    ],
    "rightExplain": "Correct. f=11.",
    "wrongExplain": "Use f=g+h directly.",
    "learnUrl": "https://en.wikipedia.org/wiki/A*_search_algorithm"
  },
  {
    "title": "Coastal Matrix Transform",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Apply 2x scale to vector (3,4). What is new x component? Take a breath, crack the clue, and lock in your answer.",
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "hints": [
      "Scaling by 2 doubles each component."
    ],
    "rightExplain": "Correct. x becomes 6.",
    "wrongExplain": "Multiply each coordinate by 2.",
    "learnUrl": "https://en.wikipedia.org/wiki/Linear_transformation"
  },
  {
    "title": "Lighthouse CRC Idea",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: CRC is mainly used for detection or correction of random transmission errors? Enter DETECTION or CORRECTION. Take a breath, crack the clue, and lock in your answer.",
    "answer": "DETECTION",
    "acceptedAnswers": [
      "detection"
    ],
    "hints": [
      "CRC flags likely corruption; it does not usually repair data."
    ],
    "rightExplain": "Correct. CRC is an error-detection mechanism.",
    "wrongExplain": "Think what CRC is best known for in networking.",
    "learnUrl": "https://en.wikipedia.org/wiki/Cyclic_redundancy_check"
  },
  {
    "title": "Stormfront Transition",
    "instruction": "A dusty tracker note flaps against your satchel as you approach the next marker. Story clue: State machine on coast has state CALM and on input WIND goes to ROUGH. Current CALM, input WIND. Next state? Think calmly, then write the one best answer in the box.",
    "answer": "ROUGH",
    "acceptedAnswers": [
      "rough"
    ],
    "hints": [
      "Follow given transition directly."
    ],
    "rightExplain": "Correct. CALM transitions to ROUGH.",
    "wrongExplain": "Use current state and input to pick next state.",
    "learnUrl": "https://en.wikipedia.org/wiki/Finite-state_machine"
  }
],
    treasurePuzzles: [
  {
    "title": "Coastal Chest: Tide Predictor",
    "instruction": "A local guide grins and slides a coded note across the camp table. Story clue: Two independent wave alarms each fail with probability 0.1. Probability both fail? Take a breath, crack the clue, and lock in your answer.",
    "answer": "0.01",
    "acceptedAnswers": [
      "0.01",
      "1%"
    ],
    "hints": [
      "Multiply independent probabilities."
    ],
    "rightExplain": "Correct. 0.1 x 0.1 = 0.01.",
    "wrongExplain": "For independent events, multiply.",
    "learnUrl": "https://en.wikipedia.org/wiki/Independence_(probability_theory)"
  },
  {
    "title": "Coastal Chest: Lighthouse Prefix",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: Prefix-free map: A=0, B=10, C=11. Decode 1011. Use the clues, trust your logic, and enter your answer.",
    "answer": "BC",
    "acceptedAnswers": [
      "bc"
    ],
    "hints": [
      "Read left to right with shortest valid codewords."
    ],
    "rightExplain": "Correct. 10 is B, 11 is C.",
    "wrongExplain": "Split using valid prefix code chunks.",
    "learnUrl": "https://en.wikipedia.org/wiki/Prefix_code"
  },
  {
    "title": "Coastal Chest: Harbor Throughput",
    "instruction": "Your crew pauses at the trail edge while a puzzle clue lights up in the logbook. Story clue: System processed 240 packets in 60 seconds. Throughput packets per second? Use the clues, trust your logic, and enter your answer.",
    "answer": "4",
    "acceptedAnswers": [
      "4",
      "four"
    ],
    "hints": [
      "Divide packets by time in seconds."
    ],
    "rightExplain": "Correct. Throughput is 4 packets/s.",
    "wrongExplain": "Use rate = amount / time.",
    "learnUrl": "https://en.wikipedia.org/wiki/Throughput"
  }
]
  };
})();
