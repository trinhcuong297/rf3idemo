import { useState } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => {
  const [layer, setLayer] = useState(0);
  const a = [
    'https://fi-mi.vn/static/media/objective.deb74802.svg',
    'https://fi-mi.vn/static/media/home.f3286307.png',
  ];

  function as() {
    setLayer((layer + 1) % 2);
  }

  setTimeout(() => {
    as();
    console.log(1);
  }, 5000);
  return (
    <div
      style={{ backgroundImage: `url(${a[layer]})` }}
      className="bg-contain bg-no-repeat bg-center"
    >
      <div className="backdrop-brightness-[0.4] s h-[90vh]">
        <Section yPadding="pt-32 pb-32 ">
          <HeroOneButton
            title={
              <>
                <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {'Radio Frequency Lab \n'}
                </span>
                <span className="text-gray-100">RF3i</span>
              </>
            }
            description="Research for Radio Frequency, Embedded System,..."
            button={
              <Link href="/Contact">
                <a>
                  <Button xl>Say Hello to Us</Button>
                </a>
              </Link>
            }
          />
        </Section>
      </div>
    </div>
  );
};

export { Hero };
