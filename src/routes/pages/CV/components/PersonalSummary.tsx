import React from 'react';
import styled from 'styled-components';
import { materialTheme } from '../../../../theme/material3';
import Section from './Section';

const SummaryText = styled.p`
  color: ${materialTheme.colors.onSurfaceVariant};
  line-height: 1.6;
`;

const PersonalSummary: React.FC = () => {
  return (
    <Section title="Personal Summary">
      <SummaryText>
        Passionate software engineer with a strong foundation in multiple technologies and a drive to innovate in new environments. With a proven track record of delivering impactful solutions, I'm dedicated to continuous learning and contributing to high-quality software development.
      </SummaryText>
    </Section>
  );
};

export default PersonalSummary;