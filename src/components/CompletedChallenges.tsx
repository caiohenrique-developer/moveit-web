import React from 'react';

import { useChallenges } from '@hooks/useChallenges';

import { Container } from '@styles/components/CompletedChallenges';

export function CompletedChallenges(): JSX.Element {
  const { challengesComplited } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesComplited}</span>
    </Container>
  );
}
