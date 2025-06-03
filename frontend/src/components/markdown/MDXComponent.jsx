import React from "react";
import { MDXProvider } from "@mdx-js/react";

function MDXComponent({ children }) {
  return (
    <div className="prose prose-slate max-w-none">
      <MDXProvider>{children}</MDXProvider>
    </div>
  );
}

export default MDXComponent;
