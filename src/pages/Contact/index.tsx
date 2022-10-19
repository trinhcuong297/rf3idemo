import React from 'react';

import ContactForm from '../../component/ContactForm';
import ContactInformation from '../../component/ContactInformation';
import { Container, Content } from '../../styles/Home';

const ContactUs: React.FC = () => (
  <Container className="bg-gray-100">
    <Content>
      <ContactForm />
      <ContactInformation />
    </Content>
  </Container>
);

export default ContactUs;
