import React, {PropTypes} from 'react';
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import InformationMovie from './informations';
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import {component as BackButton} from 'focus-components/common/button/back';
import HeaderExpanded from './header-expanded';
import HeaderSummary from './header-summary';

export default React.createClass({
    mixins: [cartridgeBehaviour],
    cartridgeConfiguration() {
        return {
            barLeft: { component: BackButton },
            cartridge: { component: HeaderExpanded},
            summary: { component: HeaderSummary},
            actions: {
                primary: [],
                secondary: []
            }
        };
    },
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer>
                <InformationMovie id={id}/>
            </ScrollspyContainer>
        )
    }
})
