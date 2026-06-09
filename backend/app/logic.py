import random

DIALOGUE_LINES = {
    "Outback": [
        "The night is long, mate, but the dawn still listens.",
        "Solar ruins ahead. Keep your eyes on the horizon.",
        "Dust in the air means drones are nearby."
    ],
    "Bushland": [
        "The trees whisper clues if you pause and listen.",
        "Fireflies are marking a safe trail tonight.",
        "Something bright is hidden where shadows gather."
    ],
    "Servo": [
        "Top up your lantern before the next stretch.",
        "Traveller says the lighthouse beam is flickering again.",
        "Upgrade now, outrun darkness later."
    ],
    "Coast": [
        "Wind from the cliffs can carry you farther than you think.",
        "Ships searched for home here. So does the Sun Fragment.",
        "Keep gliding. The tide reveals hidden paths."
    ],
    "Tasmania": [
        "Aurora is strongest tonight. Follow the green shimmer.",
        "The core is close. Watch for drone swarms.",
        "Even the cold cannot stop sunrise forever."
    ],
}

HINTS = {
    "binary": [
        "Try toggling the middle switches first, then mirror the edges.",
        "If the pattern starts with 1, check every second switch."
    ],
    "pattern": [
        "Look for alternation before looking for growth.",
        "Repeat length is often 2 or 3 in this zone."
    ],
    "route": [
        "Shortest path avoids dead-end branches with two turns.",
        "Count turns and distance, not just direct line length."
    ],
    "signal": [
        "Decode in chunks. Group symbols before matching.",
        "Compare first and last symbols for symmetry."
    ],
    "logic": [
        "AND needs both lights. OR needs at least one.",
        "Set one input at a time and watch output changes."
    ],
    "tape": [
        "Flip cells that appear in repeated positions first.",
        "Solve center bits, then align outer edges."
    ],
    "state_machine": [
        "Find the transition that moves you closer to the accept state.",
        "A wrong symbol can send you into a dead state."
    ],
    "codebreaker": [
        "Try high-information guesses before repeating symbols.",
        "If one symbol is wrong, rotate only a single position next."
    ],
    "sequence_predictor": [
        "Look for alternation and periodic repeats before growth.",
        "The next token often mirrors the first half of the pattern."
    ],
    "parity": [
        "Count active bits and target even or odd total.",
        "One extra toggle flips parity instantly."
    ],
}

ROAD_EVENTS = [
    {
        "title": "Wombat Roadworks",
        "description": "A wombat crew clears a blocked tunnel. Shortcut unlocked.",
        "reward_tokens": 1,
    },
    {
        "title": "Aurora Surge",
        "description": "Lantern resonance spikes under the southern lights.",
        "reward_tokens": 2,
    },
    {
        "title": "Traveller's Map",
        "description": "A traveller marks an old observatory route on your map.",
        "reward_tokens": 1,
    },
]


def random_dialogue(region: str) -> str:
    lines = DIALOGUE_LINES.get(region, DIALOGUE_LINES["Outback"])
    return random.choice(lines)


def random_hint(puzzle_type: str) -> str:
    hints = HINTS.get(puzzle_type, HINTS["pattern"])
    return random.choice(hints)


def random_road_event() -> dict:
    return random.choice(ROAD_EVENTS)
