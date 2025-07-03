
function Header({ username }) {
  const hangleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={hangleLogout} className='bg-red-500 text-lg font-medium px-5 py-2 rounded-sm '>Log Out</button>

    </div>
  )
}

export default Header