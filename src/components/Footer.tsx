import React from 'react';

import Link from 'next/link';

import { Container } from '@styles/components/Footer';

export const Footer = (): JSX.Element => {
  const appCreatedAt = new Date('2021-06-01').getFullYear();
  const currentYear = new Date().getFullYear();
  const year =
    currentYear > appCreatedAt
      ? `${appCreatedAt} - ${currentYear}`
      : currentYear;

  return (
    <Container>
      <p>
        Copyright &copy; {year} Move.It, done with ☕ by:{' '}
        <Link href='https://github.com/caiohenrique-developer/moveit-web'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a target='_blank' rel='noreferrer'>
            caiohenrique-developer
          </a>
        </Link>
        .
      </p>
    </Container>
  );
};
