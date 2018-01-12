import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
	width: 100%;
`

class Title extends Component {
    render() {
        return <StyledTitle>{this.props.children}</StyledTitle>;
    }
}

export { Title };
