import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import DATA from './directory.data';

export default class directory extends React.Component {

  constructor(){
    super();
    this.state = {
      sections : DATA
    }
  }

  render(){
    return (
      <div className='directory-menu'>
  {this.state.sections.map(({id, ...otherProps}) => (
     <MenuItem key={id} {...otherProps}/>
  ))}

</div>
    );
  }
}