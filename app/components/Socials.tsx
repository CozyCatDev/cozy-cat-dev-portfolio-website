import s from "@componentStyles/Socials.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faUpwork } from "@fortawesome/free-brands-svg-icons";

export default function Socials(){
    return (
        <ul className={s["socials"]} aria-label="social links">
            <li className={s["social"]} aria-label="social link">
                <Link href="" target="_blank" aria-label="Github profile">
                    <FontAwesomeIcon icon={faGithub}/>
                </Link>
            </li>
            <li className={s["social"]} aria-label="social link">
                <Link href="" target="_blank" aria-label="CodePen profile">
                    <FontAwesomeIcon icon={faCodepen}/>
                </Link>
            </li>
            <li className={s["social"]} aria-label="social link">
                <Link href="" target="_blank" aria-label="Upwork profile">
                    <FontAwesomeIcon icon={faUpwork}/>
                </Link>
            </li>
        </ul>
    )
}