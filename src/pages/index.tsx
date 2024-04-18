import Layout from "@/components/layout";
import Hero from "@/sections/Hero";
import FeaturedProducts from "@/sections/FeaturedProducts";
import Features from "@/sections/Features";
import FollowUs from "@/sections/FollowUs";
import Contact from "@/sections/Contact";
import Slider from "@/components/featured/Banner";
import Parallax from "@/sections/Parallax";
import Welcome from "@/sections/Welcome";

export default function Home() {
  return (
    <Layout title="InstaInvitely" description="feferfwes">
      <Hero />
      <Welcome />
      <Slider />
      <FeaturedProducts />
      <Features id={0} name={""} description={""} />
      <FeaturedProducts />
      <Parallax />
      <FollowUs />
      <Contact />
    </Layout>
  );
}
