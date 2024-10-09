import Hero from "@/components/Hero";
import Header from "../components/Header";
import LogoTicker from "@/components/LogoTicker";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker/>
      <ProductShowcase/>
    </>
  );
}
