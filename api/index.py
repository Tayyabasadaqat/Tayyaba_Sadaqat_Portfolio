from typing import List, Literal

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]


@app.get("/api")
def home():
    return {
        "message": "Tayyaba Portfolio API is running"
    }


@app.post("/api/chat")
def chat(request: ChatRequest):
    return {
        "reply": f"TEST SUCCESS: You sent {request.messages[-1].content}"
    }