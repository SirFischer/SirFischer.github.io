import React from 'react';
import styled, { keyframes } from 'styled-components';
import { materialTheme } from '../../../theme/material3';
import profileImage from '../../../assets/cv_profile.jpeg';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 32px;
  animation: ${fadeInUp} ${materialTheme.motion.duration.medium4} ${materialTheme.motion.easing.emphasizedDecelerate};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${materialTheme.colors.primaryContainer};
  color: ${materialTheme.colors.onPrimaryContainer};
  padding: 40px;
  border-radius: ${materialTheme.shape.corner.large};
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${materialTheme.typography.displayMedium.fontSize};
  font-weight: 700;
  line-height: ${materialTheme.typography.displayMedium.lineHeight};
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: ${materialTheme.typography.headlineMedium.fontSize};
  color: ${materialTheme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${materialTheme.colors.surfaceVariant};
  border: 4px solid ${materialTheme.colors.primary};
  object-fit: cover;
  box-shadow: ${materialTheme.elevation.level2};
  font-size: 14px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

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

const CV = () => {
  return (
    <Container>
      <Header>
        <HeaderText>
          <Title>Marek Fischer</Title>
          <Subtitle>Software Engineer</Subtitle>
        </HeaderText>
        <ProfileImage src={profileImage} alt="Marek Fischer Profile" />
      </Header>

      <ContentGrid>
        <Column>
          <Section>
            <SectionTitle>Personal Summary</SectionTitle>
            <p style={{ color: materialTheme.colors.onSurfaceVariant, lineHeight: 1.6 }}>
              Passionate software engineer with a strong foundation in multiple technologies and a drive to innovate in new environments. With a proven track record of delivering impactful solutions, I'm dedicated to continuous learning and contributing to high-quality software development.
            </p>
          </Section>

          <Section>
            <SectionTitle>Contact Info</SectionTitle>
            <List style={{ listStyleType: 'none', padding: 0 }}>
              <ListItem><strong>Address:</strong> Mellomgata 9, 4013 Stavanger</ListItem>
              <ListItem><strong>Phone:</strong> +4792068938</ListItem>
              <ListItem><strong>Email:</strong> marek5886@hotmail.com</ListItem>
              <ListItem><strong>Website:</strong> https://deepvertic.com</ListItem>
              <ListItem><strong>Github:</strong> https://github.com/SirFischer</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Core Skills</SectionTitle>
            <List>
              <ListItem>Proficient in JavaScript/TypeScript, C, C#, C++, PHP, HTML, and React</ListItem>
              <ListItem>Fluent in French, English, and Norwegian</ListItem>
              <ListItem>Excellent communication and problem-solving skills</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Technical Competencies</SectionTitle>
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

          <Section>
            <SectionTitle>Academic Background</SectionTitle>
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
        </Column>

        <Column>
          <Section>
            <SectionTitle>Professional Experience</SectionTitle>
            
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
        </Column>
      </ContentGrid>

      <Section style={{ marginTop: '24px' }}>
        <SectionTitle>Detailed Personal Projects</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
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
        </div>
      </Section>
    </Container>
  );
};

export default CV;