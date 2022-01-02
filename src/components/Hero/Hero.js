import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there!!! <br />
          I'm a Web Developer
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro vel cum repellat quidem inventore debitis cupiditate numquam, quos officiis esse ipsa, nam modi architecto atque vero, eius accusantium quo.
        </SectionText>
        <Button>Learn More</Button>
      </LeftSection>
    </Section> 
);

export default Hero;