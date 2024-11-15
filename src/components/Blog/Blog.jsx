import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author_img, author, reading_time, hashtags, posted_date } = blog;
    return (
        <div>
            <img className='w-full my-6' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ms-2'><CiBookmarkPlus /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blog;