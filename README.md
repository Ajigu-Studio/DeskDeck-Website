# DeskDeck Website

The official multilingual website and stable download entry point for DeskDeck.

## Local development

```sh
npm install
npm run dev
```

The website supports English, Simplified Chinese, Japanese, and Korean. The root route selects a
language from the browser preference. Visitors can change it from the navigation bar.

## Download contract

`/download` reads the release manifest from:

```text
https://downloads.ajigu.com/deskdeck/latest.json
```

Set `DESKDECK_RELEASE_MANIFEST_URL` to override this URL for development or staging. The endpoint
redirects only when the manifest declares a notarized release and its download URL uses HTTPS on
`downloads.ajigu.com`. Otherwise, it returns the visitor to a localized unavailable state.

The DeskDeck app repository owns release creation and R2 publication. This repository never stores
DMG artifacts or signing credentials.
