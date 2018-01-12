import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMember } from '../actions';

import { ListItem, Title, Subtitle, Loading, Wrapper } from './common';
import TransactionSummary from './TransactionSummary';
import TransactionList from './TransactionList';

class MemberDetails extends Component {
    componentWillMount() {
        const { memberId } = this.props.match.params;
        const { getMember } = this.props;
        getMember(memberId);
    }

    renderMember() {
        const { member, loading } = this.props;
        if (loading) return <Loading />;
        return (
            <span>
                <Title>{member.name}</Title>
                <ListItem>ID: {member.id}</ListItem>
                <ListItem>Number: {member.number}</ListItem>
                {member.email && <ListItem>Email:&nbsp;<a href={'mailto:' + member.email} target="_blank">{member.email}</a></ListItem>}
            </span>
        );
    }

    render() {
        const { memberId } = this.props.match.params;
        return (
            <Wrapper>
                {this.renderMember()}
                <Subtitle>Summary</Subtitle>
                <TransactionSummary memberId={memberId} />
                <Subtitle>Transactions</Subtitle>
                <TransactionList memberId={memberId} />
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ memberReducer }) => {
    const { member, loading } = memberReducer;
    return { member, loading };
};

export default connect(mapStateToProps, { getMember })(MemberDetails);
