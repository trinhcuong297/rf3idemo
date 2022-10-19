import React from 'react';

import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaMailBulk,
  FaWifi,
} from 'react-icons/fa';

import { Container, Content, ContentRow, SocialMedias } from './styles';

const ContactInformation: React.FC = () => (
  <Container>
    <h2 className="text-xl">INFORMATION OF RF3I LAB</h2>
    <Content>
      <ContentRow>
        <FaMapMarkerAlt color="#999" />
        <div>
          <p>P328 - C1</p>
          <p>Ha Noi University of Science and Technology</p>
        </div>
      </ContentRow>
      <ContentRow>
        <FaMailBulk color="#999" />
        <div>
          <p>RF3i ─ labrf3i@gmail.com</p>
        </div>
      </ContentRow>
      <ContentRow>
        <FaMailBulk color="#999" />
        <div>
          <p>Dr.Le Minh Thuy ─ thuy.leminh@hust.edu.vn</p>
        </div>
      </ContentRow>
    </Content>
    <SocialMedias>
      <Link href={'https://www.facebook.com/rf3ilab.hust'}>
        <FaFacebookF />
      </Link>
      <Link href="/">
        <FaWifi />
      </Link>
    </SocialMedias>
  </Container>
);

export default ContactInformation;
