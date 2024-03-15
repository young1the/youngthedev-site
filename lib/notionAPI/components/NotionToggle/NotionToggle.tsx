import { Page, TextContent } from "@/lib/notionAPI";
import NotionParagraph from "../NotionParagraph/NotionParagraph";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

interface NotionToggleProps {
  content: TextContent;
  toggleChildren: Page[];
}
const NotionToggle = ({ content, toggleChildren }: NotionToggleProps) => {
  return (
      <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
              <AccordionTrigger><NotionParagraph content={content}></NotionParagraph></AccordionTrigger>
              <AccordionContent>
                  {toggleChildren.map((ele,index) => (
                        <NotionParagraph key={index} content={ele.content as TextContent}></NotionParagraph>
                  ))}
              </AccordionContent>
          </AccordionItem>
      </Accordion>
  );
};

export default NotionToggle;
