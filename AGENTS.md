> **Workspace context:** if this repo is checked out inside the Folloze
> `workspace` repo, also read `../AGENTS.md` (team-wide conventions: commit
> format, running services via flz-dev, secrets). This pointer exists because
> some agents (e.g. Cursor opened on this subdirectory only) do not discover
> parent-directory rules automatically; ignore if the file doesn't exist
> (standalone checkout).

# Client SDK

Shared JS SDK consumed by the other client apps. Part of the live-board client
family (live-board, designer, widgets, client-sdk).

## Rules

- **This repo is the only place client-sdk code is edited.** designer, live-board
  and widgets pin the published `@folloze/client-sdk` package (GitHub Packages)
  and bump it with their "Bump client-sdk" workflow after a release.
- Client repos work on `master`.
