# Ansari — Islamic Knowledge Agent Skill

An [Agent Skill](https://agentskills.io) that answers questions about Islamic theology, history, ethics, and practice using authentic sources.

## Installation

### Claude Code

```bash
# Copy the skill to your project
cp -r ansari/ .claude/skills/ansari/

# Or install globally
cp -r ansari/ ~/.claude/skills/ansari/
```

### VS Code / GitHub Copilot

```bash
cp -r ansari/ .vscode/skills/ansari/
```

### Cursor

```bash
cp -r ansari/ .agent/skills/ansari/
```

### ChatGPT / Codex CLI

```bash
cp -r ansari/ .agent/skills/ansari/
```

### Any Agent Skills-compatible platform

Copy the `ansari/` directory into your platform's skills directory. The skill follows the open [Agent Skills specification](https://agentskills.io/specification).

## What It Does

When you ask an Islamic question, the skill instructs the AI agent to call the Ansari API — a service that provides answers grounded in the Quran, authentic Hadith collections, and classical Islamic scholarship.

## Examples

- "What are the five pillars of Islam?"
- "What does the Quran say about charity?"
- "Explain the concept of Tawheed"
- "What are the conditions for valid prayer?"

## Links

- [Ansari Chat](https://ansari.chat)
- [Agent Skills Standard](https://agentskills.io)
- [Ansari MCP Server](https://github.com/ansari-project/ansari-mcp) (legacy)

## License

MIT
