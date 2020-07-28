import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const previewCollection = ({ title, items }) => {
  return (<div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.filter((items, index)=> index < 4).map(({id, ...otherProps})  => (
        <CollectionItem key={id} {...otherProps}> </CollectionItem>
      ))}
    </div>
  </div>);
}

export default previewCollection;