import RootLayout from "@/app/layout"

export default function Projects() {
  return (
    <RootLayout title="Xypheral | Projects"> {/* Set the title prop here */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-red-400">My Projects</h1>
      </div>

      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-red-400">Page 2</h1>
      </div>

      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-red-400">Page 3</h1>
      </div>
    </RootLayout>
  )
}