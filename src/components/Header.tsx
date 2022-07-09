import React from 'react';

import { ExperienceBar } from '@components/ExperienceBar';

export function Header(): JSX.Element {
  return (
    <>
      <a
        className='badgeStatus'
        href='https://github.com/caiohenrique-developer/moveit-web/tree/develop#-roadmap-gem'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i>🧬</i>
        <strong>OnGoing</strong>
        <i>🧬</i>
      </a>

      <ExperienceBar />
    </>
  );
}
