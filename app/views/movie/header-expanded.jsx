import React from 'react';
import {storeBehaviour} from 'focus-components/common/mixin';
import movieStore from '../../stores/movies';

const HeaderExpanded = React.createClass({
    mixins: [storeBehaviour],
    getInitialState() {
        return {};
    },
    stores: [{
        store: movieStore,
        properties: ['movieInfo']
    }],
    render() {
        const {poster, title} = this.state;
        return (
            <div style={{display: 'flex'}}>
                <img src={poster} style={{height: '100px'}}/>
                <h3>{title}</h3>
            </div>
        )
    }
});

export default HeaderExpanded;
