import React from 'react';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';
import {loadMovieAction} from '../../action/movies';
import movieStore from '../../stores/movies';
export default React.createClass({
    mixins: [formPreset],
    definitionPath: 'movie',
    action: {
        load: loadMovieAction
    },
    stores: [{
        store: movieStore,
        properties: ['movieInfo']
    }],
    renderContent() {
        const {id} = this.props;
        const {title} = this.state;
        return (
            <Panel title='Informations'>
                <h3>{title}</h3>
            </Panel>
        );
    }
})
