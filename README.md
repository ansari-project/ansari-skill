# Ansari — Islamic Knowledge Agent Skill

An [Agent Skill](https://agentskills.io) that answers questions about Islamic theology, history, ethics, and practice using authentic sources (Quran, Hadith, classical scholars).

Works with Claude (web, desktop, and Code), GitHub Copilot, OpenAI Codex CLI, Cursor, Gemini CLI, and any platform supporting the [Agent Skills specification](https://agentskills.io/specification).

## Installation

### Claude.ai / Claude Desktop

1. Download [`ansari-skill.zip`](https://github.com/ansari-project/ansari-skill/releases/latest/download/ansari-skill.zip) from the latest release
2. Open **Settings > Capabilities > Skills**
3. Upload the zip file
4. Toggle the skill on

Ensure code execution is enabled in Settings > Capabilities.

### Claude Code

```bash
# Project-level
cp -r ansari/ .claude/skills/ansari/

# Or user-level (available in all projects)
cp -r ansari/ ~/.claude/skills/ansari/
```

### VS Code / GitHub Copilot

```bash
# Project-level (recommended)
mkdir -p .github/skills
cp -r ansari/ .github/skills/ansari/

# Or user-level
mkdir -p ~/.copilot/skills
cp -r ansari/ ~/.copilot/skills/ansari/
```

### OpenAI Codex CLI

```bash
# Project-level
mkdir -p .codex/skills
cp -r ansari/ .codex/skills/ansari/

# Or user-level
mkdir -p ~/.codex/skills
cp -r ansari/ ~/.codex/skills/ansari/
```

Restart Codex after installing. See [Codex Skills docs](https://developers.openai.com/codex/skills/).

### Cursor

```bash
mkdir -p .cursor/skills
cp -r ansari/ .cursor/skills/ansari/
```

### Gemini CLI

```bash
mkdir -p ~/.gemini/skills
cp -r ansari/ ~/.gemini/skills/ansari/
```

Enable skills in Gemini CLI: run `gemini`, type `/settings`, search for "Skills", toggle to `true`.

### Via OpenSkills (universal installer)

```bash
npx openskills install ansari-project/ansari-skill
npx openskills sync
```

### Any Agent Skills-compatible platform

Copy the `ansari/` directory into your platform's skills directory. The skill follows the open [Agent Skills specification](https://agentskills.io/specification).

## What It Does

When you ask an Islamic question, the skill instructs the AI agent to call the Ansari API — a service that provides answers grounded in the Quran, authentic Hadith collections, and classical Islamic scholarship.

The API requires no authentication and no API key.

## Examples

- "What are the five pillars of Islam?"
- "What does the Quran say about charity?"
- "Explain the concept of Tawheed"
- "What are the conditions for valid prayer?"

## Links

- [Ansari Chat](https://ansari.chat)
- [Ansari API Docs](https://api.ansari.chat/docs)
- [Agent Skills Standard](https://agentskills.io)

## License

MIT
