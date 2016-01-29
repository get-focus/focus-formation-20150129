import React from 'react';

export default React.createClass({
  render(){
    const {id} = this.props;
    return (
      <div>
      Mon block 1 {id}
      </div>
    );
  }
})
