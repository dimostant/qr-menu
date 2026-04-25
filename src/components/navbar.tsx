import { FaMagnifyingGlass } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="w-screen h-12 bg-gray-300 grid grid-cols-2 justify-center place-items-center">
      <div className="text-lg">QR Menu</div>
      <FaMagnifyingGlass/>
    </div>
    
  )
}

export default NavBar;
