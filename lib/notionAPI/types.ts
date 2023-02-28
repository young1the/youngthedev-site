export type getArticleParam = "seoul" | "wanted";

export type ArticleType = {
  [key in getArticleParam]: string | undefined;
};
