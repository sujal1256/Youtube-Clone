import React from 'react'
import CommentsList from './CommentsList'
import { comments } from '../constants'

const CommentsContainer = () => {
  return (
    <div className='my-2 w-full'>
        <h1 className='font-bold text-2xl relative'>Comments:</h1>
          <CommentsList comments={comments}/>
    </div>
  )
}

export default CommentsContainer