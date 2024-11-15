import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleTimeRead }) => {
    const { title, cover, author_img, author, reading_time, hashtags, posted_date, id } = blog;
    return (
        <div className='mb-24'>
            <img className='w-full my-6' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="ms-2 text-2xl flex items-center"
                    >
                        <CiBookmarkPlus />
                    </button>
                </div>

            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleTimeRead(reading_time, id)} className="px-3 py-1 mt-2 bg-blue-500 text-white rounded">Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleTimeRead: PropTypes.func.isRequired
}
export default Blog;