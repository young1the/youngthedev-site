import { memo } from "react";
import NotionLink from "../../components/NotionLink/NotionLink";
import NotionParagraph from "../../components/NotionParagraph/NotionParagraph";
import NotionToggle from "../../components/NotionToggle/NotionToggle";
import style from "./NotionPageRenderer.module.css";
import {
  LinkPreviewType,
  ParsedDataType,
  TextConentType,
} from "@/lib/notionAPI/types";

interface NotionPageRendererProps {
  notionPageContents: ParsedDataType[];
}

const NotionPageRenderer = ({
  notionPageContents,
}: NotionPageRendererProps) => {
  return (
    <div className={style.wrapper}>
      {notionPageContents.map((ele: ParsedDataType) => {
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

export default memo(NotionPageRenderer);
