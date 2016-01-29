import React, {PropTypes} from 'react';
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import InformationMovie from './informations';

export default React.createClass({
  render(){
    const {id} = this.props;
    return (
      <ScrollspyContainer>
        <InformationMovie id={id}/>
      </ScrollspyContainer>
    )
  }
})
