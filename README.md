[![Netlify Status](https://api.netlify.com/api/v1/badges/70e8c99f-5170-49c6-bae2-f9c7bf7f6c11/deploy-status)](https://app.netlify.com/sites/webiblia/deploys)

# WeBiblia

WeBiblia is a Bible webapp implemented for study purposes.

***

<div align="center">
  <img  height="300" src="/preview/desktop.gif">
  <img  height="300" src="/preview/mobile.gif">
</div>

#### Motivations

- Implement a very cool [Restful API](https://bibleapi.co/) from the Bible.

* Learn more about design patterns and typescript with React Js.
* Implement night mode with [styled-components](https://styled-components.com/)! :)
* Stored application state with [redux-persist](https://www.npmjs.com/package/redux-persist).
* A cool application for my github

##### You can run this project

On folder of this project run the commands below.

#### `yarn`

To resolve the dependencies.

#### `yarn start`

To run the app in development mode.

#### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.

##### Folders and files structure

> The folder structure used is known as Rails-Style Structure (function-first organization) with one index file per feature folder slightly inspired by [Destiny: Prettier for File Structures](https://github.com/benawad/destiny):

```bash
.
├── actions
│   ├── bibile.ts
│   ├── index.ts
│   └── utils.ts
├── App.test.tsx
├── assets
│   ├── 404_DARK.json
│   └── 404_LIGHT.json
├── components
│   ├── backbutton
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── container
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── divider
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── index.ts
│   ├── loading
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── optionscard
│   │   ├── index.tsx
│   │   └── style.ts
│   └── topbar
│       ├── index.tsx
│       └── style.ts
├── constants
│   ├── endpoints.ts
│   ├── index.ts
│   └── routenames.ts
├── containers
│   ├── App
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── book
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── books
│   │   ├── bookitem
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── holytext
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── index.ts
│   └── nomatch
│       ├── index.tsx
│       └── style.ts
├── index.tsx
├── modules
│   ├── api.ts
│   └── bookshelpers.ts
├── mooks
│   └── books.json
├── react-app-env.d.ts
├── reducers
│   ├── bible.ts
│   ├── index.ts
│   └── utils.ts
├── routes
│   ├── bookroute
│   │   └── index.tsx
│   ├── booksroute
│   │   └── index.tsx
│   ├── holytextroute
│   │   └── index.tsx
│   ├── index.jsx
│   └── nomatchroute
│       └── index.tsx
├── serviceWorker.ts
├── setupTests.ts
├── store
│   └── index.ts
└── themes
    ├── index.ts
    └── styled.d.ts

```
