import CreateRoom from "@/components/CreateRoom"
import RoomInButton from "@/components/RoomInButton"
export default function Home() {
  return (
    <main className="min-h-screen md:max-w-[60%] m-auto p-12">
      <RoomInButton />
      <CreateRoom />
    </main>
  )
}
