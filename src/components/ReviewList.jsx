/* eslint-disable react/prop-types */
function ReviewList({ reviews, deleteReview }) {
    return (
      <div className="w-full">
        {reviews.map((review) => (
          <div key={review._id} className="p-4 border rounded-md mb-4">
            <h2 className="text-xl font-bold">{review.title}</h2>
            <p className="text-sm">by {review.author}</p>
            <p>{review.content}</p>
            <p className="text-sm text-gray-600">- {review.reviewer}</p>
            {review.rating && <p>Rating: {review.rating}/5</p>}
            <button onClick={() => deleteReview(review._id)} className="text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ReviewList;
  