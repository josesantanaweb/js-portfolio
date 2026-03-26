'use client';
import { useState } from 'react';
import { Sun, Moon } from '@boxicons/react';
import { AnimatePresence, motion } from 'framer-motion';

const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');

    const handleToggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    };

    return (
        <button className="text-white text-2xl cursor-pointer transition-all duration-300" role="button" aria-label="toggle theme" onClick={handleToggleTheme}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                    {theme === 'light' ? <Sun /> : <Moon />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ToggleTheme;
