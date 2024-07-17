import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
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
      <Education/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>

    </main>
  )
}
