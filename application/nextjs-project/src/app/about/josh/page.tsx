import type { Metadata } from "next";
import '../josh/page.css';

export const metadata: Metadata = {
    title: "Josh",
};

const About = () => {
  return (
    <div className="container">
      <h1>Joshua Abrenica</h1>
      <h2>Scrum Master & Github Master</h2>
    </div>
  );
};

export default About;