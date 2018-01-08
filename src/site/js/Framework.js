import React, { Component } from 'react';
import classnames from 'classnames';
import code from '../../framework/js/code';

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
  <h3 id={id} className="h3 framework__subtitle">
    {children}
  </h3>;

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

class Code extends Component {
  componentDidMount() {
    code(this.pre);
  }

  render() {
    return (
      <pre
        className={`language-${this.props.language}`}
        data-code
        data-code-language={this.props.language}
        ref={pre => {
          this.pre = pre;
        }}
      >
        {this.props.children}
      </pre>
    );
  }
}

export { Section, Title, SubTitle, Description, Example, ExampleView, Code };
