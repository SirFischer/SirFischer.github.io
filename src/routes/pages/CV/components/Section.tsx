import React from 'react';
import styled from 'styled-components';
import { materialTheme } from '../../../../theme/material3';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  color: ${materialTheme.colors.primary};
  font-size: ${materialTheme.typography.titleLarge.fontSize};
  text-transform: uppercase;
  border-bottom: 2px solid ${materialTheme.colors.primaryContainer};
  padding-bottom: 8px;
`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Section>
  );
};

export default SectionComponent;