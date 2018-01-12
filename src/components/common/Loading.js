import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCenterLoading = styled.span`
	flex: 1;
	text-align: center;
`

const StyledLeftLoading = StyledCenterLoading.extend`
	text-align: left;
`

class Loading extends Component {
    render() {
    	const { alignLeft } = this.props;
    	const StyledLoading = alignLeft ? StyledLeftLoading : StyledCenterLoading;
        return (
        	<StyledLoading>
        		<img alt="Loading..." src="http://www.rentparis.com/layout/loading-icon.gif" width="25" height="25" />
        	</StyledLoading>
        );
    }
}

export { Loading };
