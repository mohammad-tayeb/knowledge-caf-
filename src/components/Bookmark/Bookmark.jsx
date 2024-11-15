import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {

    const { title } = bookmark;
    return (
        <div className='bg-slate-100 m-4 p-4 rounded-2xl'>
            <h1>{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.array,
}
export default Bookmark;