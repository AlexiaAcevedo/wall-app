import React from 'react'
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
                    <BtnLink to={"/signin"}>Sign In</BtnLink>
                </BtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar