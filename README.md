# Vue 3 Project Template

> ✨ Bootstrapped with Create Snowpack App (CSA).

This repository toward Vue 3 
- https://composition-api.vuejs.org/#summary

```
# Install
yarn global add degit
degit danhtran94/vue-project-template app-name
```

## Goals
- Good dev experiment like autocomlete, typecheck, fast bundle and dev.
- Lightweight but ready for realworld features required.
- Easy to contribute.
- No vendor lock-in with fw agnostic libs

## Status (researching)

- [x] Typescript TSX
- [x] Store with vue 3 global reactive/ref
- [x] Router with curi https://github.com/pshrmn/curi
- [x] i18n with lingui https://github.com/lingui/js-lingui
- [ ] HMR JSX
- [ ] Macro for Lingui

## Available Scripts

### yarn dev

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### (i18n) yarn add-locale [locale-name]

```
yarn add-locale vi
```
Add new language to your app

### (i18n) yarn extract

```
yarn extract
```

Looks for messages created by i18n lingui in the source files `src/` and extracts catalog that ready for translation in `src/locale/[locale-name]/messages.po`.

### (i18n) yarn compile

```
yarn compile
```

This command parses the messages in MessageFormat and compiles them into simple functions. It also adds plural rules to a production ready catalog in `src/locale/[locale-name]/messages.js` you can see how to use it in `src/locale/index.ts`

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" included when bundle production.

