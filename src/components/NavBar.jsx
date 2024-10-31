
import { useState } from "react";
import Link from "./link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
      ];
      
    
      
    return (

        <nav>
           <div className="md:hidden text-2xl p-6 bg-yellow-200" onClick={() => setOpen(!open)}>
            {
                open === true ?  <AiOutlineClose  />:
                <AiOutlineMenu  />
            }
           
           

           </div>
           <ul className={`md:flex absolute p-6 duration-1000 bg-yellow-300 ${open ? 'top-16': '-top-60'} md:static`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default NavBar;