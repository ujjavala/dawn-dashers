// @ts-nocheck

(function loadPuzzleLevel5() {
  globalThis.DawnDashersPuzzleLevels = globalThis.DawnDashersPuzzleLevels || {};
  globalThis.DawnDashersPuzzleLevels[4] = {
    heartPuzzles:
    [
        {
            "id": "L5_HP01",
            "title": "Relay Horizon: Tasmanian Tape Challenge",
            "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. A Turing rule is (q0,1)->(q1,0,R). Starting in q0 reading 1, what symbol remains on current cell after transition? Lock in your result and push to the next marker.",
            "answer": "0",
            "acceptedAnswers": [
                "0",
                "zero"
            ],
            "hints": [
                "Anchor on the key detail first: Write action occurs before move action."
            ],
            "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
            "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: Write action occurs before move action.",
            "learnUrl": "https://en.wikipedia.org/wiki/Turing_machine",
            "seen": false
        },
        {
            "id": "L5_HP02",
            "title": "Sunline Protocol: Cradle Mountain Halting Hint",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. A ranger asks whether one algorithm can always decide if any other arbitrary program halts. According to computability theory, YES or NO? Submit your answer to relight the beacons ahead.",
            "answer": "NO",
            "acceptedAnswers": [
                "no",
                "n"
            ],
            "hints": [
                "Let the data guide you directly: This is the famous Halting Problem result."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: This is the famous Halting Problem result.",
            "learnUrl": "https://en.wikipedia.org/wiki/Halting_problem",
            "seen": false
        },
        {
            "id": "L5_HP03",
            "title": "Outback Signal: Huon Valley NP Clue",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. If a solution can be verified quickly (in polynomial time), the problem is in class P or NP by definition? Enter NP or P. Give the best answer and continue east.",
            "answer": "NP",
            "acceptedAnswers": [
                "np"
            ],
            "hints": [
                "The quickest path is the formal definition: NP is defined by efficiently verifiable certificates."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: NP is defined by efficiently verifiable certificates.",
            "learnUrl": "https://en.wikipedia.org/wiki/NP_(complexity)",
            "seen": false
        },
        {
            "id": "L5_HP04",
            "title": "Trail of Codes: Tasmania SAT Snapshot",
            "instruction": "On the billabong crossing, an instrument case opens and reveals a hand-drawn finite-state sketch by Turing. Clause is (x OR y OR z). If x=0, y=0, z=1, is clause satisfied? YES or NO. Set the answer and the observatory gate will clear.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Do the exact comparison the prompt asks for: OR clause is true if any literal is true."
            ],
            "rightExplain": "Perfect. The relay tower catches your result and dawn light floods the path ahead.",
            "wrongExplain": "Good attempt. Check the operation order one more time. Do the exact comparison the prompt asks for: OR clause is true if any literal is true.",
            "learnUrl": "https://en.wikipedia.org/wiki/Boolean_satisfiability_problem",
            "seen": false
        },
        {
            "id": "L5_HP05",
            "title": "Sunward Link: Misty Bayes Posterior",
            "instruction": "You reach the coastal headland observatory just in time to catch a dawn-signal timing grid on the scope. Prior P(A)=0.1 and evidence multiplies odds by 9. Is posterior greater than 0.1? YES or NO. Finish this check to stay on the solstice path.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Check the operation exactly as the console states: Positive likelihood ratio above 1 increases belief."
            ],
            "rightExplain": "Yes. The outback station confirms the value and your sunward route unlocks.",
            "wrongExplain": "You are near. Verify each value from the prompt before you submit. Check the operation exactly as the console states: Positive likelihood ratio above 1 increases belief.",
            "learnUrl": "https://en.wikipedia.org/wiki/Bayes%27_theorem",
            "seen": false
        },
        {
            "id": "L5_HP06",
            "title": "Dawn Run: entropy in the Cold Wind",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. A source emits four symbols equally likely. entropy is 1, 2, or 4 bits? Enter 1, 2, or 4. Crack it and the horizon route stays live.",
            "answer": "2",
            "acceptedAnswers": [
                "2",
                "two"
            ],
            "hints": [
                "Follow the same method from the relay notes: entropy of uniform n-symbol source is log2(n)."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: entropy of uniform n-symbol source is log2(n).",
            "learnUrl": "https://en.wikipedia.org/wiki/Entropy_(information_theory)",
            "seen": false
        },
        {
            "id": "L5_HP07",
            "title": "Solstice Circuit: Tasman Graph Cut",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. Partition graph nodes into two sets with crossing edges count 7. Is cut value 7? YES or NO. Solve it to keep the dawn line open.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Use the simplest reading of the rule: Cut value equals number (or sum weight) of crossing edges."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Cut value equals number (or sum weight) of crossing edges.",
            "learnUrl": "https://en.wikipedia.org/wiki/Cut_(graph_theory)",
            "seen": false
        },
        {
            "id": "L5_HP08",
            "title": "First-Light Decode: Bruny Island Dynamic Table",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. DP table gives OPT[3]=8 and OPT[4]=13 from recurrence OPT[n]=OPT[n-1]+OPT[n-2]. What is OPT[5]? Confirm your choice and the route map will update.",
            "answer": "21",
            "acceptedAnswers": [
                "21",
                "twenty one"
            ],
            "hints": [
                "Run one careful pass through the values: Use last two known DP entries."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: Use last two known DP entries.",
            "learnUrl": "https://en.wikipedia.org/wiki/Dynamic_programming",
            "seen": false
        }
    ],
    levelPuzzles:
    [
        {
            "id": "L5_LP01",
            "title": "Observatory Sprint: Tasmanian Branch and Bound",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Current best solution cost is 42. A branch lower bound is 45. Should this branch be pruned? YES or NO. Answer cleanly, then sprint for the next relay.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Treat this like a clean machine instruction: Minimization: prune when lower bound exceeds current best."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Minimization: prune when lower bound exceeds current best.",
            "learnUrl": "https://en.wikipedia.org/wiki/Branch_and_bound",
            "seen": false
        },
        {
            "id": "L5_LP02",
            "title": "Morning Vector: Overland Approximation Ratio",
            "instruction": "Your explorer journal points to the saltbush ridge, where a binary beacon protocol from the archives appears. Algorithm output cost is 15, optimum is 12 (minimization). Approximation ratio output/optimum? Send it through and reopen the signal chain.",
            "answer": "1.25",
            "acceptedAnswers": [
                "1.25",
                "5/4"
            ],
            "hints": [
                "Use the beacon note as written: Compute 15 divided by 12."
            ],
            "rightExplain": "Clean logic. The sunrise channel stays locked and clear.",
            "wrongExplain": "Close, but not yet. Re-run the key step and compare it to the rule. Use the beacon note as written: Compute 15 divided by 12.",
            "learnUrl": "https://en.wikipedia.org/wiki/Approximation_algorithm",
            "seen": false
        },
        {
            "id": "L5_LP03",
            "title": "Radiant Route: Tasmania Markov Chain",
            "instruction": "From the radio tower catwalk, the next waypoint broadcasts a sunrise calibration sequence. Transition matrix row for SUNNY is [0.6 to SUNNY, 0.4 to RAIN]. If today SUNNY, probability tomorrow RAIN? Record the result to advance the expedition log.",
            "answer": "0.4",
            "acceptedAnswers": [
                "0.4",
                "40%"
            ],
            "hints": [
                "Start with what is fixed, then compute: Use the entry from SUNNY row to RAIN column."
            ],
            "rightExplain": "Strong work. The old research station opens another corridor.",
            "wrongExplain": "Nearly there. Keep the method strict and the answer will click. Start with what is fixed, then compute: Use the entry from SUNNY row to RAIN column.",
            "learnUrl": "https://en.wikipedia.org/wiki/Markov_chain",
            "seen": false
        },
        {
            "id": "L5_LP04",
            "title": "Observatory Sprint: Cradle Gradient Norm",
            "instruction": "A signal pulse rolls over the outback relay station; it is synced to an early-computing logic panel. Gradient vector is (3,4). Its Euclidean norm is? Answer cleanly, then sprint for the next relay.",
            "answer": "5",
            "acceptedAnswers": [
                "5",
                "five"
            ],
            "hints": [
                "Treat this like a clean machine instruction: Use sqrt(3^2 + 4^2)."
            ],
            "rightExplain": "You got it. The dawn protocol advances one full step.",
            "wrongExplain": "Good momentum. Revisit the given numbers and recompute the final step. Treat this like a clean machine instruction: Use sqrt(3^2 + 4^2).",
            "learnUrl": "https://en.wikipedia.org/wiki/Euclidean_distance",
            "seen": false
        },
        {
            "id": "L5_LP05",
            "title": "First-Light Decode: Tasman Logic Quantifier",
            "instruction": "Wind moves across the bush track switchback while the display loads Turing research notes on computation. Statement: \"For all integers n, n^2 >= 0\". Is statement true? YES or NO. Confirm your choice and the route map will update.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Run one careful pass through the values: Square of any real/integer is nonnegative."
            ],
            "rightExplain": "Excellent solve. The radio network relays your code across the bush track.",
            "wrongExplain": "Stay with it. The answer appears once each step is applied precisely. Run one careful pass through the values: Square of any real/integer is nonnegative.",
            "learnUrl": "https://en.wikipedia.org/wiki/Quantifier_(logic)",
            "seen": false
        },
        {
            "id": "L5_LP06",
            "title": "Outback Signal: NP Witness Check",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. Given candidate path length 19 and claimed bound <=20, does this witness satisfy the bound? YES or NO. Give the best answer and continue east.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "The quickest path is the formal definition: Verification is direct comparison with threshold."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Verification is direct comparison with threshold.",
            "learnUrl": "https://en.wikipedia.org/wiki/NP_(complexity)",
            "seen": false
        },
        {
            "id": "L5_LP07",
            "title": "Sunline Protocol: Tasmanian Reduction Clue",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. If problem A polynomially reduces to known hard problem B, does this suggest A is at least as hard as B? YES or NO. Submit your answer to relight the beacons ahead.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Let the data guide you directly: Reduction preserves hardness direction from target to source in this framing."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Reduction preserves hardness direction from target to source in this framing.",
            "learnUrl": "https://en.wikipedia.org/wiki/Reduction_(complexity)",
            "seen": false
        },
        {
            "id": "L5_LP08",
            "title": "Relay Horizon: Tassie Automata Closure",
            "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. Regular languages are closed under union. Is this true? YES or NO. Lock in your result and push to the next marker.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Anchor on the key detail first: This is a standard closure property of regular languages."
            ],
            "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
            "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: This is a standard closure property of regular languages.",
            "learnUrl": "https://en.wikipedia.org/wiki/Regular_language",
            "seen": false
        }
    ],
    treasurePuzzles:
    [
        {
            "id": "L5_TP01",
            "title": "Beacon Chase: Mersey River Min-Cut Max-Flow",
            "instruction": "At the wattle-lined trail, your scanner wakes to the first rays of solstice sunrise. A network has max flow value 14. What is min cut value by theorem? Enter one answer to keep chasing sunrise.",
            "answer": "14",
            "acceptedAnswers": [
                "14",
                "fourteen"
            ],
            "hints": [
                "Turing would test it step by step: Max-flow min-cut theorem equates these values."
            ],
            "rightExplain": "Correct. The signal beacon syncs with your team and the chase continues.",
            "wrongExplain": "Not this pass. Walk through the inputs carefully from left to right. Turing would test it step by step: Max-flow min-cut theorem equates these values.",
            "learnUrl": "https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem",
            "seen": false
        },
        {
            "id": "L5_TP02",
            "title": "Solstice Circuit: Tasmania Simulated Annealing",
            "instruction": "Near the eucalyptus signal yard, the puzzle feed locks onto a machine tape transition from a Turing diagram. At high temperature, does simulated annealing accept some worse moves? YES or NO. Solve it to keep the dawn line open.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Use the simplest reading of the rule: Early exploration accepts uphill/downhill with higher probability."
            ],
            "rightExplain": "Nailed it. Your journal map redraws with a bright line toward sunrise.",
            "wrongExplain": "Keep going. A small arithmetic or logic slip is hiding in the middle. Use the simplest reading of the rule: Early exploration accepts uphill/downhill with higher probability.",
            "learnUrl": "https://en.wikipedia.org/wiki/Simulated_annealing",
            "seen": false
        },
        {
            "id": "L5_TP03",
            "title": "Dawn Run: Southwest Coast Information Gain",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. entropy before split is 1.0, after split weighted entropy is 0.6. Information gain? Crack it and the horizon route stays live.",
            "answer": "0.4",
            "acceptedAnswers": [
                "0.4"
            ],
            "hints": [
                "Follow the same method from the relay notes: Gain = before - after."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Gain = before - after.",
            "learnUrl": "https://en.wikipedia.org/wiki/Information_gain_in_decision_trees",
            "seen": false
        },
        {
            "id": "L5_TP04",
            "title": "Dawn Run: Final Tasman Checkpoint",
            "instruction": "At full stride through the red-dust service road, you trigger a cryptography margin note from Bletchley-era methods. A decider must halt on all inputs. If a machine loops forever on one input, is it a decider? YES or NO. Crack it and the horizon route stays live.",
            "answer": "NO",
            "acceptedAnswers": [
                "no",
                "n"
            ],
            "hints": [
                "Follow the same method from the relay notes: Deciders must halt for every possible input."
            ],
            "rightExplain": "Exactly right. The solstice monument rotates and points to the next sector.",
            "wrongExplain": "Almost. Use the formal definition here, not a shortcut. Follow the same method from the relay notes: Deciders must halt for every possible input.",
            "learnUrl": "https://en.wikipedia.org/wiki/Decider_(Turing_machine)",
            "seen": false
        },
        {
            "id": "L5_TP05",
            "title": "Relay Horizon: Tasmania Misty Automata",
            "instruction": "The route bends past the ironbark lookout, where your team spots June Solstice dawn light. Regular expression a*b accepts strings of zero or more a then one b. Does aaab match? YES or NO. Lock in your result and push to the next marker.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Anchor on the key detail first: aaab is many a then one b."
            ],
            "rightExplain": "Brilliant call. The observatory array hums to life at first light.",
            "wrongExplain": "Solid try. Recheck what the puzzle is asking you to output exactly. Anchor on the key detail first: aaab is many a then one b.",
            "learnUrl": "https://en.wikipedia.org/wiki/Regular_expression",
            "seen": false
        },
        {
            "id": "L5_TP06",
            "title": "Sunline Protocol: Tasmania Halting Sign",
            "instruction": "You skid to a stop near the spinifex plains as the longest-night sky of the June Solstice activates the console. A function that always returns after finite steps is called halting. Is this halting behavior? YES or NO. Submit your answer to relight the beacons ahead.",
            "answer": "YES",
            "acceptedAnswers": [
                "yes",
                "y"
            ],
            "hints": [
                "Let the data guide you directly: Finite completion means halt."
            ],
            "rightExplain": "Spot on. Turing’s note in the margin matches your solution.",
            "wrongExplain": "You are on track. Test one clean recomputation and trust the result. Let the data guide you directly: Finite completion means halt.",
            "learnUrl": "https://en.wikipedia.org/wiki/Halting",
            "seen": false
        },
        {
            "id": "L5_TP07",
            "title": "Outback Signal: Tasmania Final Cipher",
            "instruction": "Between markers on the opal mine gantry, you uncover a solstice monument alignment. A summit chest label says \"TAS\" shifted +1 became \"UBT\". Decode UBT by shifting -1. Give the best answer and continue east.",
            "answer": "TAS",
            "acceptedAnswers": [
                "tas"
            ],
            "hints": [
                "The quickest path is the formal definition: Reverse the given shift by one step back."
            ],
            "rightExplain": "Right answer. The machine panel stabilizes and grants the next waypoint.",
            "wrongExplain": "Not far off. Match your final value to the condition in the clue. The quickest path is the formal definition: Reverse the given shift by one step back.",
            "learnUrl": "https://en.wikipedia.org/wiki/Caesar_cipher",
            "seen": false
        }
    ]
  };
})();
