// @ts-nocheck

(function loadPuzzleLevel3() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[2] = {
    heartPuzzles:
    [
        {
            "id": "L3_HP01",
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
            "seen": false
        },
        {
            "id": "L3_HP02",
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
            "seen": false
        },
        {
            "id": "L3_HP03",
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
            "seen": false
        },
        {
            "id": "L3_HP04",
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
            "seen": false
        },
        {
            "id": "L3_HP05",
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
            "seen": false
        },
        {
            "id": "L3_HP06",
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
            "seen": false
        },
        {
            "id": "L3_HP07",
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
            "seen": false
        },
        {
            "id": "L3_HP08",
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
            "seen": false
        }
    ],
    levelPuzzles:
    [
        {
            "id": "L3_LP01",
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
            "seen": false
        },
        {
            "id": "L3_LP02",
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
            "seen": false
        },
        {
            "id": "L3_LP03",
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
            "seen": false
        },
        {
            "id": "L3_LP04",
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
            "seen": false
        },
        {
            "id": "L3_LP05",
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
            "seen": false
        },
        {
            "id": "L3_LP06",
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
            "seen": false
        },
        {
            "id": "L3_LP07",
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
            "seen": false
        },
        {
            "id": "L3_LP08",
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
            "seen": false
        }
    ],
    treasurePuzzles:
    [
        {
            "id": "L3_TP01",
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
            "seen": false
        },
        {
            "id": "L3_TP02",
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
            "seen": false
        },
        {
            "id": "L3_TP03",
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
            "seen": false
        },
        {
            "id": "L3_TP04",
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
            "seen": false
        },
        {
            "id": "L3_TP05",
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
            "seen": false
        },
        {
            "id": "L3_TP06",
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
            "seen": false
        },
        {
            "id": "L3_TP07",
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
            "seen": false
        }
    ]
  };
})();
