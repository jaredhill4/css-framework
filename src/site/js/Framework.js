import React from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/light';
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import html from 'react-syntax-highlighter/languages/hljs/xml';
import scss from 'react-syntax-highlighter/languages/hljs/scss';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import classnames from 'classnames';

registerLanguage('html', html);
registerLanguage('javascript', js);
registerLanguage('scss', scss);

const Section = ({ children, id = '', container = true }) => {
  const containerClassNames = classnames({
    'container container--md': container,
  });
  return (
    <section id={id} className="framework__section">
      <div className={containerClassNames}>
        {children}
      </div>
    </section>
  );
};

const Title = ({ children, id = '' }) =>
  <h2 id={id} className="h1 framework__title">
    {children}
  </h2>;

const SubTitle = ({ children, id = '' }) =>
  <div>
    <hr />
    <h3 id={id} className="h3 framework__subtitle">
      {children}
    </h3>
  </div>;

const Description = ({ children }) =>
  <div className="framework__description">
    {children}
  </div>;

const Example = ({ children }) =>
  <div className="example">
    {children}
  </div>;

const ExampleView = ({ children }) =>
  <div className="example__view">
    {children}
  </div>;

const Code = ({ children, language }) =>
  <SyntaxHighlighter
    language={language}
    style={ocean}
    showLineNumbers={false}
    customStyle={{ borderRadius: 0, padding: '1rem' }}
    className="framework__code"
  >
    {children}
  </SyntaxHighlighter>;

export { Section, Title, SubTitle, Description, Example, ExampleView, Code };
