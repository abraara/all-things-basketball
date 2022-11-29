import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import LoginButton from "./LoginButton";

function NavBar() {
    return ( 
        <nav className="p-2 bg-gradient-to-t from-orange-500 to-yellow-300 shadow relative flex justify-between items-center">
          <NavBarBranding/>
          <NavBarLinks/>
          <LoginButton className="md:block text-right"/>
          <MobileMenuButton className="md:hidden"/>
        </nav>
     );
}

export default NavBar;

