import React from 'react';
import styled from 'styled-components';
import { materialTheme } from '../../../../theme/material3';
import Section from './Section';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

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

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const TechChip = styled.span`
  background-color: ${materialTheme.colors.secondaryContainer};
  color: ${materialTheme.colors.onSecondaryContainer};
  padding: 4px 12px;
  border-radius: ${materialTheme.shape.corner.small};
  font-size: ${materialTheme.typography.labelMedium.fontSize};
  font-weight: 500;
`;

const PersonalProjects: React.FC = () => {
  return (
    <Section title="Detailed Personal Projects">
      <ProjectsGrid>
        <Card>
          <JobHeader>
            <JobTitle>Game Development Engine</JobTitle>
            <JobMeta>Passionate developer since age 12</JobMeta>
          </JobHeader>
          <p style={{ color: materialTheme.colors.onSurfaceVariant, fontSize: '14px', marginBottom: '12px' }}>
            Built custom 3D rendering engines and various games over several years.
          </p>
          <List>
            <ListItem>Coded a custom GUI Library and Basic Engine entirely from scratch.</ListItem>
            <ListItem>Developed for both Linux and Windows environments.</ListItem>
            <ListItem>Implemented multiple games published online.</ListItem>
          </List>
          <TechStackList>
            <TechChip>C++17 / C++98</TechChip>
            <TechChip>OpenGL</TechChip>
            <TechChip>SFML</TechChip>
            <TechChip>Boost</TechChip>
          </TechStackList>
        </Card>

        <Card>
          <JobHeader>
            <JobTitle>Web Applications (Verticplanner & FIRESIDE)</JobTitle>
            <JobMeta>SaaS and Personal Finance Apps</JobMeta>
          </JobHeader>
          <p style={{ color: materialTheme.colors.onSurfaceVariant, fontSize: '14px', marginBottom: '12px' }}>
            Development of an intelligent planner and a SaaS app for personal finance.
          </p>
          <List>
            <ListItem><strong>Verticplanner:</strong> Styled with Styled-Components, basic MySQL DB, deployed on Linux.</ListItem>
            <ListItem><strong>FIRESIDE:</strong> Styled with Emotion, used Sequelize ORM with MySQL.</ListItem>
            <ListItem><strong>Environment & Hosting:</strong> Self-hosted on a personal home server (Fedora Server with Apache and MySQLd) administered via SSH.</ListItem>
          </List>
          <TechStackList>
            <TechChip>React / Vite</TechChip>
            <TechChip>MySQL / Sequelize</TechChip>
            <TechChip>Styled-Components</TechChip>
            <TechChip>Emotion</TechChip>
            <TechChip>Linux / SSH</TechChip>
          </TechStackList>
        </Card>

        <Card>
          <JobHeader>
            <JobTitle>Mobile Development</JobTitle>
            <JobMeta>Published on Google Play Store</JobMeta>
          </JobHeader>
          <p style={{ color: materialTheme.colors.onSurfaceVariant, fontSize: '14px', marginBottom: '12px' }}>
            Developed and published mobile applications solving everyday problems.
          </p>
          <List>
            <ListItem><strong>Workout Tracker:</strong> For logging and analyzing workout sessions.</ListItem>
            <ListItem><strong>Compound Interest Calculator:</strong> To visualize the compound interest effect on investments.</ListItem>
            <ListItem>Previous experience building native Android applications using Java.</ListItem>
          </List>
          <TechStackList>
            <TechChip>React Native</TechChip>
            <TechChip>Java (Android)</TechChip>
          </TechStackList>
        </Card>
      </ProjectsGrid>
    </Section>
  );
};

export default PersonalProjects;
