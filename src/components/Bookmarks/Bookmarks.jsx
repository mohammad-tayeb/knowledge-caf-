import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 mt-16 ms-5 bg-slate-200 rounded-md">
            <h1 className="text-3xl text-center mt-4">Bookmarks: {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)//map kore patale array jabe else object jabe
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;