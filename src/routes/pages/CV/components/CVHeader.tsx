import React from 'react';
import styled from 'styled-components';
import { materialTheme } from '../../../../theme/material3';

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

interface CVHeaderProps {
  name: string;
  title: string;
  profileImage: string;
}

const CVHeader: React.FC<CVHeaderProps> = ({ name, title, profileImage }) => {
  return (
    <Header>
      <HeaderText>
        <Title>{name}</Title>
        <Subtitle>{title}</Subtitle>
      </HeaderText>
      <ProfileImage src={profileImage} alt={`${name} Profile`} />
    </Header>
  );
};

export default CVHeader;