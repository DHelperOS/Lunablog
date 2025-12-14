"use client";

import React from "react";

export function Background() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[#0f0a1e]">
            {/* Subtle Silk/Aurora Effects */}
            <div className="absolute top-[-10%] left-[-10%] h-[1000px] w-[1000px] rounded-full bg-rose-500/10 blur-[150px] mix-blend-screen" />
            <div className="absolute top-[20%] right-[-20%] h-[800px] w-[800px] rounded-full bg-violet-500/10 blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-[-20%] left-[10%] h-[1200px] w-[1200px] rounded-full bg-indigo-500/5 blur-[180px] mix-blend-screen" />

            {/* Very Subtle Noise Texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        </div>
    );
}
