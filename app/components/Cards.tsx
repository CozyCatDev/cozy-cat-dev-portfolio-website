"use client"
import Card from "./Card";
import s from "@componentStyles/Cards.module.scss";
import { ProjectType } from "@customTypes/declarations";
import { useRef } from "react";

export default function Cards({ projects }: { projects: ProjectType[] }){
    const cardsRef = useRef<any>(null);
    const handleCardClick = (e: any): void => {
        const cards = cardsRef.current?.children;
        Array.from(cards).forEach((card: any) => {
            card.dataset.num = card.dataset.num <= 0 ? projects.length - 1 : card.dataset.num - 1;
        });
    }
    return (
        <div className={s["cards"]} ref={cardsRef} style={{"--num": projects.length} as React.CSSProperties} onClick={(e) => handleCardClick(e)}>
            {projects.map((project, idx) =>
                <Card project={project} key={idx} projectId={idx}/>
            )}
        </div>
    )
}