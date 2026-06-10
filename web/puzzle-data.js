// @ts-nocheck

(function attachDawnDashersPuzzleData(globalScope) {
  const levelPuzzlePools = {
    0: [0, 2],
    1: [3, 4],
    2: [8, 5],
    3: [1, 7],
    4: [6, 9]
  };

  const turingPuzzles = [
    {
      title: 'Outback Reversed Message',
      instruction: 'A dusty radio near an outback roadhouse reverses the name of the thinker who inspired this machine. Decode: N A L A.',
      answer: 'ALAN',
      acceptedAnswers: ['alan'],
      hints: [
        'Read the signal backward from right to left.',
        'The last letter in the bush transmission comes first.',
        'Reverse N A L A completely.'
      ],
      rightExplain: 'Correct. Reversing N A L A gives A L A N, the Turing clue hidden in the outback static.',
      wrongExplain: 'Oops. This outback radio trick is a straight reversal, right-to-left.',
      learnUrl: 'https://en.wikipedia.org/wiki/Turing_machine'
    },
    {
      title: 'Bush Telegraph Shift',
      instruction: 'A bush telegraph note says each letter is shifted forward once. Shift backward by one to decode: B M B O.',
      answer: 'ALAM',
      acceptedAnswers: ['alam', 'alan'],
      hints: [
        'Ask which letter comes just before B in the alphabet.',
        'Shift each character back by one, one at a time.',
        'This puzzle is aiming you toward ALAN even if one clue letter is a little scruffy.'
      ],
      rightExplain: 'Nice. Back-shifting the bush code reveals the intended Turing nod.',
      wrongExplain: 'Oops. Move each letter one step backward through the alphabet.',
      learnUrl: 'https://en.wikipedia.org/wiki/Binary_number'
    },
    {
      title: 'The Odd One Outback',
      instruction: 'Which item does NOT belong at a Turing research camp: Computer, Microchip, Calculator, Billy Can?',
      answer: 'Billy Can',
      acceptedAnswers: ['billy can', 'billycan'],
      hints: [
        'Three items are computing-related tools.',
        'One is camp gear for boiling tea in the bush.'
      ],
      rightExplain: 'Correct. A billy can belongs by the fire, not inside a computing set.',
      wrongExplain: 'Oops. Pick the item that is not part of an electronic/computing toolkit.',
      learnUrl: 'https://en.wikipedia.org/wiki/Boolean_algebra'
    },
    {
      title: 'Binary at Bondi',
      instruction: 'A Bondi lifeguard board flashes the two symbols used by every binary machine. What are they?',
      answer: '0 and 1',
      acceptedAnswers: ['0 and 1', '0,1', '0 1', '01'],
      hints: [
        'Think of a surf warning light being OFF or ON.',
        'Binary uses exactly two symbols.'
      ],
      rightExplain: 'Correct. Whether in Sydney or Cambridge, binary is built from 0 and 1.',
      wrongExplain: 'Oops. Binary machines use only 0 and 1.',
      learnUrl: 'https://en.wikipedia.org/wiki/Enigma_machine'
    },
    {
      title: 'Tasman Tide Sequence',
      instruction: 'A Tassie signal buoy doubles every cycle. Find the missing value: 2, 4, 8, 16, [ ? ], 64.',
      answer: '32',
      acceptedAnswers: ['32'],
      hints: [
        'Each buoy reading is twice the last one.',
        'Double 16 to fill the gap.'
      ],
      rightExplain: 'Correct. The Tasman reading doubles cleanly to 32 before 64.',
      wrongExplain: 'Oops. This coastal pattern doubles at each step.',
      learnUrl: 'https://en.wikipedia.org/wiki/Halting_problem'
    },
    {
      title: 'The Secret Identity Test',
      instruction: 'At a Darwin pub quiz, one mate answers a giant multiplication instantly while the other stalls for 5 seconds. Who is the computer?',
      answer: 'Player A',
      acceptedAnswers: ['player a', 'a'],
      hints: [
        'Humans usually need time for huge arithmetic, even after a meat pie.',
        'The instant responder is the stronger machine candidate.'
      ],
      rightExplain: 'Correct. Near-instant huge arithmetic strongly suggests Player A is the machine.',
      wrongExplain: 'Oops. In a Turing-style test, instant huge arithmetic points to the computer.',
      learnUrl: 'https://en.wikipedia.org/wiki/Turing_test'
    },
    {
      title: 'The Enigma Plugboard Down Under',
      instruction: 'A coastal cipher hut swaps A↔E and B↔X. What does B A B E become?',
      answer: 'X E X A',
      acceptedAnswers: ['x e x a', 'xexa', 'xexa '],
      hints: [
        'Swap each B for X wherever it appears.',
        'Swap each A for E, and E back to A.'
      ],
      rightExplain: 'Correct. You applied the plugboard swaps in order, just like a tiny Enigma hut on the coast would.',
      wrongExplain: 'Oops. Apply the plugboard swaps to each letter one by one.',
      learnUrl: 'https://en.wikipedia.org/wiki/Enigma_machine'
    },
    {
      title: 'The Bush Logic Route',
      instruction: 'A survey robot crosses the bush track only if it is SUNNY AND weekend. Today is Saturday and raining. Does it walk?',
      answer: 'No',
      acceptedAnswers: ['no', 'n'],
      hints: [
        'AND means both conditions must be true together.',
        'Weekend is true, but sunny is false.'
      ],
      rightExplain: 'Correct. A wet Saturday in the bush still fails the SUNNY AND weekend rule.',
      wrongExplain: 'Oops. With AND logic, one false condition makes the whole route fail.',
      learnUrl: 'https://en.wikipedia.org/wiki/Logic_gate'
    },
    {
      title: 'The Codebreaker\'s Keycard',
      instruction: 'A servo relay locker uses a 3-digit key: first digit 1, second is double the first, third is double the second. What code opens it?',
      answer: '124',
      acceptedAnswers: ['124'],
      hints: [
        'Start from 1 at the first dial.',
        'Keep doubling the previous digit to get the next one.'
      ],
      rightExplain: 'Correct. 1 -> 2 -> 4 opens the servo locker with code 124.',
      wrongExplain: 'Oops. This code doubles from the previous digit each time.',
      learnUrl: 'https://en.wikipedia.org/wiki/Pattern_recognition'
    },
    {
      title: 'The Turing Tape at the Tram Stop',
      instruction: 'A Melbourne tram-stop machine follows one rule: if you see a 0, change it to 1 and stop. Tape: 1, 1, 0, 1. Final tape?',
      answer: '1,1,1,1',
      acceptedAnswers: ['1,1,1,1', '1 1 1 1', '1111'],
      hints: [
        'Leave each 1 unchanged as you scan.',
        'Flip the first 0 you encounter, then stop immediately.'
      ],
      rightExplain: 'Correct. The lone 0 becomes 1, leaving an all-ones tape.',
      wrongExplain: 'Oops. You flip only the encountered 0 to 1, then halt.',
      learnUrl: 'https://en.wikipedia.org/wiki/Turing_machine'
    }
  ];

  const levelTreasurePools = {
    0: [0],
    1: [1],
    2: [2],
    3: [3],
    4: [3]
  };

  const treasurePuzzles = [
    {
      title: 'Captcha Interrogation at Coober Pedy',
      instruction: 'Case file: Three station workers at a Coober Pedy roadhouse were asked, "How do you feel about this weather?" Worker 1 talks about sore knees. Worker 2 complains about kitchen humidity. Worker 3 says, "As an AI, I do not have personal feelings about meteorological conditions." Which suspect failed the Turing test?',
      answer: 'Suspect 3',
      acceptedAnswers: ['suspect 3', 'worker 3', '3', 'the maid', 'suspect three'],
      hints: [
        'One answer sounds like a system prompt, not a human yarning about weather.',
        'The suspect who literally says they are an AI fails immediately.',
        'Pick the third suspect.'
      ],
      rightExplain: 'Spot on. Suspect 3 blew their cover and failed the Turing test in true outback detective style.',
      wrongExplain: 'Not quite. The synthetic suspect gives the robotic weather-stat answer.',
      learnUrl: 'https://en.wikipedia.org/wiki/Turing_test'
    },
    {
      title: 'Enigma Typo at Bondi HQ',
      instruction: 'Intercepted note from a clumsy spy near Bondi says to secure under "S B X B". Analyst note: decode by shifting each letter backward by one. What word do you get?',
      answer: 'RAWA',
      acceptedAnswers: ['rawa'],
      hints: [
        'Shift S -> R, B -> A, X -> W, B -> A.',
        'Write each decoded letter in order after shifting back by one.',
        'The decoded word is RAWA.'
      ],
      rightExplain: 'Correct. RAWA is the decoded text from the backward Shift-1 spy typo.',
      wrongExplain: 'Try decoding each letter one step backward in the alphabet.',
      learnUrl: 'https://en.wikipedia.org/wiki/Cryptanalysis'
    },
    {
      title: 'Infinite Loop Alibi in Darwin',
      instruction: 'Professor Loop claims: "I followed shampoo instructions between 4 and 5 PM: lather, rinse, repeat continuously, then left at 4:30." Using the Halting Problem idea, is this alibi possible?',
      answer: 'No',
      acceptedAnswers: ['no', 'not possible', 'impossible', 'n'],
      hints: [
        '"Repeat" with no stop condition is an infinite loop.',
        'A non-halting process cannot magically finish by 4:30.',
        'So the alibi is not possible.'
      ],
      rightExplain: 'Exactly. Without a halt condition, the loop never ends, so the alibi collapses.',
      wrongExplain: 'If instructions never halt, the process cannot finish in finite time.',
      learnUrl: 'https://en.wikipedia.org/wiki/Halting_problem'
    },
    {
      title: 'Punch Card Recipe in Melbourne',
      instruction: 'Universal machine runs MAKE_TEA.EXE. Step 4 says "Chill for five minutes." The machine interprets literally and moves the tea to the coldest place in the house. Where does it put it?',
      answer: 'Freezer',
      acceptedAnswers: ['freezer', 'fridge', 'refrigerator'],
      hints: [
        'The machine follows literal instructions, not slang.',
        '"Chill" becomes physical cooling, not relaxing.',
        'It stores the tea in the freezer/fridge.'
      ],
      rightExplain: 'Bang on. A literal universal machine would stash the tea in the freezer or fridge.',
      wrongExplain: 'Think literal execution: where in a home is the coldest storage?',
      learnUrl: 'https://en.wikipedia.org/wiki/Universal_Turing_machine'
    }
  ];

  globalScope.DawnDashersPuzzleData = {
    levelPuzzlePools,
    turingPuzzles,
    levelTreasurePools,
    treasurePuzzles
  };
})(globalThis);