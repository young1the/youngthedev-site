import {forwardRef, memo, ReactNode, Ref} from "react";

type ArticleProps = {
    children?: ReactNode;
};

const Article = forwardRef<HTMLDivElement, ArticleProps>(
    ({children}: ArticleProps, ref: Ref<HTMLDivElement>) => {
        return (
            <div className="min-h-screen flex justify-center items-center p-4" ref={ref}>
                {children}
            </div>
        );
    }
);

Article.displayName = "Article";

export default memo(Article);
