import React, {useState} from "react";
import ReactDOM from 'react-dom'
import "./exp.css"
 

const ButtonSidebar = () => {

    const [isActive, setIsActive] = useState(false);
    const [overlayIsActive, setOverlayIsActive] = useState(false);
    const [SidebarIsActive, setSidebarIsActive] = useState(false);

    const LinkSidebar = props => {
        return <li className="relative text-white border-b border-white text-right py-4 hover:text-[#808080] font-mono">
            <a href={props.link} className=" w-full  mr-10 ">
                        {props.children}
            </a>    
            </li>
    };
    
     const Sidebar = () => {
        return(
        <div className={SidebarIsActive ? "sidebarShow" : "sidebarHidden"} >
        <nav className="flex flex-col mt-24">
            <ul>
                <LinkSidebar link="Mission.html" >Mission</LinkSidebar> 
                <LinkSidebar link="Lanches.html">Launches</LinkSidebar> 
                <LinkSidebar link="Careers.html">Careers</LinkSidebar>
                <LinkSidebar link="Updates.html">Updates</LinkSidebar>  
                <LinkSidebar link="Shop.html">Shop</LinkSidebar> 
            </ul>
        </nav>
    </div>
    )
    };
    
    const Overlay = () => {
        return <div className={overlayIsActive ? "overlayShow" : "overlayHidden"}>
            
        </div>
    }
    

   
    const navToggleHandler = (event) => {
        setIsActive(isActive => !isActive);
        setOverlayIsActive(overlayIsActive => !overlayIsActive);
        setSidebarIsActive(sidebarIsActive => !sidebarIsActive);
        document.body.classList.toggle('no-scroll');
      
    }

    return (
    <>
     {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
     {ReactDOM.createPortal(<Sidebar sidebarIsActive={SidebarIsActive}/>, document.getElementById("sidebar"))}
    <button type="button" className={isActive ? "openButton sideBarButton " : "sideBarButton"} onClick={navToggleHandler}>
        <span className="buttonSpan1"></span>
        <span className="buttonSpan2 translate-y-2"></span>
        <span className="buttonSpan3 translate-y-4"></span>
    </button>
    </>)
};

export default ButtonSidebar;