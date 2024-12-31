import CommunityStory from "@/components/community-story";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <div className="py-24 text-center">
      <div className="container max-w-xl mx-auto">
        <h1 className="text-5xl">Support</h1>
        <p className="mt-10 text-xl font-medium">
          <span className="font-bold">Makasih</span> adalah platform untuk kamu
          yang ingin merefleksikan kebahagiaan kecil yang kamu rasakan. Platform
          ini dapat kamu gunakan secara{" "}
          <span className="font-bold">gratis</span>. Kalau kamu suka terkait
          platform ini dan mungkin ada saran atau support yang ingin kamu
          berikan, kamu bisa memberikan dukungan melalui tombol di bawah ini.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button>Feedback</Button>
          <Button>
            <Link href={"https://saweria.co/auzanassdq"} target="_blank">Saweria</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
