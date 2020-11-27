import React from 'react'
import { Link } from 'react-router-dom'
 
import { Wrapper, Content, Logo, Button, Menu } from './style'
import LogoSite from '../../assets/images/logo.jpg'

export default function Header () {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <Logo src={ LogoSite } alt="LogoSite" />
                </Link>
                <Menu>
                    <Link to="/">
                        <Button>HOME</Button>
                    </Link>
                    <Link to="/AddEvent">
                        <Button>ADD</Button>
                    </Link>
                </Menu>
            </Content>
        </Wrapper>
    )
}