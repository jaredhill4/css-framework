import React from 'react';
import { Link } from 'react-static';
import { Section, Title, Description } from '../components/Framework';

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
