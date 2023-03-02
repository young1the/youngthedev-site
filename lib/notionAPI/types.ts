export type ArticleKeys = "seoul" | "wanted";

export type ArticleType = {
  [key in ArticleKeys]: string | undefined;
};

export type ParsedDataType = {
  type: BlockDataType;
  id: string;
  content: TextConentType | LinkPreviewType;
  children: ParsedDataType[] | null;
};

type StackType = {
  id: string;
  name: string;
};

export type PropertiesType = {
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

export type ProjectType = {
  id: string;
  url: string;
  properties: PropertiesType;
  cover: string;
};

export type TextConentType = {
  color: string;
  rich_text: RichTextType[];
};

export type LinkPreviewType = {
  url: string;
};

type BlockDataType =
  | "paragraph"
  | "link_preview"
  | "toggle"
  | "bulleted_list_item";

type RichTextType = {
  annotations: Annotation;
  plain_text: string;
};

type Annotation = {
  bold: boolean;
};
