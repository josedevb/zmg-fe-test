# Zemoga Front-end test

Test repository -> https://github.com/zemoga/ui-test

Markup -> https://s3-us-west-2.amazonaws.com/zemoga-files/ui/candidates-test/test-ui-v2.png

Demo URL: https://zmg-fe-test-mrb4is2aw.vercel.app/en

## Stack

- Front-end
  - [React.js](https://es.reactjs.org/)
  - [Next.js](https://nextjs.org/)
  - [Styled-components](https://styled-components.com/)
  - [Framer-motion](https://www.framer.com/motion/)
  - [Jest](https://jestjs.io/)
- Backend
  - [Firebase](https://firebase.google.com/docs)
- Infrastructure
  - [Vercel](https://vercel.com/dashboard)

## Highlights

- Theme-friendly
- Real time data communication
- Internationalization (i18n)
- SEO (Server side Rendering)
- Unit testing
- Animated

## Requeriments

- Node >= 12.0.0

## Local configuration

1. yarn install
2. yarn dev
3. go to `http://localhost:3000/en`
4. See the magic

## Folder structure

Explanation of hierarchies in files and layers.

    zmg-fe-test/
      ├── public/
      │   ├── fonts/                       # Font asset folder
      │   ├── icons/                       # Icons asset Folder
      │   ├── images/                      # Images asset Folder
      |   └── locales/                     # Translations asset folder
      └── src/
          ├── __mocks__/                   # Mocked data for testing
          ├── __tests__/                   # Test folder
          ├── components/                  # Component Folder
          ├── config/
          |   ├── api/                     # Api Calls and requests third party
          |   ├── constants/               # Constants objects
          |   ├── firebase/                # Firebase setup method
          |   ├── styles/                  # Styles for grid and themes
          |   ├── utils/                   # Utilities methods
          |   └── lib/
          |       └── contexts             # React context provides
          ├── hooks/                       # Custom Hooks
          └── pages/                       # Screens folder for next.js

## Branches

- `main`
- `feature/create-page-markup` -> only markup
- `feature/add-interactions` -> with interactions

# License

MIT
