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
  margin-bottom: 16px;

  &:hover {
    border-color: ${materialTheme.colors.primary};
  }
`;

const JobHeader = styled.div`
  margin-bottom: 12px;
`;

const JobTitle = styled.h4`
  margin: 0;
  font-size: ${materialTheme.typography.titleMedium.fontSize};
  color: ${materialTheme.colors.onSurface};
`;

const JobMeta = styled.p`
  margin: 4px 0 0 0;
  font-size: ${materialTheme.typography.bodyMedium.fontSize};
  color: ${materialTheme.colors.primary};
  font-weight: 500;
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

const AcademicBackground: React.FC = () => {
  return (
    <Section title="Academic Background">
      <Card style={{ marginBottom: '16px' }}>
        <JobHeader>
          <JobTitle>School 42 (Paris)</JobTitle>
          <JobMeta>Software Engineering | 2018 - 2020</JobMeta>
        </JobHeader>
        <List>
          <ListItem>Completed intensive courses in various technologies.</ListItem>
          <ListItem>Developed a highly optimized 3D rendering engine from scratch.</ListItem>
        </List>
      </Card>
      <Card style={{ marginBottom: '16px' }}>
        <JobHeader>
          <JobTitle>Noroff (Online)</JobTitle>
          <JobMeta>Frontend Web Development | 2019 - 2022</JobMeta>
        </JobHeader>
        <List>
          <ListItem>Designed and implemented multiple websites using various technologies and React applications.</ListItem>
        </List>
      </Card>
      <Card>
        <JobHeader>
          <JobTitle>Noroff (Online)</JobTitle>
          <JobMeta>Professional Degree in Back-end Development 1 | 2024 - June 2025</JobMeta>
        </JobHeader>
        <List>
          <ListItem>Completed a one-year intensive program focusing on scalable backend technologies.</ListItem>
        </List>
      </Card>
    </Section>
  );
};

export default AcademicBackground;