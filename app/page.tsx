import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Projects/>
    </main>
  )
}
