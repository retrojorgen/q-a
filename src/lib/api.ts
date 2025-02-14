// This seems to be the preffered way from Contentful to do GraphQL in next.js
// ref: https://www.contentful.com/blog/integrate-contentful-next-js-app-router/
// so I made an implementation. I think for readibility this is better than contentful.js.
// and since I am new to GraphQL this gives more insight.
// however contentful.js gives more compact code.

import { AccordionCollection } from '../types';

const POST_GRAPHQL_FIELDS = `
  accordionCollection {
    items {
      title
      accordionItemsCollection {
        items {
					text
          name
        }
      }
    }
  }
`;

interface GraphQLResponse {
  data: {
    accordionCollection: AccordionCollection;
  };
}

async function fetchGraphQL(query: string): Promise<GraphQLResponse> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
    }
  ).then((response) => response.json());
}

export async function getAllAccordionItems(): Promise<AccordionCollection> {
  const entries = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS}
    }`
  );
  return entries?.data?.accordionCollection as AccordionCollection;
}
