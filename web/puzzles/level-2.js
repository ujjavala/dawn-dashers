// @ts-nocheck

(function loadPuzzleLevel2() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[1] = {
    heartPuzzles:
    [
        {
            "id": "L2_HP01",
            "title": "Sunline Protocol: Eucalyptus Cipher Track",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. Bushland scouts encrypted KOALA with +2 Caesar shift, giving MQCNC. Decode MQCNC back to the original word. Submit your answer to relight the beacons ahead.",
            "answer": "KOALA",
            "acceptedAnswers": [
                "koala"
            ],
            "hints": [
                "Let the data guide you directly: Shift each letter backward by 2."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Shift each letter backward by 2.",
            "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher",
            "seen": false
        },
        {
            "id": "L2_HP02",
            "title": "Relay Horizon: Creek Binary Weight",
            "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. A creek bridge plate reads 10010 in binary. Convert it to decimal. Lock in your result and push to the next marker.",
            "answer": "18",
            "acceptedAnswers": [
                "18",
                "eighteen"
            ],
            "hints": [
                "Anchor on the key detail first: 10010 = 16 + 2."
            ],
            "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
            "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: 10010 = 16 + 2.",
            "learnUrl": "https://en.wikipedia.org/wiki/Binary_number",
            "seen": false
        },
        {
            "id": "L2_HP03",
            "title": "Beacon Chase: Wombat Burrow nearest-first route search",
            "instruction": "At the wattle-lined trail, your scanner wakes to the first rays of solstice sunrise. Burrow graph: Start->A, Start->B, A->Goal, B->C, C->Goal. Using nearest-first route search, which node is expanded second after Start if neighbors are listed A then B? Enter one answer to keep chasing sunrise.",
            "answer": "A",
            "acceptedAnswers": [
                "a"
            ],
            "hints": [
                "Turing would test it step by step: nearest-first route search expands nodes in first-listed line order."
            ],
            "rightExplain": "Correct. The signal beacon syncs with your team and the chase continues.",
            "wrongExplain": "Not this pass. Walk through the inputs carefully from left to right. Turing would test it step by step: nearest-first route search expands nodes in first-listed line order.",
            "learnUrl": "https://en.wikipedia.org/wiki/Breadth-first_search",
            "seen": false
        },
        {
            "id": "L2_HP04",
            "title": "Solstice Circuit: Bushland Truth Table",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. For expression (A AND B) with A=1 and B=1, output? Solve it to keep the dawn line open.",
            "answer": "1",
            "acceptedAnswers": [
                "1",
                "one"
            ],
            "hints": [
                "Use the simplest reading of the rule: AND with both true returns true."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: AND with both true returns true.",
            "learnUrl": "https://en.wikipedia.org/wiki/Boolean_algebra",
            "seen": false
        },
        {
            "id": "L2_HP05",
            "title": "Dawn Run: Lyrebird Sort Swap Count",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. In one bubble-sort pass on [4,2,3], how many swaps occur? Crack it and the horizon route stays live.",
            "answer": "2",
            "acceptedAnswers": [
                "2",
                "two"
            ],
            "hints": [
                "Follow the same method from the relay notes: Compare 4-2 then 4-3 in first pass."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Compare 4-2 then 4-3 in first pass.",
            "learnUrl": "https://en.wikipedia.org/wiki/Bubble_sort",
            "seen": false
        },
        {
            "id": "L2_HP06",
            "title": "Sunward Link: Billabong Probability",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. A bag has 3 green gum nuts and 1 red gum nut. Probability of drawing red? Finish this check to stay on the solstice path.",
            "answer": "1/4",
            "acceptedAnswers": [
                "1/4",
                "0.25",
                "25%"
            ],
            "hints": [
                "Check the operation exactly as the console states: Red outcomes over total outcomes."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: Red outcomes over total outcomes.",
            "learnUrl": "https://en.wikipedia.org/wiki/Probability",
            "seen": false
        },
        {
            "id": "L2_HP07",
            "title": "Trail of Codes: Bushland Remainder Marker",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. Trail marker says compute 37 remainder when divided by 6 to pick the safe fork. Set the answer and the observatory gate will clear.",
            "answer": "1",
            "acceptedAnswers": [
                "1",
                "one"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: 6x6 = 36, then remainder is 1."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: 6x6 = 36, then remainder is 1.",
            "learnUrl": "https://en.wikipedia.org/wiki/Modulo",
            "seen": false
        },
        {
            "id": "L2_HP08",
            "title": "Solstice Circuit: Greedy Seed Pickup",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. Seed values on a path: 9, 5, 2. A greedy picker takes highest immediate value first. Which value is picked first? Solve it to keep the dawn line open.",
            "answer": "9",
            "acceptedAnswers": [
                "9",
                "nine"
            ],
            "hints": [
                "Use the simplest reading of the rule: Greedy chooses best local option immediately."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Greedy chooses best local option immediately.",
            "learnUrl": "https://en.wikipedia.org/wiki/Greedy_algorithm",
            "seen": false
        }
    ],
    levelPuzzles:
    [
        {
            "id": "L2_LP01",
            "title": "Dawn Run: Koala Hash Bucket",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. Hash function h(x)=x remainder when divided by 5. Which bucket does key 17 go to? Crack it and the horizon route stays live.",
            "answer": "2",
            "acceptedAnswers": [
                "2",
                "two"
            ],
            "hints": [
                "Follow the same method from the relay notes: Compute 17 remainder when divided by 5."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Compute 17 remainder when divided by 5.",
            "learnUrl": "https://en.wikipedia.org/wiki/Hash_table",
            "seen": false
        },
        {
            "id": "L2_LP02",
            "title": "Trail of Codes: Echidna Path Cost",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. Paths to camp: A costs 4+3, B costs 2+6, C costs 5+1. Which has smallest total cost? Enter A, B, or C. Set the answer and the observatory gate will clear.",
            "answer": "C",
            "acceptedAnswers": [
                "c"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: Compute each path total and compare."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: Compute each path total and compare.",
            "learnUrl": "https://en.wikipedia.org/wiki/Shortest_path_problem",
            "seen": false
        },
        {
            "id": "L2_LP03",
            "title": "Sunward Link: Birdsong Compression",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. Run-length encode AAAAABB. Enter encoded form using count+letter. Finish this check to stay on the solstice path.",
            "answer": "5A2B",
            "acceptedAnswers": [
                "5a2b"
            ],
            "hints": [
                "Check the operation exactly as the console states: Count consecutive As then Bs."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: Count consecutive As then Bs.",
            "learnUrl": "https://en.wikipedia.org/wiki/Run-length_encoding",
            "seen": false
        },
        {
            "id": "L2_LP04",
            "title": "Dawn Run: Bushland XOR Gate",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. A warning beacon uses XOR with inputs 1 and 0. Output? Crack it and the horizon route stays live.",
            "answer": "1",
            "acceptedAnswers": [
                "1",
                "one"
            ],
            "hints": [
                "Follow the same method from the relay notes: XOR is 1 when inputs differ."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: XOR is 1 when inputs differ.",
            "learnUrl": "https://en.wikipedia.org/wiki/Exclusive_or",
            "seen": false
        },
        {
            "id": "L2_LP05",
            "title": "Solstice Circuit: Possum Stack Undo",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. Around the campfire, the possum places token A on the crate, then token B on top, then takes the top token back. Which token remains on top? Solve it to keep the dawn line open.",
            "answer": "A",
            "acceptedAnswers": [
                "a"
            ],
            "hints": [
                "Use the simplest reading of the rule: Stack is last-in-first-out order: last in, first out."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Stack is last-in-first-out order: last in, first out.",
            "learnUrl": "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
            "seen": false
        },
        {
            "id": "L2_LP06",
            "title": "First-Light Decode: Water Pump Line Order",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. At the bush water pump, KOALA joins the line first, then EMU. When one mate leaves from the front, who leaves? Confirm your choice and the route map will update.",
            "answer": "KOALA",
            "acceptedAnswers": [
                "koala"
            ],
            "hints": [
                "Run one careful pass through the values: A line at the pump follows first-in, first-out order."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: A line at the pump follows first-in, first-out order.",
            "learnUrl": "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
            "seen": false
        },
        {
            "id": "L2_LP07",
            "title": "Observatory Sprint: Bushland Median Map",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Sample times are 8, 3, 5, 7, 4. What is the median? Answer cleanly, then sprint for the next relay.",
            "answer": "5",
            "acceptedAnswers": [
                "5",
                "five"
            ],
            "hints": [
                "Treat this like a clean machine instruction: Sort values first, then pick middle."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Sort values first, then pick middle.",
            "learnUrl": "https://en.wikipedia.org/wiki/Median",
            "seen": false
        },
        {
            "id": "L2_LP08",
            "title": "Radiant Route: Gumtree Frequency Count",
            "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. In code string ABACABA, how many times does A appear? Record the result to advance the expedition log.",
            "answer": "4",
            "acceptedAnswers": [
                "4",
                "four"
            ],
            "hints": [
                "Start with what is fixed, then compute: Count every A occurrence."
            ],
            "rightExplain": "Strong work. The old research station opens another corridor.",
            "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Count every A occurrence.",
            "learnUrl": "https://en.wikipedia.org/wiki/Frequency_(statistics)",
            "seen": false
        }
    ],
    treasurePuzzles:
    [
        {
            "id": "L2_TP01",
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
            "seen": false
        },
        {
            "id": "L2_TP02",
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
            "seen": false
        },
        {
            "id": "L2_TP03",
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
            "seen": false
        },
        {
            "id": "L2_TP04",
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
            "seen": false
        },
        {
            "id": "L2_TP05",
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
            "seen": false
        },
        {
            "id": "L2_TP06",
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
            "seen": false
        },
        {
            "id": "L2_TP07",
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
            "seen": false
        }
    ]
  };
})();
