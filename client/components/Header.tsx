
const Header = () => {
  return (
 
    
    <header className="fixed py-3 top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-[#29292B]  text-white flex justify-around items-center">
      <h1 className="flex items-center font-bold text-2xl"><span>Emergent</span><span className="text-[#DAFF00]">.</span></h1>
      <nav>
        <ul className="flex space-x-8 font-light">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#why-us">Why Us</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <a href="#contact">
        <button className="bg-[#DAFF00] text-black px-8 font-semibold py-4 rounded-xl">Get Started</button>
      </a>
    </header>
  )
}

export default Header
