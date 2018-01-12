import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { baseURL } from '../config';

import { Loading } from './common';

const api = axios.create({ baseURL });

const StyledSummaryItem = styled.div`
    flex: 1;
    width: 100%;
    text-align: center;
`

class TransactionSummaryItem extends Component {
    state = {
        summary: { amount: '', type: '' },
        loading: false
    }

    async componentWillMount() {
        const { memberId, number, period } = this.props;
        this.setState({ loading: true });
        const res = await api.get(`transactions/${memberId}/summary?number=${number}&period=${period}`);
        const summary = res.data;
        this.setState({ summary, loading: false });
    }

    render() {
        const { summary, loading } = this.state;
        if (loading) {
            return <Loading />;
        }
        const { number, period } = this.props;
        return (
            <StyledSummaryItem>Last {number} {period}: <span className={summary.type}>{summary.amount}</span></StyledSummaryItem>
        );
    }
}

export default TransactionSummaryItem;
