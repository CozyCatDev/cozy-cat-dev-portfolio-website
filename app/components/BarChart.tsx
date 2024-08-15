import { getData } from "@db/db";
import { SkillType } from "../customTypes/declarations";
import s from "@componentStyles/BarChart.module.scss";

export default async function BarChart(){
    const skills: SkillType[] = await getData("skills");
    return (
        <div className={s["bar-chart"]} aria-labelledby="bar-chart-heading" aria-describedby="bars">
            <h2 id="bar-chart-heading" className={s["heading"]}>Proficiency (%)</h2>
            <div id="bars" className={s["bars"]} style={{"--bar-num": skills.length} as React.CSSProperties}>
                {skills.map((skill, idx) => (
                    <div className={s["bar-group"]} key={idx} aria-labelledby={`${idx}-skill-name`} aria-describedby={`${idx}-proficiency`}>
                        <div className={s["bar"]} style={{"--bottom": skill.proficiency} as React.CSSProperties}>
                            <h2 id={`${idx}-proficiency`} className={s["proficiency"]}>{skill.proficiency}</h2>
                            <div className={s["bar-shape"]}></div>
                        </div>
                        <span id={`${idx}-skill-name`} className={s["label"]}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}