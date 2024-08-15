interface NavModalContextType{
    navMenuOpen: boolean,
    modalOpen: boolean,
    openNavMenu: () => void,
    closeNavMenu: () => void,
    openModal: () => void,
    closeModal: () => void
}
interface PropsType{
    children?: React.ReactNode
}
interface ClassNameType extends PropsType{
    className?: string
}
interface ButtonType extends ClassNameType{
    action: "openNavMenu" | "closeNavMenu" | "openModal" | "closeModal"
}
interface SkillType{
    name: string,
    proficiency: string | number
}
interface ProjectType{
    name: string,
    desc: string,
    madeWith: string[],
    link?: string,
    img?: string
}
interface ReviewType{
    reviewer: string | "Anonymous",
    rating: string,
    quote: string,
    year?: string | number
}
export { type NavModalContextType, type PropsType, type ClassNameType, type ButtonType, type SkillType, type ProjectType, type ReviewType}