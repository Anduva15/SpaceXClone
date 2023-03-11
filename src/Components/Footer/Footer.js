

const Footer = () => {
    const FooterLink = props => {
        return <li className="mr-9 text-white hover:transition-opacity hover:opacity-50"><a href={props.link}>{props.children}</a></li>
    };

   return <footer className="relative py-14 uppercase text-sm bg-black lg:flex justify-center">
    <div className="w-full text-center lg:w-fit lg:mr-8">
        <a className=" text-[#aaa] text-center ">SpaceX 2023</a>
    </div>
        <ul className="flex justify-center align-middle flex-wrap">
        
        <FooterLink link="Twitter.com">Twitter</FooterLink>
        <FooterLink link="Instagram.com">Instagram</FooterLink>
        <FooterLink link="Flickr.com">Flickr</FooterLink>
        <FooterLink link="linkedin.com">Linkedin</FooterLink>
        <FooterLink link="">Privacy</FooterLink>
        <FooterLink link="">Suppliers</FooterLink>
    

        
        </ul>
    </footer>
}

export default Footer;