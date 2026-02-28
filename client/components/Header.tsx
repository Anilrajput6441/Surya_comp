
const Header = () => {
  return (
 
    
    <header className="fixed py-3 top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-900 flex justify-around items-center">
      <h1 className="flex items-center font-bold text-2xl"><span>BrandingWorkz</span><span className="text-teal-600">.</span></h1>
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
        <button className="bg-black text-white px-8 font-semibold py-4 rounded-xl">Get Started</button>
      </a>
    </header>
  )
}

export default Header
