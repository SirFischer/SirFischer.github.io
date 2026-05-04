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

const ContactInfo: React.FC = () => {
  return (
    <Section title="Contact Info">
      <List style={{ listStyleType: 'none', padding: 0 }}>
        <ListItem><strong>Address:</strong> Mellomgata 9, 4013 Stavanger</ListItem>
        <ListItem><strong>Phone:</strong> +4792068938</ListItem>
        <ListItem><strong>Email:</strong> marek5886@hotmail.com</ListItem>
        <ListItem><strong>Website:</strong> https://deepvertic.com</ListItem>
        <ListItem><strong>Github:</strong> https://github.com/SirFischer</ListItem>
      </List>
    </Section>
  );
};

export default ContactInfo;