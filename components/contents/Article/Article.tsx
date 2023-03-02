import { forwardRef } from "react";
import style from "./Article.module.css";

const Article = forwardRef(({ children }: any, ref: any) => {
  return (
    <div ref={ref} className={style.wrapper}>
      {children}
    </div>
  );
});

export default Article;
