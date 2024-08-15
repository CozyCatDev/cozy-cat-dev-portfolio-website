"use client";

import { createContext, useContext, useState } from "react";
import { NavModalContextType, PropsType } from "@customTypes/declarations";

const NavModalContext = createContext<NavModalContextType | null>(null);

export default function NavModalProvider({children}: PropsType){

    const [navMenuOpen, setNavMenuOpen] = useState(false); 
    const [modalOpen, setModalOpen] = useState(false);

    const openNavMenu = () => {
        setNavMenuOpen(true);
    }
    const closeNavMenu = () => {
        setNavMenuOpen(false);
    }
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const navModalActions: NavModalContextType = {
        navMenuOpen,
        modalOpen,
        openNavMenu,
        closeNavMenu,
        openModal,
        closeModal
    };

    return (
        <NavModalContext.Provider value={navModalActions}>
            {children}
        </NavModalContext.Provider>
    ) 
}

export const useNavModal = (): NavModalContextType | null => useContext(NavModalContext);

