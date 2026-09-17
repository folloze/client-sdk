# Client SDK

## Getting started

```bash
git clone git@github.com:folloze/client-sdk.git
cd client-sdk
npm install
```

**Note:** Use `npm install` (NOT `pnpm`)

## Publishing locally to GitHub Packages

Publishing from your machine requires a GitHub Personal Access Token (PAT) with package write access.

### One-time setup

1. In GitHub, create a PAT:
   - Go to **GitHub -> Settings -> Developer settings -> Personal access tokens**
   - Create a token with at least the `write:packages` scope
2. Copy the token value and store it securely in your macOS Keychain:

```bash
security add-generic-password -a "$USER" -s GITHUB_PACKAGES_PAT -w "ghp_your_token_here"
```

### Steps to run on every publish

1. Export `GITHUB_TOKEN` from Keychain before publishing:

```bash
export GITHUB_TOKEN="$(security find-generic-password -a "$USER" -s GITHUB_PACKAGES_PAT -w)"
```

2. Publish the package:

```bash
npm publish
```