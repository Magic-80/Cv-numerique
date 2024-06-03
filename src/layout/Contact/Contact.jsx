import Title from "../../components/Title/Title";
import CopyText from "../../components/CopyText/CopyText";

function About() {
  return (
    <>
      <section id="contact_section" className="contact">
          <Title className={"title"} text={"Contacter"} span={"Moi"} />
          <div className="contact_text">
            <p> Besoin d’un développeur web créatif et motivé ? </p>
            <p> Parlons-en ! </p>
          </div>

          <CopyText></CopyText>
      </section>
    </>
  );
}

export default About;
