import os

from groq import Groq

from api.data.portfolio_context import PORTFOLIO_CONTEXT


def generate_portfolio_response(messages):
    api_key = os.getenv("GROQ_API_KEY")

    if not api_key:
        raise ValueError("GROQ_API_KEY is missing")

    client = Groq(api_key=api_key)

    clean_messages = []

    for message in messages[-12:]:
        role = message.get("role")
        content = message.get("content", "").strip()

        if role in ["user", "assistant"] and content:
            clean_messages.append(
                {
                    "role": role,
                    "content": content,
                }
            )

    groq_messages = [
        {
            "role": "system",
            "content": PORTFOLIO_CONTEXT,
        },
        *clean_messages,
    ]

    completion = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=groq_messages,
        temperature=0.3,
        max_tokens=400,
    )

    return completion.choices[0].message.content