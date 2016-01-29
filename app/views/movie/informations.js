import React from 'react';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';
import {loadMovieAction} from '../../action/movies';
export default React.createClass({
  mixins: [formPreset],
  definitionPath: 'movie',
  action: {
    load: loadMovieAction
  },
  renderContent(){
    const {id} = this.props;
    return (
      <Panel title='Mon superbe block'>
        Mon block 1 {id}
      </Panel>
    );
  }
})
