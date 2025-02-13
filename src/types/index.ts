export interface AccordionItem {
  name: string,
  text: string,
}
export interface AccordionCollection {
  items: [
    {
      title: string,
      accordionItemsCollection: [accordionItem]
    }
  ]
}