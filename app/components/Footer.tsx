import Socials from "./Socials";
import s from "@componentStyles/Footer.module.scss";
export default function Footer(){
    return (
        <footer className={s["footer"]}>
            <div className={`${s["wrapper"]} wrapper`}>
                <p className={s["copyright"]}>&copy; CozyCat, 2024</p>
                <Socials/>
            </div>
        </footer>
    )
}