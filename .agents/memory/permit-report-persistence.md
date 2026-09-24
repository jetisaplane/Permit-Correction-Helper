---
name: Permit report persistence
description: Why the permit helper uses the pre-configured database instead of a second datastore
---

Use the workspace's managed PostgreSQL for permit analysis history, despite the original product brief naming SQLite.

**Why:** The later user request explicitly prefers the app's existing database. PostgreSQL was already provisioned in this workspace, so a second SQLite store would split persistence and risk losing reports when the app is restarted or published.

**How to apply:** Keep new report-related persistence in the existing managed database unless the user explicitly revisits the datastore choice. Treat development and published data as separate environments.