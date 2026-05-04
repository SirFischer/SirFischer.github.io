import React from 'react';
import styled from 'styled-components';
import { materialTheme } from '../../../../theme/material3';
import Section from './Section';

const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  color: ${materialTheme.colors.onSurfaceVariant};
  font-size: ${materialTheme.typography.bodyMedium.fontSize};
  line-height: 1.6;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const CoreSkills: React.FC = () => {
  return (
    <Section title="Core Skills">
      <List>
        <ListItem>Proficient in JavaScript/TypeScript, C, C#, C++, PHP, HTML, and React</ListItem>
        <ListItem>Fluent in French, English, and Norwegian</ListItem>
        <ListItem>Excellent communication and problem-solving skills</ListItem>
      </List>
    </Section>
  );
};

export default CoreSkills;