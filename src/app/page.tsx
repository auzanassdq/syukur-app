import CommunityStory from "@/components/community-story";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Howitwork/> */}
      <CommunityStory />
    </div>
  );
}
