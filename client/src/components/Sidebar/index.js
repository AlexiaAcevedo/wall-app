import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    BtnWrap,
    BtnLink
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    let { logoutUser, user } = useContext(AuthContext);
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="wall" onClick={toggle}>Wall</SidebarLink>
                </SidebarMenu>
                <BtnWrap>
                    {user ? (
                        <BtnLink to="/" onClick={logoutUser}>Log Out</BtnLink>
                    ) : (
                        <BtnLink to={"/signin"}>Sign In</BtnLink>
                    )}
                </BtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar