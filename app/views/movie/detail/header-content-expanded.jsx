// libraries
import React from 'react';
import i18n from 'i18next-client';

//web components
import {mixin as formPreset} from 'focus-components/common/form';

//stores
import movieStore from '../../../stores/movie';

//custom components
import Poster from '../../../components/poster';

export default React.createClass({
    displayName: 'MovieDetailHeaderExpanded',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        const {title, poster, trailerHRef} = this.state;
        return (
            <div data-demo='header-content-expanded'>
                <Poster poster={poster} title={title} hasZoom={true} />
                <div data-demo='header-content-expanded__infos'>
                    <div className="key-concept">{i18n.t('movie.keyConcept.name')}</div>
                    <h3>{this.textFor('title')}</h3>
                    <h5>{this.textFor('movieType')}</h5>
                    <h6>{this.textFor('productionYear')}</h6>
                    <p>{this.textFor('shortSynopsis')}</p>
                </div>
            </div>
        );
    }
})
