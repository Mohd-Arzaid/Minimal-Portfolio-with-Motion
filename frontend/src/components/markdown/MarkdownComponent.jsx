import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownComponent({ markdownText }) {
  return (
    <div className="prose prose-slate max-w-none">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;
