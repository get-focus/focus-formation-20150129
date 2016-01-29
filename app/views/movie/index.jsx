import {component as Modal} from 'focus-components/application/popin';
import React, {PropTypes} from 'react';
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import InformationMovie from './informations';
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import {component as BackButton} from 'focus-components/common/button/back';
import HeaderExpanded from './header-expanded';
import HeaderSummary from './header-summary';
import history from 'focus-core/history';
import MovieAdditionalContent from './movie-additional-content';
export default React.createClass({
    mixins: [cartridgeBehaviour],
    getInitialState(){
        return {};
    },
    cartridgeConfiguration() {
        return {
            barLeft: { component: BackButton},
            cartridge: { component: HeaderExpanded},
            summary: { component: HeaderSummary},
            actions: {
                primary: [{
                    action() {
                        history.navigate('home', true);
                    },
                    icon: 'home',
                    label: 'Go back home'
                }],
                secondary: [{
                    action() {
                        history.navigate('home', true);
                    },
                    icon: 'home',
                    label: 'Go back home'
                }]
            }
        };
    },
    _toggleOpenPopin(){
        this.setState({isPopinOpen : !this.state.isPopinOpen});
    },
    render() {
        const {id} = this.props;
        const {isPopinOpen} = this.state;
        return (
            <ScrollspyContainer>

                <InformationMovie id={id} openPopin={this._toggleOpenPopin}/>
                {
                    isPopinOpen &&
                    <Modal open={true} type='from-right' onPopinClose={this._toggleOpenPopin}>
                        <MovieAdditionalContent id={id} nom='test'/>
                    </Modal>
                }
        </ScrollspyContainer>
        )
    }
})
