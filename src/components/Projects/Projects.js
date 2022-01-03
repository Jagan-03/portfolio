import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>
        Projects
      </SectionTitle>
      <GridContainer>
        {projects.map(({id, image, title, description, tags, source, visit, backend}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
              <div>
              <Hr />
                <TitleContent>Technologies used</TitleContent>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
                <ExternalLinks href={source} target="_blank">Frontend source</ExternalLinks>
                { backend && <ExternalLinks href={backend} target="_blank">Backend Source</ExternalLinks>}
              </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
);

export default Projects;