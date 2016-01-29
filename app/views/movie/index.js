import React, {PropTypes} from 'react';
import InformationMovie from './informations';

export default React.createClass({
  render(){
    const {id} = this.props;
    return (
      <div>
        <h1>Mon film {id}</h1>
        <InformationMovie id={id}/>
      </div>
    )
  }
})
