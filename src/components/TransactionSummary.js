import React, { Component } from 'react';

import { ListItem } from './common';
import TransactionSummaryItem from './TransactionSummaryItem';

const summaryItems = [
    { number: 1, period: 'week' },
    { number: 1, period: 'month' },
    { number: 3, period: 'months' },
    { number: 6, period: 'months' },
    { number: 1, period: 'year' }
];

export default class TransactionSummary extends Component {
    renderSummaryItems() {
        const { memberId } = this.props;
        return summaryItems.map(({ number, period }, index) => {
            return <TransactionSummaryItem key={index} memberId={memberId} number={number} period={period} />;
        });
    }

    render() {
        return <ListItem>{this.renderSummaryItems()}</ListItem>;
    }
}
