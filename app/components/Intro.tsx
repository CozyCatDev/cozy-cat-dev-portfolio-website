"use client";
import s from "@componentStyles/Intro.module.scss";
import TypeString from "./TypeString";
import OpenModalButton from "./OpenModalButton";

export default function Intro(){
    const strings: string[] = [
        "\"How to code with paws for hands?\"",
        "\"How to compile TypeScript to UwU?\"",
        "\"One Piece ep release date\"",
        "\"When is the next Steam sale?\""
    ];
    return(
        <section id="intro" className={s["intro"]} aria-labelledby="intro-heading" aria-describedby="intro-descn">
            <div className={`${s["wrapper"]} wrapper`}>
                <h1 id="intro-heading" className={s["heading"]}>
                    Hiya! Name&apos;s <br /><span>CozyCat</span>
                </h1>
                <p id="intro-desc" className={s["desc"]}>
                    You can call me Arthur. I&apos;m a <span>frontend web dev/designer doing freelance</span>. I&apos;m still learning but I&apos;m happy to hear your requests! Just send an email!
                </p>
                <OpenModalButton className={`${s["btn"]} btn btn--primary`}/>
                <div className={s["img-wrapper"]}>
                    <TypeString strings={strings}/>
                    <img className={s["cat-main"]} src="/images/main.webp" alt="" style={{objectFit: "contain"}}/>
                    <img className={s["cat-left-arm"]} src="/images/left-arm.webp" alt="" style={{objectFit: "contain"}}/>
                    <img className={s["cat-right-arm"]} src="/images/right-arm.webp" alt="" style={{objectFit: "contain"}}/>
                    <img className={s["cat-monitor"]} src="/images/monitor.webp" alt="" style={{objectFit: "contain"}}/>
                </div>
            </div>
        </section>
    )
}