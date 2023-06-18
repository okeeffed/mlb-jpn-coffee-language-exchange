import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { MeetupDescription } from "@/components/MeetupDescription";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-4xl">
        <Header />
        <MeetupDescription />
        <Body />
      </div>
    </main>
  );
}
