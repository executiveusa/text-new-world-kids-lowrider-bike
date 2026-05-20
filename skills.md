# Skills & Tooling Playbook for Future Agents

This file captures all skills/tools referenced or used in this project conversation so future agents can reuse a consistent workflow.

## Built-in Codex skills available in this environment
- `imagegen` — generate/edit raster visual assets.
- `openai-docs` — OpenAI official docs lookup workflow.
- `plugin-creator` — scaffold codex plugins.
- `skill-creator` — author/update custom skills.
- `skill-installer` — install skills into Codex home.

## External skills/tools requested in this project
- `jcodemunch-mcp` (https://github.com/jgravelle/jcodemunch-mcp)
  - Use for token-efficient code/context extraction and focused analysis.
- `agent-browser` (https://github.com/vercel-labs/agent-browser)
  - Use for browser-driven verification, site walkthroughs, and visual QA.
- `oh-my-codex` (https://github.com/Yeachan-Heo/oh-my-codex)
  - Skill collection and agent workflows.
- `impeccable` (https://github.com/pbakaus/impeccable)
  - UX/UI critique and polishing workflow.
- `taste-skill` (https://github.com/Leonxlnx/taste-skill)
  - Premium visual direction and styling heuristics.

## Best-fit skill stack for this Next.js campaign site
Primary (install globally):
1. `taste-skill`
2. `impeccable`
3. `minimalist-skill` (from oh-my-codex)
4. `redesign-skill` (from oh-my-codex)

Secondary (project-local or task-based):
1. `stitch-skill` (section composition)
2. `brandkit` (branding consistency)
3. `output-skill` (presentation/hand-off quality)
4. `imagegen-frontend-web` (asset generation when needed)

## Suggested workflow for future agents
1. **Diagnose quickly** with `jcodemunch-mcp` to gather only relevant context.
2. **Design pass** with `minimalist-skill` + Krug-inspired clarity checks.
3. **Polish pass** with `taste-skill` / `impeccable` for hierarchy, spacing, motion, contrast.
4. **Verification** with `agent-browser` screenshots and interaction tests.
5. **Deployment** with Vercel CLI (`vercel --prod`) and monitor until complete.

## Vercel deployment notes
- Project ID requested by user: `prj_uCjAUcoQqdbrqZyree0RydI7t9Z7`.
- Link command:
  ```bash
  vercel link --project prj_uCjAUcoQqdbrqZyree0RydI7t9Z7
  ```
- Production deploy command:
  ```bash
  vercel --prod
  ```
- If deploy fails with auth/token errors, run `vercel login` and retry.
