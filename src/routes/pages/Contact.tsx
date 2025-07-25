import React from 'react'
import styled, { keyframes } from 'styled-components'
import { materialTheme } from '../../theme/material3'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${materialTheme.colors.surfaceContainer} 0%,
    ${materialTheme.colors.surface} 50%,
    ${materialTheme.colors.surfaceContainerLow} 100%);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const Header = styled.header`
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
`

const Title = styled.h1`
  font-family: ${materialTheme.typography.displayMedium.fontFamily};
  font-size: ${materialTheme.typography.displayMedium.fontSize};
  line-height: ${materialTheme.typography.displayMedium.lineHeight};
  font-weight: ${materialTheme.typography.displayMedium.fontWeight};
  color: ${materialTheme.colors.onSurface};
  margin: 0 0 16px 0;
  
  background: linear-gradient(135deg, 
    ${materialTheme.colors.primary},
    ${materialTheme.colors.tertiary},
    ${materialTheme.colors.error});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-family: ${materialTheme.typography.titleLarge.fontFamily};
  font-size: ${materialTheme.typography.titleLarge.fontSize};
  line-height: ${materialTheme.typography.titleLarge.lineHeight};
  color: ${materialTheme.colors.onSurfaceVariant};
  margin: 0;
  max-width: 600px;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`

const ContactCard = styled.div`
  background: ${materialTheme.colors.surfaceContainerLow};
  border-radius: ${materialTheme.shape.corner.large};
  padding: 32px;
  box-shadow: ${materialTheme.elevation.level1};
  transition: all ${materialTheme.motion.duration.medium2} ${materialTheme.motion.easing.standard};
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: ${materialTheme.elevation.level3};
    transform: translateY(-4px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${materialTheme.colors.primary},
      ${materialTheme.colors.tertiary},
      ${materialTheme.colors.error});
  }
`

const CardIcon = styled.div`
  font-size: 48px;
  color: ${materialTheme.colors.primary};
  margin-bottom: 16px;
  animation: ${float} 3s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`

const CardTitle = styled.h3`
  font-family: ${materialTheme.typography.headlineSmall.fontFamily};
  font-size: ${materialTheme.typography.headlineSmall.fontSize};
  line-height: ${materialTheme.typography.headlineSmall.lineHeight};
  font-weight: ${materialTheme.typography.headlineSmall.fontWeight};
  color: ${materialTheme.colors.onSurface};
  margin: 0 0 12px 0;
`

const CardContent = styled.p`
  font-family: ${materialTheme.typography.bodyLarge.fontFamily};
  font-size: ${materialTheme.typography.bodyLarge.fontSize};
  line-height: ${materialTheme.typography.bodyLarge.lineHeight};
  color: ${materialTheme.colors.onSurfaceVariant};
  margin: 0 0 16px 0;
`

const ContactLink = styled.a`
  font-family: ${materialTheme.typography.labelLarge.fontFamily};
  font-size: ${materialTheme.typography.labelLarge.fontSize};
  font-weight: ${materialTheme.typography.labelLarge.fontWeight};
  color: ${materialTheme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${materialTheme.shape.corner.medium};
  background-color: ${materialTheme.colors.primaryContainer};
  transition: all ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};

  &:hover {
    background-color: ${materialTheme.colors.primary};
    color: ${materialTheme.colors.onPrimary};
    transform: translateY(-2px);
  }

  i {
    font-size: 18px;
  }
`

const SocialSection = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  text-align: center;
`

const SocialTitle = styled.h2`
  font-family: ${materialTheme.typography.headlineMedium.fontFamily};
  font-size: ${materialTheme.typography.headlineMedium.fontSize};
  line-height: ${materialTheme.typography.headlineMedium.lineHeight};
  font-weight: ${materialTheme.typography.headlineMedium.fontWeight};
  color: ${materialTheme.colors.onSurface};
  margin: 0 0 24px 0;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: ${materialTheme.shape.corner.full};
  background-color: ${materialTheme.colors.surfaceContainerHigh};
  color: ${materialTheme.colors.onSurface};
  text-decoration: none;
  font-size: 24px;
  transition: all ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};
  animation: ${float} 3s ease-in-out infinite;

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.6s; }

  &:hover {
    background-color: ${materialTheme.colors.primary};
    color: ${materialTheme.colors.onPrimary};
    transform: translateY(-4px) scale(1.1);
  }
`

const Contact = () => {
  return (
    <Container>
      <Header>
        <Title>Get In Touch</Title>
        <Subtitle>
          Have a question, want to collaborate, or just say hello? 
          I'd love to hear from you!
        </Subtitle>
      </Header>

      <ContactGrid>
        <ContactCard>
          <CardIcon>
            <i className="ri-mail-fill" />
          </CardIcon>
          <CardTitle>Email</CardTitle>
          <CardContent>
            Send me an email for business inquiries, collaborations, or general questions.
          </CardContent>
          <ContactLink href="mailto:contact@deepvertic.com">
            <i className="ri-send-plane-fill" />
            Send Email
          </ContactLink>
        </ContactCard>

        <ContactCard>
          <CardIcon>
            <i className="ri-github-fill" />
          </CardIcon>
          <CardTitle>GitHub</CardTitle>
          <CardContent>
            Check out my projects, contribute to open source, or follow my development journey.
          </CardContent>
          <ContactLink href="https://github.com/SirFischer" target="_blank" rel="noopener noreferrer">
            <i className="ri-external-link-fill" />
            Visit GitHub
          </ContactLink>
        </ContactCard>
      </ContactGrid>

      <SocialSection>
        <SocialTitle>Connect With Me</SocialTitle>
        <SocialLinks>
          <SocialLink href="https://github.com/SirFischer" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="ri-github-fill" />
          </SocialLink>
          <SocialLink href="mailto:contact@deepvertic.com" title="Email">
            <i className="ri-mail-fill" />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="ri-linkedin-fill" />
          </SocialLink>
          <SocialLink href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="ri-twitter-fill" />
          </SocialLink>
        </SocialLinks>
      </SocialSection>
    </Container>
  )
}

export default Contact
