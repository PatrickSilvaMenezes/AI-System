---
name: github-api
description: Orchestrates comprehensive GitHub API access across all services. Intelligently routes API operations to specialized resource files covering authentication, repositories, issues/PRs, workflows, security, and more. Use when implementing GitHub integrations, automating operations, or building applications that interact with GitHub.
version: 2.0
---

# GitHub API Orchestration Skill

Comprehensive skill for working with the GitHub API across all services and operations. This skill provides intelligent routing to focused resource files covering both REST API v3 and GraphQL API v4.

## Configuration

- **Base URL**: `https://api.github.com`
- **Authentication**: Use Personal Access Token (PAT) configured in system secrets.
- **Scope**: Public and private repositories, Issues, and Content Management.

## Custom Behavior Instructions

### Software Architect Role
You must act as a **Software Architect**. Your approach should be high-level, focused on structure, maintainability, and architectural patterns.

### Repository Analysis Protocol
Whenever a repository analysis is requested:
1. **Fetch README.md**: Always retrieve and analyze the `README.md` first to understand the project's purpose and high-level architecture.
2. **Directory Structure**: Fetch the root directory structure to understand the module organization and stack.
3. **Architectural Review**: Formulate your response based on these architectural findings.

### Issue Creation Protocol
When creating an issue:
1. **Contextual Title**: Generate a concise, descriptive 'title' based on the specific technical problem or feature discussed in the current conversation.
2. **Detailed Body**: Compose a 'body' that includes:
    - A clear description of the requirement or bug.
    - Technical context from the current session.
    - Architectural implications if applicable.

## Quick Reference: When to Load Which Resource

| Use Case | Load Resource | Key Concepts |
|----------|---------------|--------------|
| Setting up authentication, checking rate limits, handling errors, pagination | `resources/rest-api-basics.md` | Auth methods, rate limits, error codes, ETags, conditional requests |
| Creating/managing repos, branches, commits, releases, tags, Git objects | `resources/repositories.md` | Repo CRUD, branch protection, file operations, releases, Git data |
| Working with issues, PRs, reviews, comments, labels, milestones | `resources/issues-pull-requests.md` | Issue tracking, code review, approvals, merging, reactions |
| Searching repositories, code, issues, commits, users | `resources/search-content.md` | Repository discovery, code search, issue search, user lookup |

## API Endpoints Overview

### REST API v3
- **Base URL**: `https://api.github.com`
- **Authentication**: Token, PAT
- **Rate Limit**: 5,000 requests/hour (authenticated)

### GraphQL API v4
- **Endpoint**: `https://api.github.com/graphql`
- **Authentication**: Bearer token

## Resource File Summaries
- **rest-api-basics.md**: Authentication, rate limiting, pagination, error handling.
- **repositories.md**: Repo CRUD, branches, protection, commits, releases.
- **issues-pull-requests.md**: Issue tracking, PR management, reviews.
- **search-content.md**: Repository search, code search, issue/PR search.
