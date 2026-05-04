import React from 'react';
import styled, { keyframes } from 'styled-components';
import { materialTheme } from '../../../theme/material3';
import profileImage from '../../../assets/cv_profile.jpeg';
import CVHeader from './components/CVHeader';
import PersonalSummary from './components/PersonalSummary';
import CoreSkills from './components/CoreSkills';
import TechnicalCompetencies from './components/TechnicalCompetencies';
import AcademicBackground from './components/AcademicBackground';
import ProfessionalExperience from './components/ProfessionalExperience';
import ContactInfo from './components/ContactInfo';
import PersonalProjects from './components/PersonalProjects';

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

const CV = () => {
  return (
    <Container>
      <CVHeader
        name="Marek Fischer"
        title="Software Engineer"
        profileImage={profileImage}
      />
      <ContentGrid>
        <Column>
          <PersonalSummary />
          <ContactInfo />
          <CoreSkills />
          <TechnicalCompetencies />
          <AcademicBackground />
        </Column>

        <Column>
          <ProfessionalExperience />
          <PersonalProjects />
        </Column>
      </ContentGrid>
    </Container>
  );
};

export default CV;