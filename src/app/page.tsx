import { Body } from "@/components/Body";
import { AppContainer } from "@/components/Container";
import { Header } from "@/components/Header";
import { MeetupDescription } from "@/components/MeetupDescription";
import { SuggestedCafes } from "@/components/SuggestedCafes";

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <MeetupDescription />
      <SuggestedCafes />
      <Body />
    </AppContainer>
  );
}
