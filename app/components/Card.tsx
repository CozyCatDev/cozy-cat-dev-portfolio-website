"use client";

import s from "@componentStyles/Card.module.scss";
import { ProjectType } from "@customTypes/declarations";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function Card({project, projectId}: {project: ProjectType, projectId: number}){
    const styles = {
        "--order": projectId,
        backgroundImage: `url(${project.img})`
    } as React.CSSProperties;
    
    return (
        <div className={s["card"]} style={styles} data-num={projectId} aria-labelledby={`${projectId}-heading`} aria-describedby={`${projectId}-desc`}>
            <div className={s["info"]}>
                <h2 id={`${projectId}-heading`} className={s["name"]}>{project.name}</h2>
                <p id={`${projectId}-desc`} className={s["desc"]}>
                    Made with<br/>
                    {project.madeWith.reduce((prev, curr) => `${prev} + ${curr}`)}
                </p>
                <Link href={project.link as Url} target="_blank" aria-label="View CodePen"><button className={`${s["btn"]} btn btn--primary`}>View CodePen</button></Link>
            </div>
        </div>
    )
}