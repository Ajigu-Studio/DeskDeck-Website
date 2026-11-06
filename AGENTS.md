# DeskDeck Website Agent Guide

## Project Scope

This is the DeskDeck website, separate from the app checkout. Use the [README](README.md) for local development and the download contract.

## Required Constraints

- Push only when the user explicitly requests it for the current change.
- Preserve the published download contract and product links. Deployment and changes to remote artifacts require explicit authorization.
- Keep private environment values out of commits and logs.

## Verification

- Run `npm run lint` for app changes and `npm run build` for route, runtime, or delivery changes. Validate the affected page in a local preview for UI changes.

## Read for This Task

- Download metadata, links or delivery → the download contract in the README.
- Frontend layout → inspect the affected route and shared components before changing presentation.
