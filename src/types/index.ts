export interface AccordionItem {
  name: string;
  text: string;
}

// makes the assumption that there might be more than one accordion in the future?

export interface AccordionCollection {
  items: [
    {
      title: string;
      accordionItemsCollection: {
        items: AccordionItem[];
      };
    }
  ];
}
