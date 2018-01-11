import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 60px;
    margin: 5px;
    border-radius: 2px;
    box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.1);
    transition: 200ms all ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.2);
    }
`;

const StyledName = styled.h2`
    text-align: left;
    padding-left: 10px;
    flex: 1;
`
const IncomeStyledDate = styled.h4`
    padding-right: 10px;
    color: green;
`

const ExpenseStyledDate = styled.h4`
    padding-right: 10px;
    color: red;
`

const TransactionItem = ({ transaction }) => {
    const StyledDate = transaction.type === 'income' ? IncomeStyledDate : ExpenseStyledDate;
    return (
        <StyledWrapper>
            <StyledName>{moment(transaction.date).format('DD/MM/YYYY')}</StyledName>
            <StyledDate>€{transaction.amount}</StyledDate>
        </StyledWrapper>
    )
};


export default TransactionItem;
