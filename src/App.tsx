import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Crew } from "./components/Crew";
import { Goals } from "./components/Goals";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />
      <main>
        <Hero />
        <Crew />
        <Goals />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
