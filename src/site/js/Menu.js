import React, { Component } from 'react';

const navigation = [
  {
    name: 'Grid',
    id: 'grid',
    children: [
      { name: 'Gapless', id: 'grid-gapless' },
      { name: 'Vertical Alignment', id: 'grid-vertical-alignment' },
      { name: 'Horizontal Alignment', id: 'grid-horizontal-alignment' },
    ],
  },
  {
    name: 'Containers',
    id: 'containers',
  },
  {
    name: 'Typography',
    id: 'typography',
    children: [
      { name: 'Headings', id: 'typography-headings' },
      { name: 'Blockquote', id: 'typography-blockquote' },
      { name: 'Lists', id: 'typography-lists' },
      { name: 'Horizontal Rule', id: 'typography-horizontal-rule' },
      { name: 'Preformatted Text', id: 'typography-preformatted-text' },
      { name: 'Inline Elements', id: 'typography-inline-elements' },
    ],
  },
  {
    name: 'Buttons',
    id: 'buttons',
    children: [
      { name: 'Colors', id: 'buttons-colors' },
      { name: 'Outlined', id: 'buttons-outlined' },
      { name: 'Sizes', id: 'buttons-sizes' },
      { name: 'Link', id: 'buttons-link' },
      { name: 'Rounded', id: 'buttons-rounded' },
      { name: 'Block', id: 'buttons-block' },
    ],
  },
  {
    name: 'Forms',
    id: 'forms',
    children: [
      { name: 'Sizes', id: 'forms-sizes' },
      { name: 'Rounded', id: 'forms-rounded' },
      { name: 'Input group', id: 'forms-input-group' },
      { name: 'Input group sizes', id: 'forms-input-group-sizes' },
      { name: 'Input states', id: 'forms-input-states' },
    ],
  },
  {
    name: 'Tables',
    id: 'tables',
    children: [
      { name: 'Striped rows', id: 'tables-striped' },
      { name: 'Bordered', id: 'tables-bordered' },
      { name: 'Hoverable rows', id: 'tables-hover' },
      { name: 'Compact', id: 'tables-compact' },
      { name: 'Narrow', id: 'tables-narrow' },
      { name: 'Responsive', id: 'tables-responsive' },
    ],
  },
  {
    name: 'Notices',
    id: 'notices',
    children: [
      { name: 'Colors', id: 'notices-colors' },
      { name: 'Titles', id: 'notices-titles' },
      { name: 'Dismissible', id: 'notices-dismissible' },
    ],
  },
  {
    name: 'Modals',
    id: 'modals',
    children: [
      { name: 'Setup', id: 'modals-setup' },
      { name: 'Showing & Hiding', id: 'modals-showing-and-hiding' },
      { name: 'Sizes', id: 'modals-sizes' },
      { name: 'Vertical Alignment', id: 'modals-vertical-alignment' },
      { name: 'Listeners', id: 'modals-listeners' },
    ],
  },
  {
    name: 'Dropdowns',
    id: 'dropdowns',
    children: [
      { name: 'Setup', id: 'dropdowns-setup' },
      { name: 'Showing & Hiding', id: 'dropdowns-showing-hiding' },
      { name: 'Positioning', id: 'dropdowns-positioning' },
    ],
  },
  {
    name: 'Tooltips',
    id: 'tooltips',
  },
  {
    name: 'Utilities',
    id: 'utilities',
    children: [
      { name: 'Text & Link Color', id: 'utilities-text-color' },
      { name: 'Background Color', id: 'utilities-background-color' },
      { name: 'Borders', id: 'utilities-borders' },
      { name: 'Margins', id: 'utilities-margins' },
      { name: 'Padding', id: 'utilities-padding' },
      { name: 'Width', id: 'utilities-width' },
      { name: 'Floats', id: 'utilities-floats' },
      { name: 'Text Styles & Formatting', id: 'utilities-text-styles' },
      { name: 'Responsive Embeds', id: 'utilities-responsive-embeds' },
      { name: 'Display & Visibility', id: 'utilities-display' },
      {
        name: 'Responsive Utility Postfixes',
        id: 'utilities-responsive-postfixes',
      },
    ],
  },
];

class Menu extends Component {
  constructor() {
    super();
    this.scrollTo = this.scrollTo.bind(this);
  }

  renderNav(links) {
    if (links.length === 0) {
      return null;
    }

    return (
      <ul className="framework__nav">
        {links.map(link =>
          <li key={link.id}>
            <a
              onClick={event => this.scrollTo(event, link.id)}
              href={`#${link.id}`}
            >
              {link.name}
            </a>
            {link.hasOwnProperty('children') && link.children.length
              ? this.renderSubNav(link.children)
              : ''}
          </li>
        )}
      </ul>
    );
  }

  renderSubNav(links) {
    if (links.length === 0) {
      return null;
    }

    return (
      <ul>
        {links.map(link =>
          <li key={link.id}>
            <a
              onClick={event => this.scrollTo(event, link.id)}
              href={`#${link.id}`}
            >
              {link.name}
            </a>
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="framework__sidebar">
        <div className="container container--md">
          {this.renderNav(navigation)}
        </div>
      </div>
    );
  }

  scrollTo(event, elementId) {
    event.preventDefault();

    const { toggleMenu } = this.props;
    const el = document.getElementById(elementId);
    const yPos = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo(0, yPos);

    toggleMenu(event);
  }
}

export default Menu;
