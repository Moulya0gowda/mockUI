from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
import asyncio
import random

app = FastAPI()

# Allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Predefined fake replies (expand as needed)
responses = [
    "That's an interesting question. Let me think...",
    "Sure! Here's what I found.",
    "Absolutely. Here's a quick summary for you.",
    "I'd love to help with that. Here's how I see it."
]

async def stream_fake_response(prompt: str):
    selected = random.choice(responses)
    for token in selected.split():
        await asyncio.sleep(0.2)  # simulate thinking
        yield {"data": token + " "}
    await asyncio.sleep(0.5)
    yield {"data": "\n"}

@app.get("/chat")
async def chat(request: Request, prompt: str):
    return EventSourceResponse(stream_fake_response(prompt))