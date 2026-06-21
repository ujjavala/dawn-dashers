// @ts-nocheck

(function loadQuestions_medium() {
  globalThis.DawnDashersQuestions = globalThis.DawnDashersQuestions || [];
  const q = globalThis.DawnDashersQuestions;
  q.push(
    {
        "id": 40,
        "difficulty": "medium",
        "title": "Morning Vector: Bushland Markov Step",
        "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. A weather model says if today is DRY, tomorrow is DRY with probability 0.7. Enter that transition probability. Send it through and reopen the signal chain.",
        "answer": "0.7",
        "acceptedAnswers": [
            "0.7",
            "70%"
        ],
        "hints": [
            "Use the beacon note as written: Use the exact transition value given."
        ],
        "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
        "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Use the exact transition value given.",
        "learnUrl": "https://en.wikipedia.org/wiki/Markov_chain",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 41,
        "difficulty": "medium",
        "title": "First-Light Decode: Platypus Bitmask",
        "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. Apply bitmask 0110 to value 1110 using AND. Result? Confirm your choice and the route map will update.",
        "answer": "0110",
        "acceptedAnswers": [
            "0110",
            "110"
        ],
        "hints": [
            "Run one careful pass through the values: AND keeps 1 only where both bits are 1."
        ],
        "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
        "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: AND keeps 1 only where both bits are 1.",
        "learnUrl": "https://en.wikipedia.org/wiki/Mask_(computing)",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 42,
        "difficulty": "medium",
        "title": "Observatory Sprint: Bushland Finite-State Sign",
        "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. State machine: S0 on input 1 goes to S1. If currently S0 and input is 1, next state? Answer cleanly, then sprint for the next relay.",
        "answer": "S1",
        "acceptedAnswers": [
            "s1"
        ],
        "hints": [
            "Treat this like a clean machine instruction: Follow the given transition exactly."
        ],
        "rightExplain": "You got it. The dawn protocol advances one full step.",
        "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Follow the given transition exactly.",
        "learnUrl": "https://en.wikipedia.org/wiki/Finite-state_machine",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 43,
        "difficulty": "medium",
        "title": "Observatory Sprint: Myrtle Branch Predicate",
        "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Condition is x > 10 with x = 12. Does branch execute? Enter YES or NO. Answer cleanly, then sprint for the next relay.",
        "answer": "YES",
        "acceptedAnswers": [
            "yes",
            "y"
        ],
        "hints": [
            "Treat this like a clean machine instruction: Compare 12 and 10 directly."
        ],
        "rightExplain": "You got it. The dawn protocol advances one full step.",
        "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Compare 12 and 10 directly.",
        "learnUrl": "https://en.wikipedia.org/wiki/Conditional_(computer_programming)",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 44,
        "difficulty": "medium",
        "title": "First-Light Decode: Bushland Creek Bridge",
        "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. A bridge chest asks for gcd(18,24). Enter greatest common divisor. Confirm your choice and the route map will update.",
        "answer": "6",
        "acceptedAnswers": [
            "6",
            "six"
        ],
        "hints": [
            "Run one careful pass through the values: List common divisors or use Euclid algorithm."
        ],
        "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
        "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: List common divisors or use Euclid algorithm.",
        "learnUrl": "https://en.wikipedia.org/wiki/Greatest_common_divisor",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 45,
        "difficulty": "medium",
        "title": "Morning Vector: Bushland Wattle Cipher",
        "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. Cipher note says shift each letter in DPN by -1. Decode the chest codeword. Send it through and reopen the signal chain.",
        "answer": "COM",
        "acceptedAnswers": [
            "com"
        ],
        "hints": [
            "Use the beacon note as written: Move each letter one step back alphabetically."
        ],
        "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
        "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Move each letter one step back alphabetically.",
        "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 46,
        "difficulty": "medium",
        "title": "Radiant Route: Bushland Frog-Hop Path",
        "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. Shortest route weights are 2, 2, and 3 on three edges. Total route cost? Record the result to advance the expedition log.",
        "answer": "7",
        "acceptedAnswers": [
            "7",
            "seven"
        ],
        "hints": [
            "Start with what is fixed, then compute: Add all edge weights on chosen path."
        ],
        "rightExplain": "Strong work. The old research station opens another corridor.",
        "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Add all edge weights on chosen path.",
        "learnUrl": "https://en.wikipedia.org/wiki/Shortest_path_problem",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 47,
        "difficulty": "medium",
        "title": "Morning Vector: Servo Access Hamming Weight",
        "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. A panel code is 10110110. Enter its Hamming weight (number of 1 bits). Send it through and reopen the signal chain.",
        "answer": "5",
        "acceptedAnswers": [
            "5",
            "five"
        ],
        "hints": [
            "Use the beacon note as written: Count each 1 in the bit string."
        ],
        "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
        "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Count each 1 in the bit string.",
        "learnUrl": "https://en.wikipedia.org/wiki/Hamming_weight",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 48,
        "difficulty": "medium",
        "title": "First-Light Decode: Neon Relay XOR Chain",
        "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. Compute 1 XOR 1 XOR 0 in the servo relay chain. Confirm your choice and the route map will update.",
        "answer": "0",
        "acceptedAnswers": [
            "0",
            "zero"
        ],
        "hints": [
            "Run one careful pass through the values: XOR pairs: 1 XOR 1 = 0, then 0 XOR 0 = 0."
        ],
        "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
        "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: XOR pairs: 1 XOR 1 = 0, then 0 XOR 0 = 0.",
        "learnUrl": "https://en.wikipedia.org/wiki/Exclusive_or",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 49,
        "difficulty": "medium",
        "title": "Observatory Sprint: Warehouse Dijkstra Step",
        "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. From node S, tentative distances are A=6, B=3, C=9. Which node is settled next by Dijkstra? Answer cleanly, then sprint for the next relay.",
        "answer": "B",
        "acceptedAnswers": [
            "b"
        ],
        "hints": [
            "Treat this like a clean machine instruction: Dijkstra settles smallest tentative distance next."
        ],
        "rightExplain": "You got it. The dawn protocol advances one full step.",
        "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Dijkstra settles smallest tentative distance next.",
        "learnUrl": "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 50,
        "difficulty": "medium",
        "title": "Sunline Protocol: Servo Bay Topological Hint",
        "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. Dependencies: BuildCore before TestCore, TestCore before DeployCore. Which task must be first? Submit your answer to relight the beacons ahead.",
        "answer": "BUILDCORE",
        "acceptedAnswers": [
            "buildcore",
            "build core"
        ],
        "hints": [
            "Let the data guide you directly: A prerequisite must occur before dependent tasks."
        ],
        "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
        "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: A prerequisite must occur before dependent tasks.",
        "learnUrl": "https://en.wikipedia.org/wiki/Topological_sorting",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 51,
        "difficulty": "medium",
        "title": "Outback Signal: safety number in the Parts Ledger",
        "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. A parity byte uses even parity. Data bits are 1011001 (four 1s). What parity bit is appended? Give the best answer and continue east.",
        "answer": "0",
        "acceptedAnswers": [
            "0",
            "zero"
        ],
        "hints": [
            "The quickest path is the formal definition: Even parity means total 1s should remain even."
        ],
        "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
        "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Even parity means total 1s should remain even.",
        "learnUrl": "https://en.wikipedia.org/wiki/Parity_bit",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 52,
        "difficulty": "medium",
        "title": "Beacon Chase: Servo Line Scheduling",
        "instruction": "At the wattle-lined trail, your scanner wakes to the first rays of solstice sunrise. Jobs arrive in order J1, J2, J3 under first-in-first-out order scheduling. Which job runs second? Enter one answer to keep chasing sunrise.",
        "answer": "J2",
        "acceptedAnswers": [
            "j2"
        ],
        "hints": [
            "Turing would test it step by step: first-in-first-out order preserves arrival order."
        ],
        "rightExplain": "Correct. The signal beacon syncs with your team and the chase continues.",
        "wrongExplain": "Not this pass. Walk through the inputs carefully from left to right. Turing would test it step by step: first-in-first-out order preserves arrival order.",
        "learnUrl": "https://en.wikipedia.org/wiki/Scheduling_(computing)",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 53,
        "difficulty": "medium",
        "title": "Relay Horizon: Greedy Charging Robot",
        "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. Robot battery pickups are [4, 9, 6]. Greedy picks largest immediate charge. First pick? Lock in your result and push to the next marker.",
        "answer": "9",
        "acceptedAnswers": [
            "9",
            "nine"
        ],
        "hints": [
            "Anchor on the key detail first: Greedy chooses local maximum first."
        ],
        "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
        "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: Greedy chooses local maximum first.",
        "learnUrl": "https://en.wikipedia.org/wiki/Greedy_algorithm",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 54,
        "difficulty": "medium",
        "title": "Sunline Protocol: Servo Log Base2",
        "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. How many bits are needed to represent 31 in unsigned binary? Submit your answer to relight the beacons ahead.",
        "answer": "5",
        "acceptedAnswers": [
            "5",
            "five"
        ],
        "hints": [
            "Let the data guide you directly: 2^5 = 32, so 0..31 fits in 5 bits."
        ],
        "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
        "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: 2^5 = 32, so 0..31 fits in 5 bits.",
        "learnUrl": "https://en.wikipedia.org/wiki/Binary_number",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 55,
        "difficulty": "medium",
        "title": "Outback Signal: Industrial Bay Median Latency",
        "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. Latencies are 12, 9, 14, 7, 10. What is the median latency? Give the best answer and continue east.",
        "answer": "10",
        "acceptedAnswers": [
            "10",
            "ten"
        ],
        "hints": [
            "The quickest path is the formal definition: Sort values and pick middle."
        ],
        "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
        "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Sort values and pick middle.",
        "learnUrl": "https://en.wikipedia.org/wiki/Median",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 56,
        "difficulty": "medium",
        "title": "Relay Horizon: Servo Bay state machine",
        "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. state machine transition: from Q1 on input 0 go to Q2. Current state Q1, input 0. Next state? Lock in your result and push to the next marker.",
        "answer": "Q2",
        "acceptedAnswers": [
            "q2"
        ],
        "hints": [
            "Anchor on the key detail first: Follow the one matching transition."
        ],
        "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
        "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: Follow the one matching transition.",
        "learnUrl": "https://en.wikipedia.org/wiki/Deterministic_finite_automaton",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 57,
        "difficulty": "medium",
        "title": "Beacon Chase: Bitwise Shift Dock",
        "instruction": "At the wattle-lined trail, your scanner wakes to the first rays of solstice sunrise. Compute 0011 left-shifted by 1 bit (4-bit view). Enter one answer to keep chasing sunrise.",
        "answer": "0110",
        "acceptedAnswers": [
            "0110",
            "110"
        ],
        "hints": [
            "Turing would test it step by step: Left shift moves bits left and appends 0 at right."
        ],
        "rightExplain": "Correct. The signal beacon syncs with your team and the chase continues.",
        "wrongExplain": "Not this pass. Walk through the inputs carefully from left to right. Turing would test it step by step: Left shift moves bits left and appends 0 at right.",
        "learnUrl": "https://en.wikipedia.org/wiki/Bitwise_operation",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 58,
        "difficulty": "medium",
        "title": "Outback Signal: Servo Cache Hit Rate",
        "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. A run had 18 cache hits and 6 misses. Enter hit rate as a fraction of total. Give the best answer and continue east.",
        "answer": "3/4",
        "acceptedAnswers": [
            "3/4",
            "0.75",
            "75%"
        ],
        "hints": [
            "The quickest path is the formal definition: Hit rate = hits / (hits + misses)."
        ],
        "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
        "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Hit rate = hits / (hits + misses).",
        "learnUrl": "https://en.wikipedia.org/wiki/Cache_performance_measurement_and_metric",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 59,
        "difficulty": "medium",
        "title": "Sunline Protocol: Assembler Branch Offset",
        "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. Program counter is at 40 and target is 46. What forward offset is needed? Submit your answer to relight the beacons ahead.",
        "answer": "6",
        "acceptedAnswers": [
            "6",
            "six"
        ],
        "hints": [
            "Let the data guide you directly: Offset is target - current position."
        ],
        "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
        "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Offset is target - current position.",
        "learnUrl": "https://en.wikipedia.org/wiki/Branch_(computer_science)",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 60,
        "difficulty": "medium",
        "title": "Observatory Sprint: Servo Bay Trie Prefix",
        "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Words in trie: code, coder, cobble. What 2-letter prefix is shared by all? Answer cleanly, then sprint for the next relay.",
        "answer": "CO",
        "acceptedAnswers": [
            "co"
        ],
        "hints": [
            "Treat this like a clean machine instruction: Compare beginnings of each word."
        ],
        "rightExplain": "You got it. The dawn protocol advances one full step.",
        "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Compare beginnings of each word.",
        "learnUrl": "https://en.wikipedia.org/wiki/Trie",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 61,
        "difficulty": "medium",
        "title": "First-Light Decode: Industrial Logic Simplify",
        "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. Simplify expression (X AND 1). Enter equivalent expression. Confirm your choice and the route map will update.",
        "answer": "X",
        "acceptedAnswers": [
            "x"
        ],
        "hints": [
            "Run one careful pass through the values: AND with 1 leaves value unchanged."
        ],
        "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
        "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: AND with 1 leaves value unchanged.",
        "learnUrl": "https://en.wikipedia.org/wiki/Boolean_algebra",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 62,
        "difficulty": "medium",
        "title": "Morning Vector: Servo Probability Binomial",
        "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. Two independent fair sensor checks each pass with probability 1/2. Probability both pass? Send it through and reopen the signal chain.",
        "answer": "1/4",
        "acceptedAnswers": [
            "1/4",
            "0.25",
            "25%"
        ],
        "hints": [
            "Use the beacon note as written: Independent joint probability multiplies."
        ],
        "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
        "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Independent joint probability multiplies.",
        "learnUrl": "https://en.wikipedia.org/wiki/Independence_(probability_theory)",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 63,
        "difficulty": "medium",
        "title": "Radiant Route: Control Loop Invariant",
        "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. Invariant says sum stays 10. Current pair is (x,y)=(6,4). Is invariant satisfied? YES or NO. Record the result to advance the expedition log.",
        "answer": "YES",
        "acceptedAnswers": [
            "yes",
            "y"
        ],
        "hints": [
            "Start with what is fixed, then compute: Check whether x+y equals 10."
        ],
        "rightExplain": "Strong work. The old research station opens another corridor.",
        "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Check whether x+y equals 10.",
        "learnUrl": "https://en.wikipedia.org/wiki/Loop_invariant",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 64,
        "difficulty": "medium",
        "title": "Observatory Sprint: Servo Graph Cycle Check",
        "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Edges are A-B, B-C, C-A. Does this graph contain a cycle? YES or NO. Answer cleanly, then sprint for the next relay.",
        "answer": "YES",
        "acceptedAnswers": [
            "yes",
            "y"
        ],
        "hints": [
            "Treat this like a clean machine instruction: A-B-C-A returns to start without repeating edges."
        ],
        "rightExplain": "You got it. The dawn protocol advances one full step.",
        "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: A-B-C-A returns to start without repeating edges.",
        "learnUrl": "https://en.wikipedia.org/wiki/Cycle_(graph_theory)",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 65,
        "difficulty": "medium",
        "title": "First-Light Decode: Industrial entropy Warmup",
        "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. A source emits only symbol Z every time. Is its information entropy high or low? Enter LOW or HIGH. Confirm your choice and the route map will update.",
        "answer": "LOW",
        "acceptedAnswers": [
            "low"
        ],
        "hints": [
            "Run one careful pass through the values: No uncertainty means low entropy."
        ],
        "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
        "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: No uncertainty means low entropy.",
        "learnUrl": "https://en.wikipedia.org/wiki/Entropy_(information_theory)",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 66,
        "difficulty": "medium",
        "title": "Trail of Codes: Servo Tape Rule Pair",
        "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. Rule: in state A reading 1 -> write 0, move Left, go to state B. What next state is entered? Set the answer and the observatory gate will clear.",
        "answer": "B",
        "acceptedAnswers": [
            "b"
        ],
        "hints": [
            "Do the exact comparison the prompt asks for: Read the final part of the transition triple."
        ],
        "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
        "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: Read the final part of the transition triple.",
        "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 67,
        "difficulty": "medium",
        "title": "Solstice Circuit: Servo Neon Panel",
        "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. Panel reads hex A. Convert to decimal to unlock. Solve it to keep the dawn line open.",
        "answer": "10",
        "acceptedAnswers": [
            "10",
            "ten"
        ],
        "hints": [
            "Use the simplest reading of the rule: Hex A equals decimal 10."
        ],
        "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
        "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Hex A equals decimal 10.",
        "learnUrl": "https://en.wikipedia.org/wiki/Hexadecimal",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 68,
        "difficulty": "medium",
        "title": "Trail of Codes: Servo Conveyor Logic",
        "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. Lock logic is not-both rule(1,1). Output? Set the answer and the observatory gate will clear.",
        "answer": "0",
        "acceptedAnswers": [
            "0",
            "zero"
        ],
        "hints": [
            "Do the exact comparison the prompt asks for: not-both rule is NOT(AND). AND(1,1)=1 then negate."
        ],
        "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
        "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: not-both rule is NOT(AND). AND(1,1)=1 then negate.",
        "learnUrl": "https://en.wikipedia.org/wiki/NAND_gate",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 69,
        "difficulty": "medium",
        "title": "Sunward Link: Servo Microcode Branch",
        "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. If instruction pointer is 120 and branch offset is -8, new pointer? Finish this check to stay on the solstice path.",
        "answer": "112",
        "acceptedAnswers": [
            "112"
        ],
        "hints": [
            "Check the operation exactly as the console states: Add signed offset to current pointer."
        ],
        "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
        "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: Add signed offset to current pointer.",
        "learnUrl": "https://en.wikipedia.org/wiki/Instruction_pointer",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 70,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 71,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 72,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 73,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 74,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 75,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 76,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 77,
        "difficulty": "medium",
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
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 120,
        "difficulty": "medium",
        "title": "Mulga Track: Turing Head Trace",
        "instruction": "The June Solstice expedition pauses at a mulga scrub waypoint in the outback, where a solar-powered Turing Machine panel flickers to life. The machine's transition table reads: δ(q0, 0) = (q1, 1, R). The tape holds a single symbol — 0 — and the head starts in state q0 reading that cell. You must complete one step of the machine to unlock the next trail marker. After the machine executes the transition, what symbol is written on that tape cell?",
        "answer": "1",
        "acceptedAnswers": [
            "1"
        ],
        "hints": [
            "The transition rule tells you exactly what to write: δ(q0, 0) = (q1, 1, R) — the second element of the output triple is the symbol written."
        ],
        "rightExplain": "Perfect. The Turing Machine writes 1, moves right, and the outback trail marker unlocks.",
        "wrongExplain": "Keep going. The transition rule δ(q0, 0) = (q1, 1, R) tells you exactly what to write: the symbol is the second element of the output triple.",
        "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine",
        "seen": false,
        "type": "levelPuzzles"
    },
    {
        "id": 121,
        "difficulty": "medium",
        "title": "Red Sand Run: TM Accept or Reject",
        "instruction": "Under the blazing June Solstice sun, the Dawn Dashers reach a red sand dune station fitted with an early computing relay. The relay runs a Turing Machine that accepts strings over {0,1} containing at least one 1, and rejects all others. The input tape currently holds the string 000. Does the machine accept this input? Answer YES or NO to open the checkpoint gate and continue the expedition.",
        "answer": "NO",
        "acceptedAnswers": [
            "no"
        ],
        "hints": [
            "The machine accepts only strings with at least one 1 — scan the input string and ask whether any 1 appears."
        ],
        "rightExplain": "Correct. The string 000 has no 1s, so the machine rejects it and you dash to the next marker.",
        "wrongExplain": "Almost there. Check whether a 1 appears anywhere in 000 — the machine accepts only if at least one 1 is present.",
        "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine",
        "seen": false,
        "type": "heartPuzzles"
    },
    {
        "id": 122,
        "difficulty": "medium",
        "title": "Spinifex Cipher: Regular Language Check",
        "instruction": "A spinifex-covered rock cache along the solstice route holds a theoretical computing puzzle left by a previous expedition team. The note reads: consider the language L = { 0^n 1^n | n ≥ 1 } — all strings of n zeros followed by exactly n ones. The question is whether a simple finite automaton (regular grammar) can recognise this language. Is L a regular language? Answer YES or NO to retrieve the cache coordinates.",
        "answer": "NO",
        "acceptedAnswers": [
            "no"
        ],
        "hints": [
            "A finite automaton has no memory of how many 0s it has seen — the Pumping Lemma shows this language cannot be regular."
        ],
        "rightExplain": "Spot on. The Pumping Lemma proves L is not regular; a Turing Machine is needed to match the counts.",
        "wrongExplain": "Give it another go. A finite automaton cannot count arbitrarily — the Pumping Lemma shows this language requires more than a regular grammar.",
        "learnUrl": "https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages",
        "seen": false,
        "type": "treasurePuzzles"
    },
    {
        "id": 123,
        "difficulty": "medium",
        "title": "Opal Flat Sprint: The Halting Problem",
        "instruction": "At an opal flat under the June Solstice sky, the expedition's computing station poses a landmark question from Alan Turing's 1936 work. The question: can a general algorithm be constructed that, given any arbitrary program and its input, always correctly determines whether that program will eventually halt or run forever? Answer YES or NO to log your answer and move to the next outback waypoint.",
        "answer": "NO",
        "acceptedAnswers": [
            "no"
        ],
        "hints": [
            "Turing proved by diagonalisation that no such general algorithm can exist — the Halting Problem is undecidable."
        ],
        "rightExplain": "Exactly right. Turing's 1936 proof shows no algorithm can solve the Halting Problem in general — the trail advances.",
        "wrongExplain": "Nearly. Turing proved by contradiction that no general halting algorithm can exist for all programs — the answer is NO.",
        "learnUrl": "https://en.wikipedia.org/wiki/Halting_problem",
        "seen": false,
        "type": "levelPuzzles"
    }
  );
})();