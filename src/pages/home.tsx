import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';

export default function Home() {
  const [text, setText] = useState('Xypheral');
  const magicWriter = useTypewriter(text);

  useEffect(() => {
    if (magicWriter === 'Xypheral') {
      setTimeout(() => {
        setText('');
      }, 2000);
    } else if (magicWriter === '') {
      setTimeout(() => {
        setText('Xypheral');
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
    <main className="flex flex-col items-center justify-center">
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
  
        <div className="h-60"></div>
        <p className="text-4xl text-yellow-400 font-bold text-center">🚧 Currently under development! 🚧</p>
        {/* <p className="text-4xl font-bold text-center">Welcome to my page!</p> */}
      </div>
    </main>
    )
}