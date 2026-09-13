import os
import html
from typing import List, Literal

import resend
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr

from api.services.ai_service import generate_portfolio_response


app = FastAPI()


# -----------------------------
# CHAT MODELS
# -----------------------------

class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]


class ChatResponse(BaseModel):
    reply: str


# -----------------------------
# CONTACT MODELS
# -----------------------------

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


# -----------------------------
# HOME
# -----------------------------

@app.get("/api")
def home():
    return {
        "message": "Tayyaba Portfolio API is running"
    }


# -----------------------------
# AI CHAT
# -----------------------------

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


# -----------------------------
# CONTACT FORM
# -----------------------------

@app.post("/api/contact", response_model=ContactResponse)
def contact(request: ContactRequest):
    try:
        api_key = os.getenv("RESEND_API_KEY")

        if not api_key:
            raise ValueError("RESEND_API_KEY is missing")

        resend.api_key = api_key

        name = html.escape(request.name.strip())
        email = html.escape(str(request.email).strip())
        subject = html.escape(request.subject.strip())
        message = html.escape(request.message.strip())

        if not name or not subject or not message:
            raise HTTPException(
                status_code=400,
                detail="All fields are required.",
            )

        email_html = f"""
        <div style="
            font-family: Arial, Helvetica, sans-serif;
            background: #0a0a0a;
            padding: 32px;
            color: #ffffff;
        ">
            <div style="
                max-width: 620px;
                margin: 0 auto;
                background: #111111;
                border: 1px solid #27272a;
                padding: 32px;
            ">
                <p style="
                    margin: 0 0 10px;
                    font-size: 12px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #a855f7;
                ">
                    Portfolio Contact
                </p>

                <h2 style="
                    margin: 0 0 28px;
                    font-size: 28px;
                    color: #ffffff;
                ">
                    New message from your portfolio
                </h2>

                <p style="color: #a1a1aa;">
                    <strong style="color: #ffffff;">Name:</strong><br>
                    {name}
                </p>

                <p style="color: #a1a1aa;">
                    <strong style="color: #ffffff;">Email:</strong><br>
                    {email}
                </p>

                <p style="color: #a1a1aa;">
                    <strong style="color: #ffffff;">Subject:</strong><br>
                    {subject}
                </p>

                <div style="
                    margin-top: 28px;
                    border-top: 1px solid #27272a;
                    padding-top: 24px;
                ">
                    <p style="
                        color: #ffffff;
                        font-weight: bold;
                        margin-bottom: 10px;
                    ">
                        Message
                    </p>

                    <p style="
                        white-space: pre-wrap;
                        color: #d4d4d8;
                        line-height: 1.7;
                    ">
                        {message}
                    </p>
                </div>
            </div>
        </div>
        """

        params: resend.Emails.SendParams = {
            "from": "Tayyaba Portfolio <onboarding@resend.dev>",
            "to": ["arishtayb818@gmail.com"],
            "subject": f"Portfolio: {request.subject.strip()}",
            "html": email_html,
            "reply_to": str(request.email),
        }

        resend.Emails.send(params)

        return {
            "success": True,
            "message": "Message sent successfully.",
        }

    except HTTPException:
        raise

    except Exception as error:
        print("CONTACT ERROR:", repr(error))

        raise HTTPException(
            status_code=500,
            detail="Unable to send message.",
        )