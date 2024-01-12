import RootLayout from "@/app/layout"

export default function Shabi() {
  return (
    <RootLayout title="傻逼">
        <div className="mt-16 bg-black">

            <div className="h-screen">
            <div className="w-full h-24 flex justify-between">
                <p className="text-xl mt-10 ml-16 font-semibold text-cyan-400">哈哈哈哈哈</p>
                <p className="text-xl mt-10 mr-16 font-semibold text-cyan-400">测试 001</p>
            </div>

            <div className="w-full h-100 mt-20 flex justify-between">
                <p className="text-6xl mt-10 ml-16 font-extrabold text-white">设计 <br /> DE DESIGN</p>
            </div>

            <div className="w-full h-100 mt-20 flex justify-between">
                <p className="text-3xl mt-10 ml-16 font-semibold text-cyan-400">你就是个 <br /> 傻逼</p>
            </div>
            </div>

            <div className="h-screen bg-white">

            </div>

        </div>
    </RootLayout>
  )
}