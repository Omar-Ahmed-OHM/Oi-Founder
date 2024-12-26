"use client";
import React, { useState } from "react";
type ActiveNavProps = {
    active: boolean;
    pause:number
}
export const ActiveNav: React.FC<ActiveNavProps> = ({ active: initialActive, pause: initialPause }) => {
    const [active, setActive] = useState<boolean>(initialActive);
    const [pause, setPause] = useState<number>(initialPause);

    const current = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > pause) {
            setActive(false);
        } else {
            setActive(true);
        }
        setPause(currentScroll);
    };

    return (
        <>
        </>
    );
}