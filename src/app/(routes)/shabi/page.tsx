import React from 'react'

const Shabi = () => {
  return (
    <>
        <div className="relative bg-black h-screen flex flex-col justify-between">

        <div className="absolute left-6 top-40 bottom-6 w-1 bg-cyan-400">
            <p className="text-sm transform -rotate-90 absolute top-[-50px] left-[-21px] whitespace-nowrap text-cyan-400">Design</p>
        </div>

        <div className="w-full h-24 mt-20 flex justify-between">
            <p className="text-2xl mt-6 ml-16 font-semibold text-cyan-400">哈哈哈哈哈</p>
            <p className="text-2xl mt-6 mr-16 font-semibold text-cyan-400">测试 001</p>
        </div>

        <div className="w-full h-100 mb-8 flex justify-between">
            <p className="text-6xl ml-16 font-extrabold text-white translate-x-10">设计 <br /> DE DESIGN</p>
        </div>

        <div className="w-full h-100 mb-8 flex justify-between">
            <p className="text-2xl ml-16 font-semibold text-cyan-400">你就是个 <br /> 傻逼</p>
        </div>

        </div>

        <div className="relative h-screen bg-white flex flex-col justify-between">

        <div className="absolute left-6 top-40 bottom-6 w-1 bg-red-400">
            <p className="text-sm transform -rotate-90 absolute top-[-50px] left-[-21px] whitespace-nowrap text-red-400">Design</p>
        </div>

        <div className="w-full h-24 mt-20 flex justify-between">
            <p className="text-2xl mt-6 ml-16 font-semibold text-red-400">哈哈哈哈哈</p>
            <p className="text-2xl mt-6 mr-16 font-semibold text-red-400">测试 001</p>
        </div>

        <div className="w-full h-100 flex mb-8 justify-between">
            <p className="text-6xl ml-16 font-extrabold text-black translate-x-10">设计 <br /> DE DESIGN</p>
        </div>

        <div className="w-full h-100 mb-8 flex justify-between">
            <p className="text-2xl ml-16 font-semibold text-red-400">你就是个 <br /> 傻逼</p>
        </div>

        </div>

        <div className="relative bg-black h-screen flex flex-col justify-between">

        <div className="absolute left-6 top-40 bottom-6 w-1 bg-cyan-400">
            <p className="text-sm transform -rotate-90 absolute top-[-50px] left-[-21px] whitespace-nowrap text-cyan-400">Design</p>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-start">
            <p className="text-3xl ml-16 font-extrabold text-cyan-400 translate-x-10">1. 拥有掌控自我的能力</p>
            <p className="text-2xl ml-16 text-white translate-x-10 max-w-4xl">如果你无法长期努力，也许真的不是因为你不够自律，可能因为你自律的方式不够合理，自律是长期、持续的去保持做一件事，但合理的自律是锻炼，不合理的自律才是折磨。</p>
        </div>

        </div>
    </>
  )
}

export default Shabi