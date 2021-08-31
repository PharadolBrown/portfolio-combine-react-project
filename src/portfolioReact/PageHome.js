import MenuBar from "./nav/MenuBar";
import Header from "./section/Header";
import Skill from "./section/Skill";
import About from "./section/About";
import Achievement from "./section/Achievement";
import Contact from "./section/Contact";

export default function PageHome() {
  return (
    <div >
      <MenuBar />
      <Header />
      <About />
      <Skill />
      <Achievement />
      <Contact />
    </div>
  );
}
