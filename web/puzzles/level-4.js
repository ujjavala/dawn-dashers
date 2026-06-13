// @ts-nocheck

(function loadPuzzleLevel4() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[3] = {
    heartPuzzles:
    [
        {
            "id": "L4_HP01",
            "title": "Beacon Chase: Lighthouse Beam Binary",
            "instruction": "At the wattle-lined trail, your scanner wakes to the first rays of solstice sunrise. The lighthouse blinks 111001 in binary for this tide cycle. Convert to decimal. Enter one answer to keep chasing sunrise.",
            "answer": "57",
            "acceptedAnswers": [
                "57",
                "fifty seven"
            ],
            "hints": [
                "Turing would test it step by step: 32+16+8+1 = 57."
            ],
            "rightExplain": "Correct. The signal beacon syncs with your team and the chase continues.",
            "wrongExplain": "Not this pass. Walk through the inputs carefully from left to right. Turing would test it step by step: 32+16+8+1 = 57.",
            "learnUrl": "https://en.wikipedia.org/wiki/Binary_number",
            "seen": false
        },
        {
            "id": "L4_HP02",
            "title": "Outback Signal: Coastal Routing Dijkstra",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. Harbor graph distances from source are Jetty=11, Beacon=7, Wharf=9. Which node is settled next? Give the best answer and continue east.",
            "answer": "BEACON",
            "acceptedAnswers": [
                "beacon"
            ],
            "hints": [
                "The quickest path is the formal definition: Pick smallest tentative distance."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Pick smallest tentative distance.",
            "learnUrl": "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
            "seen": false
        },
        {
            "id": "L4_HP03",
            "title": "Sunline Protocol: Tide Table remainder when divided by Arithmetic",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. A tide register loops every 12 ticks. After 53 ticks, what position index remains (remainder when divided by 12)? Submit your answer to relight the beacons ahead.",
            "answer": "5",
            "acceptedAnswers": [
                "5",
                "five"
            ],
            "hints": [
                "Let the data guide you directly: Find 53 remainder 12."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Find 53 remainder 12.",
            "learnUrl": "https://en.wikipedia.org/wiki/Modulo",
            "seen": false
        },
        {
            "id": "L4_HP04",
            "title": "Sunward Link: Coastline Bayesian Clue",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. A detector is 90% accurate for storms. Prior storm chance is 20%. Detector says storm. Which is larger now: 20% or posterior? Enter POSTERIOR or PRIOR. Finish this check to stay on the solstice path.",
            "answer": "POSTERIOR",
            "acceptedAnswers": [
                "posterior"
            ],
            "hints": [
                "Check the operation exactly as the console states: A positive test with good accuracy usually increases probability."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: A positive test with good accuracy usually increases probability.",
            "learnUrl": "https://en.wikipedia.org/wiki/Bayes%27_theorem",
            "seen": false
        },
        {
            "id": "L4_HP05",
            "title": "Trail of Codes: Pier XOR safety number",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. Compute XOR safety number of bytes 1010 and 1100. Set the answer and the observatory gate will clear.",
            "answer": "0110",
            "acceptedAnswers": [
                "0110",
                "110"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: XOR bit is 1 when bits differ."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: XOR bit is 1 when bits differ.",
            "learnUrl": "https://en.wikipedia.org/wiki/Exclusive_or",
            "seen": false
        },
        {
            "id": "L4_HP06",
            "title": "Solstice Circuit: Wavefront nearest-first route search Layers",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. In nearest-first route search from node S, nodes A and B are at depth 1, node C from A at depth 2. What depth is C? Solve it to keep the dawn line open.",
            "answer": "2",
            "acceptedAnswers": [
                "2",
                "two"
            ],
            "hints": [
                "Use the simplest reading of the rule: Depth increases by one per edge from source."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Depth increases by one per edge from source.",
            "learnUrl": "https://en.wikipedia.org/wiki/Breadth-first_search",
            "seen": false
        },
        {
            "id": "L4_HP07",
            "title": "Dawn Run: Lighthouse state machine Accept",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. state machine accepts strings ending with 1. Does 1011 get accepted? YES or NO. Crack it and the horizon route stays live.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Follow the same method from the relay notes: Check the final bit only for this state machine rule."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Check the final bit only for this state machine rule.",
            "learnUrl": "https://en.wikipedia.org/wiki/Deterministic_finite_automaton",
            "seen": false
        },
        {
            "id": "L4_HP08",
            "title": "Observatory Sprint: Coastal Prefix Code",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Codes are A=0, B=10, C=11. Decode bitstream 011. Answer cleanly, then sprint for the next relay.",
            "answer": "AC",
            "acceptedAnswers": [
                "ac"
            ],
            "hints": [
                "Treat this like a clean machine instruction: Use prefix chunks from left to right: 0 then 11."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Use prefix chunks from left to right: 0 then 11.",
            "learnUrl": "https://en.wikipedia.org/wiki/Prefix_code",
            "seen": false
        }
    ],
    levelPuzzles:
    [
        {
            "id": "L4_LP01",
            "title": "First-Light Decode: Harbor harbor flow Load",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. Arrival rate is 6 boats/hour, service rate 8 boats/hour. Is system stable (arrival < service)? YES or NO. Confirm your choice and the route map will update.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Run one careful pass through the values: Compare lambda and mu directly."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: Compare lambda and mu directly.",
            "learnUrl": "https://en.wikipedia.org/wiki/Queueing_theory",
            "seen": false
        },
        {
            "id": "L4_LP02",
            "title": "Radiant Route: Signal Compression Ratio",
            "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. Original log length is 200 chars, compressed length 80 chars. Enter compression ratio original/compressed. Record the result to advance the expedition log.",
            "answer": "2.5",
            "acceptedAnswers": [
                "2.5",
                "5/2"
            ],
            "hints": [
                "Start with what is fixed, then compute: Compute 200 divided by 80."
            ],
            "rightExplain": "Strong work. The old research station opens another corridor.",
            "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Compute 200 divided by 80.",
            "learnUrl": "https://en.wikipedia.org/wiki/Data_compression",
            "seen": false
        },
        {
            "id": "L4_LP03",
            "title": "Morning Vector: Coastal Dynamic Programming",
            "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. Recurrence says F(n)=F(n-1)+F(n-2), with F(1)=1 and F(2)=2. What is F(4)? Send it through and reopen the signal chain.",
            "answer": "5",
            "acceptedAnswers": [
                "5",
                "five"
            ],
            "hints": [
                "Use the beacon note as written: First find F(3), then F(4)."
            ],
            "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
            "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: First find F(3), then F(4).",
            "learnUrl": "https://en.wikipedia.org/wiki/Dynamic_programming",
            "seen": false
        },
        {
            "id": "L4_LP04",
            "title": "First-Light Decode: Lighthouse Gradient Step",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. A model parameter w=10, gradient is +3, learning rate 0.1. New w after one gradient-descent step? Confirm your choice and the route map will update.",
            "answer": "9.7",
            "acceptedAnswers": [
                "9.7"
            ],
            "hints": [
                "Run one careful pass through the values: step-down learning method: w_new = w - lr * grad."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: step-down learning method: w_new = w - lr * grad.",
            "learnUrl": "https://en.wikipedia.org/wiki/Gradient_descent",
            "seen": false
        },
        {
            "id": "L4_LP05",
            "title": "Observatory Sprint: Saltwind Confusion Matrix",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Classifier results: TP=30, FP=10. Precision equals TP/(TP+FP). Enter precision. Answer cleanly, then sprint for the next relay.",
            "answer": "0.75",
            "acceptedAnswers": [
                "0.75",
                "3/4",
                "75%"
            ],
            "hints": [
                "Treat this like a clean machine instruction: Use 30/(30+10)."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Use 30/(30+10).",
            "learnUrl": "https://en.wikipedia.org/wiki/Precision_and_recall",
            "seen": false
        },
        {
            "id": "L4_LP06",
            "title": "Dawn Run: Coastal Minimax Choice",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. Two moves have worst-case scores: Move A = 2, Move B = 5. Which does minimax choose? Crack it and the horizon route stays live.",
            "answer": "B",
            "acceptedAnswers": [
                "b"
            ],
            "hints": [
                "Follow the same method from the relay notes: Maximize the minimum guaranteed score."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Maximize the minimum guaranteed score.",
            "learnUrl": "https://en.wikipedia.org/wiki/Minimax",
            "seen": false
        },
        {
            "id": "L4_LP07",
            "title": "Solstice Circuit: Lighthouse entropy Bit",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. A fair coin source has entropy how many bits per toss? Solve it to keep the dawn line open.",
            "answer": "1",
            "acceptedAnswers": [
                "1",
                "one"
            ],
            "hints": [
                "Use the simplest reading of the rule: Maximum uncertainty between two equal outcomes is 1 bit."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Maximum uncertainty between two equal outcomes is 1 bit.",
            "learnUrl": "https://en.wikipedia.org/wiki/Entropy_(information_theory)",
            "seen": false
        },
        {
            "id": "L4_LP08",
            "title": "Trail of Codes: Coastal Hill-Climb Trap",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. An optimizer reaches a point better than neighbors but not globally best. Is this a local optimum? YES or NO. Set the answer and the observatory gate will clear.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: Local optimum beats nearby points only."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: Local optimum beats nearby points only.",
            "learnUrl": "https://en.wikipedia.org/wiki/Local_optimum",
            "seen": false
        }
    ],
    treasurePuzzles:
    [
        {
            "id": "L4_TP01",
            "title": "Sunward Link: Jetty A-Star Estimate",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. A* uses f(n)=g(n)+h(n). If g=7 and h=4, what is f? Finish this check to stay on the solstice path.",
            "answer": "11",
            "acceptedAnswers": [
                "11",
                "eleven"
            ],
            "hints": [
                "Check the operation exactly as the console states: Add path-so-far and heuristic estimate."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: Add path-so-far and heuristic estimate.",
            "learnUrl": "https://en.wikipedia.org/wiki/A*_search_algorithm",
            "seen": false
        },
        {
            "id": "L4_TP02",
            "title": "Dawn Run: Coastal Matrix Transform",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. Apply 2x scale to vector (3,4). What is new x component? Crack it and the horizon route stays live.",
            "answer": "6",
            "acceptedAnswers": [
                "6",
                "six"
            ],
            "hints": [
                "Follow the same method from the relay notes: Scaling by 2 doubles each component."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Scaling by 2 doubles each component.",
            "learnUrl": "https://en.wikipedia.org/wiki/Linear_transformation",
            "seen": false
        },
        {
            "id": "L4_TP03",
            "title": "Solstice Circuit: Lighthouse CRC Idea",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. CRC is mainly used for detection or correction of random transmission errors? Enter DETECTION or CORRECTION. Solve it to keep the dawn line open.",
            "answer": "DETECTION",
            "acceptedAnswers": [
                "detection"
            ],
            "hints": [
                "Use the simplest reading of the rule: CRC flags likely corruption; it does not usually repair data."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: CRC flags likely corruption; it does not usually repair data.",
            "learnUrl": "https://en.wikipedia.org/wiki/Cyclic_redundancy_check",
            "seen": false
        },
        {
            "id": "L4_TP04",
            "title": "Outback Signal: Stormfront Transition",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. State machine on coast has state CALM and on input WIND goes to ROUGH. Current CALM, input WIND. Next state? Give the best answer and continue east.",
            "answer": "ROUGH",
            "acceptedAnswers": [
                "rough"
            ],
            "hints": [
                "The quickest path is the formal definition: Follow given transition directly."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Follow given transition directly.",
            "learnUrl": "https://en.wikipedia.org/wiki/Finite-state_machine",
            "seen": false
        },
        {
            "id": "L4_TP05",
            "title": "Radiant Route: Coastal Tide Predictor",
            "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. Two independent wave alarms each fail with probability 0.1. Probability both fail? Record the result to advance the expedition log.",
            "answer": "0.01",
            "acceptedAnswers": [
                "0.01",
                "1%"
            ],
            "hints": [
                "Start with what is fixed, then compute: Multiply independent probabilities."
            ],
            "rightExplain": "Strong work. The old research station opens another corridor.",
            "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Multiply independent probabilities.",
            "learnUrl": "https://en.wikipedia.org/wiki/Independence_(probability_theory)",
            "seen": false
        },
        {
            "id": "L4_TP06",
            "title": "Observatory Sprint: Coastal Lighthouse Prefix",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Prefix-free map: A=0, B=10, C=11. Decode 1011. Answer cleanly, then sprint for the next relay.",
            "answer": "BC",
            "acceptedAnswers": [
                "bc"
            ],
            "hints": [
                "Treat this like a clean machine instruction: Read left to right with shortest valid codewords."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Read left to right with shortest valid codewords.",
            "learnUrl": "https://en.wikipedia.org/wiki/Prefix_code",
            "seen": false
        },
        {
            "id": "L4_TP07",
            "title": "First-Light Decode: Coastal Harbor Throughput",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. System processed 240 packets in 60 seconds. Throughput packets per second? Confirm your choice and the route map will update.",
            "answer": "4",
            "acceptedAnswers": [
                "4",
                "four"
            ],
            "hints": [
                "Run one careful pass through the values: Divide packets by time in seconds."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: Divide packets by time in seconds.",
            "learnUrl": "https://en.wikipedia.org/wiki/Throughput",
            "seen": false
        }
    ]
  };
})();
