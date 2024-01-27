"use client";
import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';

const NotFound = () => {
  const [text, setText] = useState('404 - Page Not Found');
  const magicWriter = useTypewriter(text);

  useEffect(() => {
    if (magicWriter === '404 - Page Not Found') {
      setTimeout(() => {
        setText('');
      }, 2000);
    } else if (magicWriter === '') {
      setTimeout(() => {
        setText('404 - Page Not Found');
      }, 2000);
    }
  }, [magicWriter]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    
    <div className="flex flex-col min-h-screen items-center justify-center relative ">
        <p className="text-8xl font-bold text-center text-red-400 absolute z-10">
            {magicWriter}
            <span className="text-red-400 animate-blink">|</span>
        </p>
        <p className="text-8xl font-bold text-center text-red-600 absolute z-[-1] mt-1.5 mr-1.5">
            {magicWriter}
            <span className="text-red-600 animate-blink">|</span>
        </p>
        <p className="text-8xl font-bold text-center text-red-800 absolute z-[-2] mt-3 mr-3">
            {magicWriter}
            <span className="text-red-800 animate-blink">|</span>
        </p>
    </div>

  )
}

export default NotFound