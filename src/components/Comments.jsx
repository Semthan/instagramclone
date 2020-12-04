import React, {useRef,useState} from 'react'

export default function Comments() {
    const inputRef = useRef()
    const [commentList, setCommentList] = useState([])

    function handleOnClick(){
        //
        const input = inputRef.current
        if(input.value !== ""){
          setCommentList( [input.value, ...commentList])
        }
        
        input.value = ""
        /*  
        commentList.push(value)
        console.log(inputRef.current) */
    }

    return (
        <div>
            {commentList.map((comment, index) => {
                return <p key={index}>{comment}</p>
            })}
            <input ref={inputRef} type="text"/>
            <button
              onClick={handleOnClick}
              className="btn btn-secondary m-2"
            >
              Post
            </button>
        </div>
    )
}
