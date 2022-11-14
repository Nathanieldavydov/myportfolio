import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Nathaniel <br />
        I design and build
      </SectionTitle>
      <SectionText>
        I am a Front End Developer with experience in Graphic Design with knowledge in Javascript, HTML, CSS, React, Next.js, and more!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:nathanielmdavydov@gmail.com'}>
        Learn More
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;