// @flow

import React, { type Node, useState, useEffect } from 'react';
import classnames from 'classnames';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  children: Node,
  collapsible: boolean,
  language: 'html' | 'javascript' | 'scss'
};

export default ({ collapsible = true, language, children }: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setCollapsed(collapsible);
  }, [collapsible]);

  function handleShowCode(event) {
    event.preventDefault();
    setCollapsed(false);
  }

  return (
    <figure
      className={classnames('example__code', {
        'example__code--collapsed': collapsed
      })}
    >
      {collapsed ? (
        <button
          type="button"
          className="example__code-toggle"
          onClick={handleShowCode}
        >
          &lt;/&gt; view code
        </button>
      ) : (
        <SyntaxHighlighter
          language={language}
          style={theme}
          showLineNumbers={false}
          customStyle={{ borderRadius: 0, padding: '1rem', margin: '0' }}
          className="framework__code"
          aria-hidden="true"
        >
          {children}
        </SyntaxHighlighter>
      )}
    </figure>
  );
};
