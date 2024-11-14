 
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ReviewForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
     const response =  await axios.post('https://books-review-backend.onrender.com/api/reviews', data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      reset();
      console.log("Review submitted successfully", response.data)
      
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md mb-4">
      <input className="block w-full mb-2 p-2 border" {...register('title')} placeholder="Book Title" required />
      <input className="block w-full mb-2 p-2 border" {...register('author')} placeholder="Author" required />
      <textarea className="block w-full mb-2 p-2 border" {...register('content')} placeholder="Review Content" required></textarea>
      <input className="block w-full mb-2 p-2 border" {...register('reviewer')} placeholder="Your Name" required />
      <select className="block w-full mb-2 p-2 border" {...register('rating')}>
        <option value="">Rating (1-5)</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit" className="bg-[#ff742b] text-white p-2 rounded-md">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
