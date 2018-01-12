import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';

import { Loading } from './common';
import TransactionItem from './TransactionItem';


class TransactionList extends Component {
    componentWillMount() {
        const { memberId } = this.props;
        this.props.getTransactions(memberId);
    }

    render() {
        const { transactions, loading } = this.props;
        if (loading) return <Loading />;
        if (!transactions.length) return <h1>No transactions yet</h1>;
        return transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />);
    }
}

const mapStateToProps = ({ transactionReducer }) => {
    const { transactions, loading } = transactionReducer;
    return { transactions, loading };
};

export default connect(mapStateToProps, { getTransactions })(TransactionList);
