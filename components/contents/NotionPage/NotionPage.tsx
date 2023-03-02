import NotionLink from "@/components/text/NotionLink/NotionLink";
import NotionParagraph from "@/components/text/NotionParagraph/NotionParagraph";
import NotionToggle from "@/components/text/NotionToggle/NotionToggle";
import style from "./NotionPage.module.css";
import { memo } from "react";
import {
  LinkPreviewType,
  ParsedDataType,
  TextConentType,
} from "@/lib/notionAPI/types";

const NotionPage = ({ list }: any) => {
  return (
    <div className={style.wrapper}>
      {list.map((ele: ParsedDataType) => {
        switch (ele.type) {
          case "paragraph":
            return (
              <NotionParagraph
                key={ele.id}
                content={ele.content as TextConentType}
              />
            );
          case "link_preview":
            return (
              <NotionLink
                key={ele.id}
                content={ele.content as LinkPreviewType}
              />
            );
          case "toggle":
            return (
              <NotionToggle
                key={ele.id}
                content={ele.content as TextConentType}
                children={ele.children as ParsedDataType[]}
              />
            );
        }
      })}
    </div>
  );
};

export default memo(NotionPage);
