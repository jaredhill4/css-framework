// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Title, Description } from '../components';

export default () => (
  <Section>
    <Title id="grid">Page not found</Title>
    <Description>
      <p>
        Looks like you've wandered off the path.{' '}
        <Link to="/">Let's go home</Link>.
      </p>
    </Description>
  </Section>
);
