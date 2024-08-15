"use client";
import { useNavModal } from "./NavModalProvider";
import { ClassNameType, NavModalContextType } from "@customTypes/declarations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function OpenModalButton({ className }: ClassNameType){
    const {openModal, closeNavMenu} = useNavModal() as NavModalContextType;
    return (
        <button className={className} onClick={() => {openModal(); closeNavMenu();}} aria-label="Email Me"><span>Email Me</span><FontAwesomeIcon icon={faEnvelope}/></button> 
    )
}