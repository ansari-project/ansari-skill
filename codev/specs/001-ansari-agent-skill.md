# Spec 001: Ansari Agent Skill

## Status: Approved

## Background

The Ansari project provides an API for answering Islamic questions grounded in authentic sources (Quran, Hadith, classical scholarship). Previously, this was distributed as an MCP server (`ansari-mcp`) requiring a Node.js/TypeScript deployment on Vercel. The MCP approach is overkill — the entire functionality is a single HTTP POST to one endpoint returning a string.

The Agent Skills open standard (agentskills.io), launched Dec 2025 by Anthropic and adopted by OpenAI, Microsoft, Google, Cursor, and GitHub, provides a simpler, cross-platform alternative. A skill is just a folder with a `SKILL.md` file — no server infrastructure needed.

## Decision

Convert the Ansari distribution from MCP server to Agent Skill as the primary installation method. Keep the MCP server (`mcp.ansari.chat`) running but invest no further effort there.

## What Was Done (v1.0.0)

### Created

- `ansari/SKILL.md` — The skill definition following the agentskills.io specification:
  - YAML frontmatter with name, description, license, metadata, compatibility
  - Workflow instructions for calling the Ansari API
  - Guardrails: never improvise theology, preserve Arabic terms, fail clearly
  - Error handling: no fallbacks, clear error reporting
- `README.md` — Installation instructions for all major platforms
- `LICENSE` — MIT
- `.gitignore` — Standard exclusions

### API Endpoint

The skill instructs agents to call:

```
POST https://api.ansari.chat/api/v2/mcp-complete
Content-Type: application/json

{"messages": [{"role": "user", "content": "<question>"}]}
```

Response: plain string with the answer.

### Platform Coverage

| Platform | Installation Path |
|----------|------------------|
| Claude Code | `.claude/skills/ansari/` |
| VS Code / Copilot | `.vscode/skills/ansari/` |
| Cursor | `.agent/skills/ansari/` |
| ChatGPT / Codex | `.agent/skills/ansari/` |
| Gemini CLI | `.agent/skills/ansari/` |

## Resolved Questions

1. **API URL**: `https://api.ansari.chat` is the correct production endpoint. API docs at https://api.ansari.chat/docs#/default/mcp_complete_api_v2_mcp_complete_post
2. **Authentication**: No auth required currently. Will update the skill when/if auth is added.
3. **Marketplace listing**: Yes — announce and list as widely as possible once v1.0.0 is shipped.
4. **MCP deprecation timeline**: Not a priority. The MCP server continues running; no active deprecation effort planned.

## Consulted

- **Claude (Opus 4.5)**: Recommended conversion based on API simplicity and cross-platform reach of Agent Skills standard.
- **Codex (GPT-5.1)**: Agreed. Recommended keeping MCP as fallback, adding versioning, CI validation with `skills-ref`, and analytics via user-agent headers. Proposed a more detailed SKILL.md with escalation rules and troubleshooting.
- **Gemini**: Consultation failed (missing API key). To be retried.

## References

- [Agent Skills Specification](https://agentskills.io/specification)
- [Anthropic Skills GitHub](https://github.com/anthropics/skills)
- [Ansari MCP Server](https://github.com/ansari-project/ansari-mcp)
