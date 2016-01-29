import React from 'react';
import Panel from 'focus-components/components/panel';
export default React.createClass({
  render(){
    const {id} = this.props;
    return (
      <Panel title='Mon superbe block'>
        Mon block 1 {id}
      </Panel>
    );
  }
})
