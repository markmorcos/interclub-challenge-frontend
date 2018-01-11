import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TransactionItem from './TransactionItem';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px calc((100vw - 860px) / 2);
    justify-content: space-between;
`

const StyledTitle = styled.h1`
    width: 100%;
`

const StyledSubtitle = styled.h2`
    width: 100%;
`
export default class MemberDetails extends Component {
    constructor() {
        super();

        this.state = {
            member: { first_name: '', last_name: '', Transactions: [] },
            loading: true
        }
    }

    async componentWillMount() {
        const memberId = this.props.match.params.memberId;
        try {
            const res = await axios.get('http://localhost:4000/api/members/' + memberId);
            const member = res.data;
            this.setState({ member, loading: false });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { member, loading } = this.state;
        if (loading) return (
            <StyledWrapper>
                <StyledTitle>Loading...</StyledTitle>
            </StyledWrapper>
        );
        const mappedTransactions =  member.transactions.map(transaction => <TransactionItem transaction={transaction} key={transaction.id} />);

        return (
            <StyledWrapper>
                <StyledTitle>{member.first_name + ' ' + member.last_name}</StyledTitle>
                <StyledSubtitle>Transactions</StyledSubtitle>
                {mappedTransactions}
            </StyledWrapper>
        )
    }
}
