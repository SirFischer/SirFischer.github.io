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

const ProfessionalExperience: React.FC = () => {
  return (
    <Section title="Professional Experience">
      <Card>
        <JobHeader>
          <JobTitle>Full-stack Developer</JobTitle>
          <JobMeta>Acos AS | 2021 - Present</JobMeta>
        </JobHeader>
        <p style={{ fontStyle: 'italic', color: materialTheme.colors.onSurfaceVariant, fontSize: '14px', marginBottom: '12px' }}>
          Development and maintenance of a large CMS for Norwegian municipalities.
        </p>
        <List>
          <ListItem><strong>Modernization:</strong> Led the strategic transition from AngularJS to React in the CMS administrative interface.</ListItem>
          <ListItem><strong>Component library:</strong> Mainly responsible for the maintenance and further development of the company's central React component library.</ListItem>
          <ListItem><strong>Innsyn:</strong> Further developed the core system used by a majority of Norwegian municipalities for political case processing.</ListItem>
          <ListItem><strong>DRUM:</strong> Architect (frontend) and developer of a real-time collaboration solution to validate published data.</ListItem>
          <ListItem><strong>AI & Agentic Workflows:</strong> Created a custom MCP server with 10+ tools (including code/endpoint discovery, authenticated API calls, direct SQL access, and translation variable management). Designed "skills" for the team's agentic workflow, resulting in widespread colleague praise for significantly accelerating development speed.</ListItem>
        </List>
        <TechStackList>
          <TechChip>React</TechChip>
          <TechChip>.NET 8.0</TechChip>
          <TechChip>Redux</TechChip>
          <TechChip>SignalR</TechChip>
          <TechChip>Storybook</TechChip>
          <TechChip>MCP / AI</TechChip>
        </TechStackList>
      </Card>

      <Card>
        <JobHeader>
          <JobTitle>C++ Developer</JobTitle>
          <JobMeta>Koncept (Mission for Sopra Steria/Airbus, Toulouse) | 2021</JobMeta>
        </JobHeader>
        <p style={{ fontStyle: 'italic', color: materialTheme.colors.onSurfaceVariant, fontSize: '14px', marginBottom: '12px' }}>
          Development on various projects at Airbus in Toulouse, working in an international team (French/English).
        </p>
        <List>
          <ListItem><strong>Communication Test Tool:</strong> Maintained and further developed a C++/Qt-based tool for testing communication between ground stations and aircraft (ATSU).</ListItem>
        </List>
        <TechStackList>
          <TechChip>C++98</TechChip>
          <TechChip>C</TechChip>
          <TechChip>Qt</TechChip>
          <TechChip>Boost</TechChip>
        </TechStackList>
      </Card>

      <Card>
        <JobHeader>
          <JobTitle>Lead Developer & Cofounder</JobTitle>
          <JobMeta>Realyste (Paris) | 2019 - 2021</JobMeta>
        </JobHeader>
        <p style={{ fontStyle: 'italic', color: materialTheme.colors.onSurfaceVariant, fontSize: '14px', marginBottom: '12px' }}>
          Development of websites and internal tools for a variety of clients. Co-founder responsible for full project lifecycle.
        </p>
        <List>
          <ListItem>Developed tailor-made CMS tools for clients.</ListItem>
          <ListItem>Built custom REST APIs to integrate different systems.</ListItem>
          <ListItem>Administered hosting for client projects on virtual servers (Proxmox, OVH).</ListItem>
        </List>
        <TechStackList>
          <TechChip>PHP</TechChip>
          <TechChip>HTML/JS</TechChip>
          <TechChip>MySQL</TechChip>
          <TechChip>WordPress</TechChip>
        </TechStackList>
      </Card>
    </Section>
  );
};

export default ProfessionalExperience;