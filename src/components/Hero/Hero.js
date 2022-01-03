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
          Hey! I'm Jaganath. I'm a Mechanical Engineer turned Web Developer. I always loved the feeling of creation, and getting into web development gave me lot of things including that.
        </SectionText>
        <a href="https://drive.google.com/file/d/1TIf5DvBnp2fP7Skdt2XA68OhGgdsHILJ/view?usp=sharing" target="_blank"><Button>My Resume</Button></a>
      </LeftSection>
    </Section> 
);

export default Hero;