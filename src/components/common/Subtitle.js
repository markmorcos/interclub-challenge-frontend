import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.h2`
	width: 100%;
`

class Subtitle extends Component {
    render() {
        return <StyledSubtitle>{this.props.children}</StyledSubtitle>;
    }
}

export { Subtitle };
