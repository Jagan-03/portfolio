import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
    <Section>
      <SectionDivider />
      <br /><br />
      <SectionTitle>Competitive Programming Work</SectionTitle>
      <Boxes>
          <Box href="https://www.guvi.in/jaganmj324" target="_blank">
            <img width={200} className="cp-logo" src="https://s3.ap-south-1.amazonaws.com/guvi-2.0/rewards-logo/codekata.png" alt="logo" />
          </Box>
      </Boxes>
    </Section>
);

export default Acomplishments;
