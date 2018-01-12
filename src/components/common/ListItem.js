import React, { Component } from 'react';
import styled from 'styled-components';

const StyledListItem = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    padding: 10px;
    box-shadow: 0 0px 3px 1px rgba(0, 0, 0, 0.1);
    transition: 200ms all ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

class ListItem extends Component {
    render() {
        return <StyledListItem>{this.props.children}</StyledListItem>;
    }
}

export { ListItem };
