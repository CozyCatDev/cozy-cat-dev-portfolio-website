"use client";
import Typewriter from "typewriter-effect";

export default function TypeString({strings}: {strings: string[]}){
    return <div aria-hidden="true"><Typewriter options={{
        strings: strings,
        autoStart: true,
        loop: true,
        delay: 150,
        deleteSpeed: 50
    }}/></div>
}