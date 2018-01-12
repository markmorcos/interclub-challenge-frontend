import React from 'react';
import styled from 'styled-components';

import { ListItem } from './common';

const StyledName = styled.h3`
    flex: 1;
    margin: 0;
`
const StyledAmount = styled.h4`
    margin: 0;
`

const TransactionItem = ({ transaction }) => {
    return (
        <ListItem>
            <StyledName>{transaction.date}</StyledName>
            <StyledAmount className={transaction.type}>{transaction.amount}</StyledAmount>
        </ListItem>
    )
};


export default TransactionItem;
