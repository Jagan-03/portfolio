import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
      <SectionDivider />
      <br /> <br />
      <SectionTitle>
        Technologies
      </SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end To Design.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React.js<br />
              Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Node.js<br />
              Databases - MongoDB, GraphQl, Firestore
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem"/>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Material-UI<br />
              Bootstrap
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
);

export default Technologies;
