import React from "react";
import MarkdownComponent from "../components/markdown/MarkdownComponent";
import MDXComponent from "../components/markdown/MDXComponent";
import ExampleMDX from "../content/example.mdx";

const markdownText = `
# Markdown Example

This is a simple markdown example with **bold** and *italic* text.

## Features
- Easy to write
- Simple syntax
- Great for documentation

\`\`\`javascript
console.log("Hello from Markdown!");
\`\`\`
`;

function MarkdownDemo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Markdown and MDX Demo</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Markdown Example</h2>
        <MarkdownComponent markdownText={markdownText} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">MDX Example</h2>
        <MDXComponent>
          <ExampleMDX />
        </MDXComponent>
      </div>
    </div>
  );
}

export default MarkdownDemo;
