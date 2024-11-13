import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between mx-4 p-4 border-b-2'>
           <h1  className='text-3xl font-bold'>Knowledge Cafe</h1>
           <img src={profile} alt="" />
        </header>
    );
};

export default Header;