import React from 'react';
import styled from 'styled-components';
import { materialTheme } from '../../../../theme/material3';
import Section from './Section';

const Card = styled.div`
  background-color: ${materialTheme.colors.surfaceContainerLowest};
  border-radius: ${materialTheme.shape.corner.medium};
  padding: 24px;
  border: 1px solid ${materialTheme.colors.surfaceVariant};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${materialTheme.colors.primary};
  }
`;

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

const TechnicalCompetencies: React.FC = () => {
  return (
    <Section title="Technical Competencies">
      <Card>
        <List style={{ listStyleType: 'none', padding: 0 }}>
          <ListItem><strong>Languages:</strong> TypeScript, JavaScript, C++, C#, C, PHP</ListItem>
          <ListItem><strong>Backend:</strong> .NET 8.0, Node.js</ListItem>
          <ListItem><strong>Frontend:</strong> React, Vite, Storybook, AngularJS, HTML5, jQuery</ListItem>
          <ListItem><strong>Mobile:</strong> React Native</ListItem>
          <ListItem><strong>Database:</strong> MSSQL, MySQL</ListItem>
          <ListItem><strong>Styling:</strong> SASS/SCSS, Styled-Components, Emotion</ListItem>
          <ListItem><strong>Tools:</strong> Git, GitHub, Azure DevOps, Jest, VS Code, Linux</ListItem>
        </List>
      </Card>
    </Section>
  );
};

export default TechnicalCompetencies;