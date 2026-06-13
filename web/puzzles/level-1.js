// @ts-nocheck

(function loadPuzzleLevel1() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[0] = {
    heartPuzzles:
    [
        {
            "id": "L1_HP01",
            "title": "Relay Horizon: Outback Radio Reversal",
            "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. At a cracked roadhouse radio in the outback, the call sign plays as NALA. Reverse it to reveal the codename you must report. Lock in your result and push to the next marker.",
            "answer": "ALAN",
            "acceptedAnswers": [
                "alan"
            ],
            "hints": [
                "Anchor on the key detail first: Read the letters from right to left."
            ],
            "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
            "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: Read the letters from right to left.",
            "learnUrl": "https://en.wikipedia.org/wiki/Alan_Turing",
            "seen": false
        },
        {
            "id": "L1_HP02",
            "title": "Sunline Protocol: Spinifex Binary Marker",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. A rusted marker near spinifex grass reads 101 in binary. Convert it to decimal to unlock the gate. Submit your answer to relight the beacons ahead.",
            "answer": "5",
            "acceptedAnswers": [
                "5",
                "five"
            ],
            "hints": [
                "Let the data guide you directly: Binary 101 means 1x4 + 0x2 + 1x1."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Binary 101 means 1x4 + 0x2 + 1x1.",
            "learnUrl": "https://en.wikipedia.org/wiki/Binary_number",
            "seen": false
        },
        {
            "id": "L1_HP03",
            "title": "Outback Signal: Dune Pattern Stones",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. Five stones in a dune channel show 3, 5, 7, 9,?. The next safe stepping stone is the missing number. Give the best answer and continue east.",
            "answer": "11",
            "acceptedAnswers": [
                "11",
                "eleven"
            ],
            "hints": [
                "The quickest path is the formal definition: The pattern increases by 2 each time."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: The pattern increases by 2 each time.",
            "learnUrl": "https://en.wikipedia.org/wiki/Sequence",
            "seen": false
        },
        {
            "id": "L1_HP04",
            "title": "First-Light Decode: Road Sign Caesar Shift",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. A weathered sign says FNV with note \"shift back 1\". Decode the original 3-letter word. Confirm your choice and the route map will update.",
            "answer": "EMU",
            "acceptedAnswers": [
                "emu"
            ],
            "hints": [
                "Run one careful pass through the values: Shift each letter one step backward in the alphabet."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: Shift each letter one step backward in the alphabet.",
            "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher",
            "seen": false
        },
        {
            "id": "L1_HP05",
            "title": "Observatory Sprint: Campfire Logic Gate",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Two switches control a camp lamp with an AND gate. Inputs are 1 and 0. What is the output? Answer cleanly, then sprint for the next relay.",
            "answer": "0",
            "acceptedAnswers": [
                "0",
                "zero"
            ],
            "hints": [
                "Treat this like a clean machine instruction: AND returns 1 only when both inputs are 1."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: AND returns 1 only when both inputs are 1.",
            "learnUrl": "https://en.wikipedia.org/wiki/Logic_gate",
            "seen": false
        },
        {
            "id": "L1_HP06",
            "title": "Radiant Route: Outback Track Graph",
            "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. You can go Bore->Well (1 hop), Well->Relay (1 hop), Bore->Relay (3 hops). What is the shortest hop count from Bore to Relay? Record the result to advance the expedition log.",
            "answer": "2",
            "acceptedAnswers": [
                "2",
                "two"
            ],
            "hints": [
                "Start with what is fixed, then compute: Compare the direct path to the path via Well."
            ],
            "rightExplain": "Strong work. The old research station opens another corridor.",
            "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Compare the direct path to the path via Well.",
            "learnUrl": "https://en.wikipedia.org/wiki/Shortest_path_problem",
            "seen": false
        },
        {
            "id": "L1_HP07",
            "title": "Morning Vector: Dusty parity Check",
            "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. A simple parity check expects an even count of 1 bits. For 1101, is parity currently even or odd? Send it through and reopen the signal chain.",
            "answer": "ODD",
            "acceptedAnswers": [
                "odd"
            ],
            "hints": [
                "Use the beacon note as written: Count the number of 1s in 1101."
            ],
            "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
            "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Count the number of 1s in 1101.",
            "learnUrl": "https://en.wikipedia.org/wiki/Parity_bit",
            "seen": false
        },
        {
            "id": "L1_HP08",
            "title": "Trail of Codes: Outback Base Conversion",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. A fuel chit says 12 in decimal, but the lock asks for binary. Enter 12 as binary. Set the answer and the observatory gate will clear.",
            "answer": "1100",
            "acceptedAnswers": [
                "1100"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: 12 = 8 + 4 in powers of 2."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: 12 = 8 + 4 in powers of 2.",
            "learnUrl": "https://en.wikipedia.org/wiki/Binary_number",
            "seen": false
        }
    ],
    levelPuzzles:
    [
        {
            "id": "L1_LP01",
            "title": "Sunward Link: Roadhouse Coin Toss",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. A fair coin decides which dusty lane opens. What is the probability of heads? Finish this check to stay on the solstice path.",
            "answer": "1/2",
            "acceptedAnswers": [
                "1/2",
                "0.5",
                "50%"
            ],
            "hints": [
                "Check the operation exactly as the console states: A fair coin has two equally likely outcomes."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: A fair coin has two equally likely outcomes.",
            "learnUrl": "https://en.wikipedia.org/wiki/Probability",
            "seen": false
        },
        {
            "id": "L1_LP02",
            "title": "Morning Vector: Crate Sorting at the Servo Yard",
            "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. You scan crate IDs: 8, 3, 5. Which value appears first after sorting ascending? Send it through and reopen the signal chain.",
            "answer": "3",
            "acceptedAnswers": [
                "3",
                "three"
            ],
            "hints": [
                "Use the beacon note as written: Ascending means smallest to largest."
            ],
            "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
            "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Ascending means smallest to largest.",
            "learnUrl": "https://en.wikipedia.org/wiki/Sorting_algorithm",
            "seen": false
        },
        {
            "id": "L1_LP03",
            "title": "Radiant Route: Opal safety number Slip",
            "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. A note says safety number is the sum of digits in code 472. What safety number should you submit? Record the result to advance the expedition log.",
            "answer": "13",
            "acceptedAnswers": [
                "13",
                "thirteen"
            ],
            "hints": [
                "Start with what is fixed, then compute: Add 4 + 7 + 2."
            ],
            "rightExplain": "Strong work. The old research station opens another corridor.",
            "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Add 4 + 7 + 2.",
            "learnUrl": "https://en.wikipedia.org/wiki/Checksum",
            "seen": false
        },
        {
            "id": "L1_LP04",
            "title": "Observatory Sprint: Loop Counter in the Dust",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Pseudo-code reads: count = 0; for i from 1 to 4: count += 1. Final count? Answer cleanly, then sprint for the next relay.",
            "answer": "4",
            "acceptedAnswers": [
                "4",
                "four"
            ],
            "hints": [
                "Treat this like a clean machine instruction: The loop runs once for each i value 1,2,3,4."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: The loop runs once for each i value 1,2,3,4.",
            "learnUrl": "https://en.wikipedia.org/wiki/For_loop",
            "seen": false
        },
        {
            "id": "L1_LP05",
            "title": "First-Light Decode: Waterhole Network Degree",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. Node B connects to A, C, and D in a tiny outback network map. What is degree(B)? Confirm your choice and the route map will update.",
            "answer": "3",
            "acceptedAnswers": [
                "3",
                "three"
            ],
            "hints": [
                "Run one careful pass through the values: Degree is number of edges touching the node."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: Degree is number of edges touching the node.",
            "learnUrl": "https://en.wikipedia.org/wiki/Degree_(graph_theory)",
            "seen": false
        },
        {
            "id": "L1_LP06",
            "title": "Solstice Circuit: Rust Clock Modulo",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. An old relay clock advances 14 ticks on a 5-tick cycle. What is 14 remainder when divided by 5? Solve it to keep the dawn line open.",
            "answer": "4",
            "acceptedAnswers": [
                "4",
                "four"
            ],
            "hints": [
                "Use the simplest reading of the rule: Find the remainder after dividing 14 by 5."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Find the remainder after dividing 14 by 5.",
            "learnUrl": "https://en.wikipedia.org/wiki/Modulo",
            "seen": false
        },
        {
            "id": "L1_LP07",
            "title": "Dawn Run: Camp OR Gate",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. At a night camp panel, OR gate inputs are 0 and 0. Output? Crack it and the horizon route stays live.",
            "answer": "0",
            "acceptedAnswers": [
                "0",
                "zero"
            ],
            "hints": [
                "Follow the same method from the relay notes: OR outputs 1 if at least one input is 1."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: OR outputs 1 if at least one input is 1.",
            "learnUrl": "https://en.wikipedia.org/wiki/Logic_gate",
            "seen": false
        },
        {
            "id": "L1_LP08",
            "title": "Sunward Link: Run-Length Trail Mark",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. A trail mark encodes 3A2B using run-length notation. Decode the full string. Finish this check to stay on the solstice path.",
            "answer": "AAABB",
            "acceptedAnswers": [
                "aaabb"
            ],
            "hints": [
                "Check the operation exactly as the console states: 3A means AAA and 2B means BB."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: 3A means AAA and 2B means BB.",
            "learnUrl": "https://en.wikipedia.org/wiki/Run-length_encoding",
            "seen": false
        }
    ],
    treasurePuzzles:
    [
        {
            "id": "L1_TP01",
            "title": "Trail of Codes: Prime Opal Seal",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. A lock opens only if the number is prime. Is 29 prime? Enter YES or NO. Set the answer and the observatory gate will clear.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: Check divisors up to sqrt(29)."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: Check divisors up to sqrt(29).",
            "learnUrl": "https://en.wikipedia.org/wiki/Prime_number",
            "seen": false
        },
        {
            "id": "L1_TP02",
            "title": "Outback Signal: Bush Telegraph Sequence",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. Signal values are 1, 1, 2, 3, 5,?. Enter the next value. Give the best answer and continue east.",
            "answer": "8",
            "acceptedAnswers": [
                "8",
                "eight"
            ],
            "hints": [
                "The quickest path is the formal definition: Each term is the sum of the previous two."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Each term is the sum of the previous two.",
            "learnUrl": "https://en.wikipedia.org/wiki/Fibonacci_number",
            "seen": false
        },
        {
            "id": "L1_TP03",
            "title": "Sunline Protocol: Outback Set Intersection",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. Set A = {1,2,3} and set B = {2,4}. Enter the intersection value. Submit your answer to relight the beacons ahead.",
            "answer": "2",
            "acceptedAnswers": [
                "2",
                "two"
            ],
            "hints": [
                "Let the data guide you directly: Intersection keeps only shared elements."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Intersection keeps only shared elements.",
            "learnUrl": "https://en.wikipedia.org/wiki/Intersection_(set_theory)",
            "seen": false
        },
        {
            "id": "L1_TP04",
            "title": "Dawn Run: Tiny Tape Transition",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. A tape head reads 0. Rule says: write 1 and move right. What symbol is now written in the current cell? Crack it and the horizon route stays live.",
            "answer": "1",
            "acceptedAnswers": [
                "1",
                "one"
            ],
            "hints": [
                "Follow the same method from the relay notes: The rule explicitly tells what to write before moving."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: The rule explicitly tells what to write before moving.",
            "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine",
            "seen": false
        },
        {
            "id": "L1_TP05",
            "title": "Sunward Link: Outback Dust Compass",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. Inside a red-dust chest, a compass wheel shows directions N,E,S,W coded as 0,1,2,3. If pointer turns from N by +2, where does it point? Finish this check to stay on the solstice path.",
            "answer": "S",
            "acceptedAnswers": [
                "s",
                "south"
            ],
            "hints": [
                "Check the operation exactly as the console states: Map N=0 then add 2 steps clockwise."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: Map N=0 then add 2 steps clockwise.",
            "learnUrl": "https://en.wikipedia.org/wiki/Compass_rose",
            "seen": false
        },
        {
            "id": "L1_TP06",
            "title": "Dawn Run: Outback Opal Digits",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. An opal box asks for digital root of 987. Keep summing digits until one digit remains. Crack it and the horizon route stays live.",
            "answer": "6",
            "acceptedAnswers": [
                "6",
                "six"
            ],
            "hints": [
                "Follow the same method from the relay notes: 9+8+7=24, then 2+4=6."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: 9+8+7=24, then 2+4=6.",
            "learnUrl": "https://en.wikipedia.org/wiki/Digital_root",
            "seen": false
        },
        {
            "id": "L1_TP07",
            "title": "Solstice Circuit: Outback Sandstorm Boolean",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. Chest lock opens when (A OR B) is true. A=0, B=1. Does it open? YES or NO. Solve it to keep the dawn line open.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Use the simplest reading of the rule: OR needs at least one true input."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: OR needs at least one true input.",
            "learnUrl": "https://en.wikipedia.org/wiki/Boolean_algebra",
            "seen": false
        }
    ]
  };
})();
