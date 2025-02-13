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

async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

export async function getAllAccordionItems(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS}
    }`
  );
  return entries?.data;
}
