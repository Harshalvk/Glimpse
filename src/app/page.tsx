import Hero from "@/components/Hero";
import Header from "../components/Header";
import LogoTicker from "@/components/LogoTicker";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials/>
      <CallToAction/>
    </>
  );
}
