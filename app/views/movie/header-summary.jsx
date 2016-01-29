import React from 'react';
import {storeBehaviour} from 'focus-components/common/mixin';
import movieStore from '../../stores/movies';

const HeaderSummary = React.createClass({
    mixins: [storeBehaviour],
    getInitialState() {
        return {};
    },
    stores: [{
        store: movieStore,
        properties: ['movieInfo']
    }],
    render() {
        const {title, productionYear} = this.state;
        return (
            <b>{`${title} - ${productionYear}`}</b>
        )
    }
});
export default HeaderSummary;
