import { ProjectType } from "@customTypes/declarations";
import { getData } from "@db/db";
import Cards from "./Cards";
import s from "@componentStyles/Projects.module.scss";
export default async function Projects(){
    const projects: ProjectType[] = await getData("projects");
    return (
        <section id="projects" className={s["projects"]} aria-labelledby="projects-heading" aria-describedby="projects-desc">
            <div className={`${s["wrapper"]} wrapper`}>
                <h1 id="projects-heading" className={s["heading"]}>Check Out My <span>Projects</span></h1>
                <p id="projects-desc" className={s["desc"]}><span>Fun fact:</span> this website was made with Next JS, Cloud Firestore and SCSS. Little over-engineered for a portfolio but hey, I learned a lot from it :D</p>
                <button className={`${s["btn"]} btn btn--secondary`} aria-label="View my CodePen">View My CodePen</button>
                <Cards projects={projects}/>
            </div>
        </section>
    )
}