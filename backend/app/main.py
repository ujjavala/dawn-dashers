from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .logic import random_dialogue, random_hint, random_road_event
from .models import (
    DialogueRequest,
    DialogueResponse,
    HintRequest,
    HintResponse,
    RoadEventResponse,
)

app = FastAPI(title="Dawn Dashers API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"ok": True}


@app.post("/dialogue")
def dialogue(request: DialogueRequest) -> DialogueResponse:
    return DialogueResponse(line=random_dialogue(request.region))


@app.post("/hint")
def hint(request: HintRequest) -> HintResponse:
    return HintResponse(hint=random_hint(request.puzzle_type))


@app.get("/road-event")
def road_event() -> RoadEventResponse:
    event = random_road_event()
    return RoadEventResponse(**event)
