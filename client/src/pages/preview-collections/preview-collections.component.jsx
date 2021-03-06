import React from 'react';
import './preview-collections.styles.scss'
import CollectionItem from '../../components/colletion-item/collection-item.components'

const PreviewCollection = ( {title, items} ) => (
    <div className = 'collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {items
                .filter( (item, idx) => idx < 4)
                .map(item => (
                <CollectionItem key = {item.id} item={item} />
            ))}
        </div>
    </div>
)

export default PreviewCollection;