import { useEffect, useState } from "react";

{ console.log('Blogs connected') }
const Blogs = () => {

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
        </div>
    );
};

export default Blogs;