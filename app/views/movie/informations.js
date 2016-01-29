import React from 'react';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';
import {loadMovieAction, saveMovieAction} from '../../action/movies';
import movieStore from '../../stores/movies';
export default React.createClass({
    mixins: [formPreset],
    definitionPath: 'movie',
    getInitialState() {
        return {
            actors: []
        }
    },
    action: {
        load: loadMovieAction,
        save: saveMovieAction
    },
    stores: [{
        store: movieStore,
        properties: ['movieInfo']
    }],
    renderContent() {
        const {id} = this.props;
        const {poster, actors} = this.state;
        const posterStyle = {
            width: '100px'
        };
        return (
            <Panel title='Informations'>
                {this.fieldFor('title')}
                {this.fieldFor('movieType')}
                {this.fieldFor('productionYear')}
                {this.fieldFor('shortSynopsis')}
            </Panel>
        );
    }
})
