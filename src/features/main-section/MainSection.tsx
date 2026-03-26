'use client';
import TypingText from '@/components/typing-text';
import { ArrowInDownSquareHalf } from '@boxicons/react';

const MainSection = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col w-1/2 gap-8">
                <div className="flex self-start items-center gap-2 bg-primary-bg border border-primary-border rounded-full px-3 h-8">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className='text-primary-text text-xs uppercase font-semibold'>Available for projects - 2026</p>
                </div>
                <h1 className="text-7xl font-black text-white">José <span className="bg-linear-to-r from-primary-text to-foreground bg-clip-text text-transparent">Santana</span></h1>
                <p className="text-primary-text text-xl">I&apos;m <span className="text-white font-semibold">José Santana</span>, a professional <TypingText /><br />
                    Dedicated to building high-performance, user-centric web applications.</p>
                <div className="flex items-center gap-6">
                    <button className="bg-white rounded-full px-6 h-14 uppercase font-semibold text-primary-bg cursor-pointer flex items-center gap-3 justify-center">
                        view my work
                    </button>
                    <button className="bg-primary-bg border border-primary-border rounded-full px-6 h-14 uppercase cursor-pointer font-semibold text-white flex items-center gap-3 justify-center">
                        get resume
                        <ArrowInDownSquareHalf />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
