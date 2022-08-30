import React, { useEffect, useState, useContext } from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from "react-icons";
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    } from './NavbarElements';
    import { useSelector } from 'react-redux';



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const user = useSelector((state) => state.user.userInfo);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Wall
                    </NavLogo>
                    <IconContext.Provider value={{ color: "rgb(96, 187, 234)"}}>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                    </IconContext.Provider>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="wall"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Wall</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* {user && <NavLinks>Hello, {user.username}</NavLinks>} */}
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink> 
                        {/* if user is signed in then button changes to sign out */}
                    </NavBtn>
                    {/* <Logout onClick={logoutMethod()}><Logout/> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar