import React from 'react';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';
import {loadMovieAction} from '../../action/movies';
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
        load: loadMovieAction
    },
    stores: [{
        store: movieStore,
        properties: ['movieInfo']
    }],
    renderContent() {
        const {id} = this.props;
        const {title, poster, actors} = this.state;
        const posterStyle = {
            width: '100px'
        };
        return (
            <Panel title='Informations'>
                <h3>{title}</h3>
                <img src={poster} style={posterStyle}/>
                {actors.map(actor => (
                    <div>{actor.name} dans le rôle de {actor.role}</div>
                ))}
            </Panel>
        );
    }
})
