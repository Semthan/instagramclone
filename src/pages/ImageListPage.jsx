import React from 'react'
import ImageItem from '../components/ImageItem'
import {imageList} from '../imageList'

export default function ImageListPage() {
    console.log(imageList)
    return (
        <>  
          <h2>Instagram</h2> 
          <div className="row">
          {imageList.map(imageItem => {
              return <ImageItem
                key={imageItem.id}
                imageItem={imageItem}
              />
          })}  
          </div>
        </>
    )
}
