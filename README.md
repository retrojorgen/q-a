## Simple Q&A application

Displays questions and answers for Nova Consulting Group created in Contentful.
Fetches results via GraphQL api, displays items in an accordion.

## To run application

- Run `yarn` to install required packages
- Start application with `yarn dev`

## Contentful data fetching

You can either use `lib/api.ts` or `lib/contentfuljs.ts`, they return the same data.

## other specifications

uses:

- Next.js
- Tailwind 3.4 (version 4.0 is out so should ideally upgrade)
- Shadcn/UI accordion (has great accessibility support)
- Supports dark mode if UI is set to dark mode

## To do

- Add tests for page.tsx
- Add button for toggling between dark and light mode
