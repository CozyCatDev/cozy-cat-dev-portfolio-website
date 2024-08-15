import Header from "@components/Header";
import Modal from "@components/Modal";
import Intro from "@components/Intro";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Footer from "@components/Footer";

export default async function Page() {
  return (
    <>
    <Header/>
    <main className="main">
      <Modal/>
      <Intro/>
      <Skills/>
      <Projects/>
    </main>
    <Footer/>
    </>
  );
}