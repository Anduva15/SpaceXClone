import Logo from './logo.png'
import ButtonSidebar from './ButtonSidebar';




const Header = () => {

const NavLink = props => {
  return  <li className='mx-8 mb-0 relative '> 
        <a className='after:absolute after:bottom-0 after:left-0  after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform hover:after:origin-left  hover:after:scale-x-100' 
        href={props.link}>
            {props.children}
        </a>
    </li>
};

    return (
        <>
        <header className="font-familjen text-white position fixed t-0 l-0 z-[2] flex uppercase h-[100px] ml-40 pt-16 align-center  sm:">
            
            <div>
                <a className='h-auto' href="./" >
                    <img className='h-auto w-[226px] block' src={Logo} alt=""/>
                </a>
            </div>
           
            <nav className=''>
                <ul className='flex  mt-2'>
                <NavLink link="Falcon.html">Falcon 9</NavLink>
                <NavLink link="FalconHeavy.html">Falcon Heavy</NavLink>
                <NavLink link="Dragon.html/">Dragon</NavLink>
                <NavLink link="/">Starship</NavLink>
                <NavLink link="/">Human SpaceFlight</NavLink>
                <NavLink link="/">Rideshare</NavLink>
                <NavLink link="/">Starshield</NavLink>
                <NavLink link="/">Starlink</NavLink>
                <NavLink link="/Shop">Starlink</NavLink>
                </ul>
            </nav>
           
           
        </header>
        <ButtonSidebar/>
        </>
    )
}

export default Header;