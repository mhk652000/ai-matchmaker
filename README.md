Uses local LLM inference (Ollama/Llama3) and Nomic vector embeddings to architect serendipity between $18T AUM decision-makers. Features privacy-first semantic matching, explainable AI reasoning, and high-dimensional vector proximity scoring.
# Nexus AI | Semantic Matchmaking Engine 🏛️

**Architecting Serendipity for Proof of Talk 2026**

Nexus is a privacy-first, AI-driven matchmaking engine designed to facilitate high-value connections at elite summits. Unlike traditional keyword-based platforms, Nexus uses **Vector Embeddings** to understand the deep semantic intent of attendees—matching a Sovereign Wealth Fund's thesis with a protocol's infrastructure, even when their keywords don't overlap.

## 🚀 The Problem
At a summit with 2,500 C-suite executives representing **$18 Trillion AUM**, the cost of a missed connection is astronomical. Nexus eliminates the randomness of networking by transforming the event into a "Transactional Engine."

## 🧠 Core Logic & Tech Stack
Nexus operates on a **Semantic Proximity Model**:
- **Backend:** Node.js / Express
- **Vectorization:** `nomic-embed-text` via Ollama
- **Reasoning Engine:** `Llama 3` (Local Inference)
- **Mathematical Core:** Cosine Similarity scoring

### How it works:
1. **Vectorization:** Attendee profiles (Role + Company + Intent) are converted into high-dimensional vectors.
2. **Similarity Scoring:** The engine calculates the angular distance between vectors using:
   $$\text{similarity} = \cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|}$$
3. **Explainable AI:** Llama 3 interprets the top matches to generate a "Strategic Thesis"—explaining *why* two specific people should meet.

## 🛡️ Privacy-First Architecture (The 2026 Standard)
For high-net-worth and institutional users, data privacy is non-negotiable. 
- **Local Inference:** By using **Ollama**, all LLM processing happens on-premise. 
- **Zero Cloud Leakage:** No attendee data is ever sent to third-party APIs (like OpenAI), ensuring 100% data sovereignty for Proof of Talk.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/nexus-ai-matchmaker.git](https://github.com/yourusername/nexus-ai-matchmaker.git)
