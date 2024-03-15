import {forwardRef, memo, ReactNode, Ref} from "react";

type ArticleProps = {
    children?: ReactNode;
};

const Article = forwardRef<HTMLDivElement, ArticleProps>(
    ({children}: ArticleProps, ref: Ref<HTMLDivElement>) => {
        return (
            <div ref={ref}>
                {children}
            </div>
        );
    }
);

Article.displayName = "Article";

export default memo(Article);
