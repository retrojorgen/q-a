// Fetches accordion data fron Contentful
// maps it onto the AccordionCollection type

import { createClient } from 'contentful';
import { AccordionCollection } from '../types';

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  space: process.env.CONTENTFUL_SPACE_ID || '',
});

export async function getAccordionData() {
  const response = await client.getEntries({
    content_type: 'accordion',
    include: 2,
  });

  // map to common type for accordionCollections
  return {
    items: [
      {
        title: response?.items?.[0]?.fields?.title,
        accordionItemsCollection: {
          items: response?.includes?.Entry?.map((entry) => ({
            name: entry?.fields?.name as string,
            text: entry?.fields?.text as string,
          })),
        },
      },
    ],
  } as AccordionCollection;
}
