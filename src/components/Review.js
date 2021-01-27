import React from 'react'

const Review = ({review=[] }) => {
    return (
        <ul>
        {(review.length > 0) && review.map(item => (
            <li key= {item.id}>
                <h5> Author: {item.author}</h5>
                <p>{item.content}</p>
            </li> 
        ))}
        </ul>
    );
}

export default Review;