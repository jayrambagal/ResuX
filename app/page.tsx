import Banner from "@/components/landing/Banner";
import LandingPage from "@/components/landing/Home";
import { Footer, Navbar } from "@/components/static";
import { MobileNavBar } from "@/components/static/MobileNavbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <LandingPage />
      <Banner />
      <Footer />
      <MobileNavBar />
    </section>
  )
}
