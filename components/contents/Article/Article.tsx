import { forwardRef, ReactNode, Ref } from "react";
import style from "./Article.module.css";

type ArticleProps = {
  children?: ReactNode;
};

const Article = forwardRef<HTMLDivElement, ArticleProps>(
  ({ children }: ArticleProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={style.wrapper}>
        {children}
      </div>
    );
  }
);

Article.displayName = "Article";

export default Article;
