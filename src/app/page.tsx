import { getAllAccordionItems } from '../lib/api';
// use contentful instead if you wish, it returns the same data type "AccordionCollection"
//import { getAccordionData } from "../lib/contentfuljs"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default async function Home() {
  const accordionCollection = await getAllAccordionItems();
  // use contentful instead if you wish, it returns the same data type "AccordionCollection"
  //const accordionData = await getAccordionData();

  // using the assumption that there might be multiple accordions in the future
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {accordionCollection.items?.map((collection, key) => (
        <section className="w-full" key={key}>
          <h1 className=" text-heading text-4xl lg:text-7xl font-semibold mb-8">
            {collection.title}
          </h1>
          <div className="text-base lg:text-2xl">
            <Accordion type="single" collapsible>
              {collection.accordionItemsCollection?.items?.map(
                (item, key) => (
                  <AccordionItem value={'item' + key + 1} key={key}>
                    <AccordionTrigger>{item.name}</AccordionTrigger>
                    <AccordionContent>{item.text}</AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
        </section>
      ))}
    </div>
  );
}
