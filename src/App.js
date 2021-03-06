import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Router from './Router';

const StyledWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 100px;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #c917a0 0%,#7e57c2 100%);
`;

const StyledLogoLink = styled.div`
    position: absolute;
    z-index: 2;
    top: 50px;
    left: 50px;
    width: 48px;
    height: 48px;
`;

export default class App extends Component {
    render() {
        return (
            <StyledWrapper>
                <StyledLogoLink>
                    <Link to ='/'><img alt='logo' src='/assets/inv_logo_48x48.png' /></Link>
                </StyledLogoLink>
                <Router />
            </StyledWrapper>
        );
    }
}
