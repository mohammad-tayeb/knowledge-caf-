import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {  //here blog is array of object
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readTime, setReadtime] = useState(0);

  const handleTimeRead = (time, id) =>{
    setReadtime(readTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id != id);
    setBookmarks(remainingBookmarks)

  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-20 mt-6 justify-between'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleTimeRead={handleTimeRead}></Blogs>
      <Bookmarks 
      readTime={readTime}
      bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
