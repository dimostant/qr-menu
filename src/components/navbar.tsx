import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className="fixed top-0 w-screen h-12 bg-gray-300 grid grid-cols-3 justify-center place-items-center">
        <div />
        <nav>
          <Link to="/">
            <div className="text-lg">QR Menu</div>
          </Link>
        </nav>
        <nav>
          <Link to="/ai">
            <FaMagnifyingGlass />
          </Link>
        </nav>
      </div>
      <div className="h-12"></div>
    </>
  )
}

export default NavBar
