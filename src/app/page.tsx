import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturedProject } from "@/components/sections/featured-project";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { TechWall } from "@/components/sections/tech-wall";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProject />
        <ProjectsGrid />
        <TechWall />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
