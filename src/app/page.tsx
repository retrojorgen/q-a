import Image from "next/image";
import {getAllAccordionItems} from "../lib/api";
import { AccordionCollection } from "../types"

export default async function Home() {
  const accordionCollection = await getAllAccordionItems();
  console.log(items);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello
      {

      }
    </div>
  );
}
