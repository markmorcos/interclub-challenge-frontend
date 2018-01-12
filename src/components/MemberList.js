import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMembers } from '../actions';

import { Title, Loading, Wrapper } from './common';
import MemberItem from './MemberItem';

const StyledGrid = Wrapper.extend`
    flex-wrap: wrap;
    flex-direction: row;
`

class MemberList extends Component {
    componentWillMount() {
        this.props.getMembers();
    }

    renderMembers() {
        const { members, loading } = this.props;
        if (loading) return <Loading alignLeft />;
        return members.map(member => <MemberItem key={member.id} member={member} />);
    }
    render() {
        return (
            <StyledGrid>
                <Title>Members</Title>
                {this.renderMembers()}
            </StyledGrid>
        );
    }
}

const mapStateToProps = ({ memberReducer }) => {
    const { members, loading } = memberReducer;
  return { members, loading };
};

export default connect(mapStateToProps, { getMembers })(MemberList);
