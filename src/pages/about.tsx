import RootLayout from "@/app/layout"
import Card from "@/components/Card"

export default function About() {
  return (
    <RootLayout title="Xypheral | About">
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-red-400">About Me</h1>
      </div>

      <div className="flex items-center justify-center h-screen bg-white">
        <Card bannerImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/93219448-4662-47cb-b585-be7672a62984/de49dt6-48593d27-fd3b-457f-bd43-952daf147d8e.png/v1/fill/w_1550,h_516,q_70,strp/deku_header___my_hero_academia_by_ialesander_de49dt6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOTMyMTk0NDgtNDY2Mi00N2NiLWI1ODUtYmU3NjcyYTYyOTg0XC9kZTQ5ZHQ2LTQ4NTkzZDI3LWZkM2ItNDU3Zi1iZDQzLTk1MmRhZjE0N2Q4ZS5wbmciLCJ3aWR0aCI6Ijw9MjE2MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.143LqDIgIbZQLoYGqRreJ01iw1ErovyTHW7qWf2GH-8">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl text-white">About</h1>
          </div>
        </Card>
      </div>
    </RootLayout>
  )
}