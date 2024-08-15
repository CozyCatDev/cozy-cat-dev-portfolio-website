"use client";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavModal } from "./NavModalProvider";
import { NavModalContextType } from "@customTypes/declarations";
import s from "@componentStyles/NavMenu.module.scss";
import OpenModalButton from "./OpenModalButton";

export default function NavMenu(){
    const { navMenuOpen, openNavMenu, closeNavMenu } = useNavModal() as NavModalContextType;
    return (
        <>
            <ul className={s["links"]} data-show-nav={navMenuOpen}>
                <li className={s["link"]}><a href="#intro">Intro</a></li>
                <li className={s["link"]}><a href="#skills">Skills</a></li>
                <li className={s["link"]}><a href="#projects">Projects</a></li>
                <li className={s["link"]}><OpenModalButton className={`${s["email-btn"]} btn btn--primary`}/></li>
            </ul>
            <button className={s["open-nav-btn"]} onClick={navMenuOpen ? closeNavMenu : openNavMenu} aria-label="open nav menu button">{<FontAwesomeIcon icon={navMenuOpen ? faXmark : faBars}/>}</button>
        </>
    )
}