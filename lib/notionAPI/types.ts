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
