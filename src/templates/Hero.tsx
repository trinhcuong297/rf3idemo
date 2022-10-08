import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Radio Frequency Lab \n'}
            <span className="text-primary-500">RF3i Lab</span>
          </>
        }
        description="Research for Radio Frequency, Embedded System,..."
        button={
          <Link href="">
            <a>
              <Button xl>Say Hello to Us</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
