import Image from "next/image";
import NavMenu from "./NavMenu";
import s from "@componentStyles/Header.module.scss";

export default function Header(){
    return (
        <header className={s["header"]}>
            <nav className={s["nav"]}>
                <div className={`${s["wrapper"]} wrapper`}>
                    <h1 className={s["logo"]}>
                        <Image className={s["logo-img"]} src="/images/logo-fill.svg" alt="CozyCat logo" width={46} height={46}></Image>
                        <span className={s["logo-name"]}>CozyCat</span>
                    </h1>
                    <NavMenu/>
                </div>
            </nav>
        </header>
    )
}