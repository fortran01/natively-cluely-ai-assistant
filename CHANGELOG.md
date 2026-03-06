# Changelog

## [2.0.1] - 2026-03-06 (Includes 2.0.0 Features)

### Major Premium Features

- **Profile Intelligence Engine**: Introduced core JD awareness and deep Resume context. The AI now actively understands your exact career history and dynamically adapts to the specific job description you are interviewing for.
- **Profile Engine UI Overhaul**: Radically redesigned the premium Profile Engine UI with a mature, Apple-like minimalist aesthetic, complete with premium motion and glassmorphism.

### Intelligence & Core Upgrades

- **Live Meeting RAG Integration**: Added deep Retrieval-Augmented Generation directly into live meetings. It instantly pulls facts and context from your current and past history as the meeting unfolds.
- **Next-Gen Windows Audio Capture**: Re-engineered system audio selection for Windows, resolving longstanding WASAPI compatibility issues for flawlessly reliable zero-drop transcriptions.
- **Apple Premium Dark Code Blocks**: Code snippets in the UI now render with a sleek Apple Premium Dark aesthetic, preserving critical whitespace for language-less and inline blocks.
- **Markdown Rendering**: Improved readability and stability across chat output via strict syntax highlighting.

### 🛠 Improvements & Fixes

- **Merged PR Integrations**: Successfully merged 3 major pull requests, streamlining repository contributions.
- **Comprehensive Bug Fixes**: Resolved critical SQLite embedding indexing constraint errors, fixed ad-dismissal cooldowns, and handled dependency conflicts for a more stable application.
- **Production Enhancements**: Fixed Native module compilation and packaging for smoother application delivery, alongside adding correct Windows build icons.

## [1.1.6] - 2026-02-15

### New Features

- **Speech Providers**: Added support for multiple speech providers including Google, Groq, OpenAI, Deepgram, ElevenLabs, Azure, and IBM Watson.
- **Fast Response Mode**: Introduced ultra-fast text responses using Groq Llama 3.
- **Local RAG & Memory**: Full offline vector retrieval for past meetings using SQLite.
- **Custom Key Bindings**: Added ability to customize global shortcuts for easier control.
- **Stealth Mode Improvements**: Enhanced disguise modes (Terminal, Settings, Activity Monitor) for better privacy.
- **Markdown Support**: Improved Markdown rendering in the Usage section for better readability of AI responses.
- **Image Processing**: Integrated `sharp` for optimized image handling and faster analysis.

### Improvements & Fixes

- Fixed various UI bugs and focus stealing issues.
- Improved application stability and performance.

## [1.1.5] - 2026-02-13

### Summary

The Stealth & Intelligence Update: Enhances stealth capabilities, expands AI provider support, and improves local AI integration.

### What's New

- **Native Speech Provider Support:** Added Deepgram, Groq, and OpenAI speech providers.
- **Custom LLM Providers:** Connect to any OpenAI-compatible API including OpenRouter and DeepSeek.
- **Smart Local AI:** Auto-detection of available Ollama models for local AI.
- **Global Spotlight Search:** Toggle chat overlay with Cmd+K (macOS) and Ctrl+K (Windows/Linux).
- **Masquerading Mode:** Appear as system processes like Terminal or Activity Monitor.
- **Improved Stealth Mode:** Enhanced activation and window focus transitions.

### Improvements

- **Natural Responses:** Updated system prompts for more concise and natural responses.
- **Conversational Logic:** Reduced robotic preambles and unnecessary explanations.
- **Performance:** Improved UI scaling and reduced speech-to-text latency.

### Fixes

- No critical fixes reported in this release.

### Technical

- Internal logic refinements for improved conversational flow.
- Updater and background process stability improvements.

#### macOS Installation (Unsigned Build)

If you see "App is damaged":

1. Move the app to your Applications folder.
2. Open Terminal and run: `xattr -cr /Applications/Natively.app`

## [1.1.4] - 2026-02-12

### What's New in v1.1.4

- **Custom LLM Providers:** Connect to any OpenAI-compatible API (OpenRouter, DeepSeek, commercial endpoints) simply by pasting a cURL command.
- **Smart Local AI:** Enhanced Ollama integration that automatically detects and lists your available local models—no configuration required.
- **Refined Human Persona:** Major updates to system prompts (`prompts.ts`) to ensure responses are concise, conversational, and indistinguishable from a real candidate.
- **Anti-Chatbot Logic:** Specific negative constraints to prevent "AI-like" lectures, distinct "robot" preambles, and over-explanation.
- **Global Spotlight Search:** Access AI chat instantly with `Cmd+K` / `Ctrl+K`.
- **Masquerading (Undetectable Mode):** Stealth capability to disguise the app as common utility processes (Terminal, Activity Monitor) for discreet usage.
