import BarChart from "@components/BarChart";
import s from "@componentStyles/Skills.module.scss";
export default async function Skills(){
    return (
        <section id="skills" className={s["skills"]} aria-labelledby="skills-heading" aria-describedby="skills-desc">
            <div className={`${s["wrapper"]} wrapper`}>
                <h1 id="skills-heading" className={s["heading"]}>What I&apos;ve <br/><span>Learned</span></h1>
                <p id="skills-desc" className={s["desc"]}>My frontend journey started in 2020. I started out learning HTML, CSS and JS. Then, I moved on to full-stack web development with MERN and PHP.</p>
                <BarChart/>
            </div>
        </section>
    )
}