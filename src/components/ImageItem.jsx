import React, {useState} from 'react'
import Comments from './Comments';

export default function ImageItem({imageItem}) {
   
    let [newCounter, setNewCounter] = useState(imageItem.likes)
    let counter = 0;

    function handleOnClick(){
        counter = counter +1
        console.log(counter)

        setNewCounter(newCounter +1)
    }
   
    return (
      <div class="container">
        <div className="row justify-content-md-center">
          <div className="col-8 border mt-4">
            <strong>{imageItem.title}</strong>
              <img
                  onDoubleClick={handleOnClick} 
                  className="img-fluid" 
                  src={imageItem.imageURL}
                  alt={imageItem.description}
              />
              <p>   
                {newCounter} <span onClick={handleOnClick}>♥️</span>
              </p>
              <p>
                {imageItem.description}
              </p>
              <p>
                  <Comments/>
              </p>
          </div>
            
{/*             <p>
              Counter: {counter}
            </p>
            <p>
              Counter: {newCounter}
            </p> */}
        </div>
      </div>  
    )
}
