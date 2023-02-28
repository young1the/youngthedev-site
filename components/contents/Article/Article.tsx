import React, { forwardRef } from "react";

const Article = forwardRef(({ color }: any, ref: any) => {
  return (
    <div ref={ref} style={{ height: "200vh", borderTop: `8px solid red` }}>
      Article
    </div>
  );
});

export default Article;
