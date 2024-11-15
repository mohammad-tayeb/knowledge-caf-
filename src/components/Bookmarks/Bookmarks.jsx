import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readTime }) => {
    // Remove duplicate titles using a Set
    const uniqueBookmarks = [
        ...new Map(bookmarks.map((bookmark) => [bookmark.title, bookmark])).values()
    ];

    return (
        <div className="md:w-1/3 mt-16 ms-5 bg-slate-200 rounded-md">
            <h1 className='text-center text-2xl bg-violet-500 text-white p-4 rounded-sm'>
                Time Spent: {readTime}
            </h1>
            <h1 className="text-3xl text-center mt-4">Bookmarks: {uniqueBookmarks.length}</h1>

            {uniqueBookmarks.map((bookmark) => (
                <Bookmark key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number.isRequired,
};

export default Bookmarks;
