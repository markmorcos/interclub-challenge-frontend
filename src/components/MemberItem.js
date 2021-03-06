import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    width: 220px;
    height: 180px;
    margin-bottom: 50px;
    border-radius: 2px;
    box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.1);
    transition: 200ms all ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.2);
    }
`;

const StyledName = styled.h2`
    text-align: center;
`

const MemberItem = ({ member }) => (
    <Link style={{ textDecoration: 'none' }} to={'/members/' + member.id}>
        <StyledWrapper>
            <StyledName>{member.name}</StyledName>
        </StyledWrapper>
    </Link>
);


export default MemberItem;
