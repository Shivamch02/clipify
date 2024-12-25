import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="pt-6 xl:px-32 lg:px-24 md:px-10 px-6 bg-gradient-to-r to-black from-gray-900 h-full">
      <Header />
      <Hero />
    </div>
  );
}
