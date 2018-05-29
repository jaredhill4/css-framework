import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/light';
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import html from 'react-syntax-highlighter/languages/hljs/xml';
import scss from 'react-syntax-highlighter/languages/hljs/scss';
import { ocean as theme } from 'react-syntax-highlighter/styles/hljs';

registerLanguage('html', html);
registerLanguage('javascript', js);
registerLanguage('scss', scss);

class Code extends PureComponent {
  constructor(props) {
    super(props);
    this.handleShowCode = this.handleShowCode.bind(this);
    this.state = {
      collapsed: this.props.collapsible,
    };
  }

  render() {
    const { collapsed } = this.state;
    const { children, language } = this.props;
    return (
      <figure
        className={classnames('example__code', {
          'example__code--collapsed': collapsed,
        })}
      >
        {collapsed ? (
          <button
            type="button"
            className="example__code-toggle"
            // style={{
            //   backgroundColor: theme.hljs.background,
            //   color: theme.hljs.color,
            // }}
            onClick={this.handleShowCode}
          >
            &lt;/&gt; view code
          </button>
        ) : (
          <SyntaxHighlighter
            language={language}
            style={theme}
            showLineNumbers={false}
            customStyle={{ borderRadius: 0, padding: '1rem' }}
            className="framework__code"
            aria-hidden="true"
          >
            {children}
          </SyntaxHighlighter>
        )}
      </figure>
    );
  }

  handleShowCode(event) {
    event.preventDefault();
    this.setState({ collapsed: false });
  }
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
  collapsible: PropTypes.bool,
  language: PropTypes.oneOf(['html', 'javascript', 'scss']).isRequired,
};

Code.defaultProps = {
  collapsible: true,
};

export default Code;
