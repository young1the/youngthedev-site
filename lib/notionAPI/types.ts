import {
  PartialBlockObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type NotionData = {
  id: string;
  type: CMSBlockType;
  title: string;
  content: Page[] | Database[];
};

type CMSBlockType = "child_page" | "child_database";
type CMSBlockContent = {
  title: string;
};
export interface CMSBlock
  extends PartialBlockObjectResponse,
    Record<CMSBlockType, CMSBlockContent> {
  id: string;
  type: CMSBlockType;
}

type BlockDataType =
  | "paragraph"
  | "link_preview"
  | "toggle"
  | "bulleted_list_item"
  | "synced_block";
type RichTextType = {
  annotations: Annotation;
  plain_text: string;
};
type Annotation = {
  bold: boolean;
};
export type LinkPreviewType = {
  url: string;
};
export type TextContent = {
  color: string;
  rich_text: RichTextType[];
};
export type Page = {
  type: BlockDataType;
  id: string;
  content: TextContent | LinkPreviewType | Page[];
  children: Page[] | null;
};

type StackType = {
  id: string;
  name: string;
};
export type DatabaseProp = {
  description: { id: string; rich_text: RichTextType[] };
  period: {
    id: string;
    date: {
      start: string;
      end: string;
    };
  };
  stacks: {
    id: string;
    multi_select: StackType[];
  };
  이름: {
    title: RichTextType[];
  };
};
export type Database = {
  id: string;
  url: string;
  properties: DatabaseProp;
  cover: string;
};

export interface DatabaseResponse extends PartialPageObjectResponse {
  url: string;
  cover: { external: { url: string } };
  properties: DatabaseProp;
}

export interface BlockResponse
  extends PartialBlockObjectResponse,
    Record<BlockDataType, TextContent | LinkPreviewType | Page[]> {
  has_children: boolean;
  type: BlockDataType;
  id: string;
}
