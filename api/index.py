from typing import List, Literal

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from api.services.ai_service import generate_portfolio_response

app = FastAPI()


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]


class ChatResponse(BaseModel):
    reply: str


@app.get("/api")
def home():
    return {
        "message": "Tayyaba Portfolio API is running"
    }


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    try:
        messages = [
            {
                "role": message.role,
                "content": message.content,
            }
            for message in request.messages
        ]

        reply = generate_portfolio_response(messages)

        return {
            "reply": reply
        }

    except Exception as error:
        print("CHAT ERROR:", repr(error))

        raise HTTPException(
            status_code=500,
            detail="Unable to generate chat response.",
        )