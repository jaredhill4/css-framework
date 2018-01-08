import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Title, Description } from './Framework';

const NotFound = ({ location }) =>
  <Section>
    <Title id="grid">Page not found</Title>
    <Description>
      <p>
        Looks like you've wandered off the path.{' '}
        <Link to="/">Let's go home</Link>.
      </p>
    </Description>
  </Section>;

export default NotFound;
