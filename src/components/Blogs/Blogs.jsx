import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

{ console.log('Blogs connected') }
const Blogs = ({handleAddToBookmark}) => {

    const [blogs, setBlogs] = useState([]);

    // useEffet load data only one time when components are mounted 
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h4 className="text-4xl font-bold">Blogs</h4>
            {
                blogs.map(blog => 
                    <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}>
                    </Blog>
                )
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blogs;