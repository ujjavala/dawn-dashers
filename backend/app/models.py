from pydantic import BaseModel


class DialogueRequest(BaseModel):
    animal: str = "Emu"
    region: str = "Outback"
    mood: str = "hopeful"


class DialogueResponse(BaseModel):
    line: str


class HintRequest(BaseModel):
    puzzle_type: str = "pattern"
    difficulty: str = "easy"


class HintResponse(BaseModel):
    hint: str


class RoadEventResponse(BaseModel):
    title: str
    description: str
    reward_tokens: int
