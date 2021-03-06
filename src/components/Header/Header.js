import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span,  Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display : "flex", alginItems : "center", color : "white"}}>
            <DiCssdeck size="3rem"  /> <Span>Jaganath Ezhilarasu</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Jagan-03" target="_blank">
          <AiFillGithub />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
