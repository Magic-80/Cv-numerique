import Title from "../../components/Title/Title"
import Image from "../../components/Image/Image"
import cSharp from "../../assets/images/icons/cSharp.png";
import css from "../../assets/images/icons/css.png";
import html from "../../assets/images/icons/html.png";
import js from "../../assets/images/icons/js.png";
import blender from "../../assets/images/icons/blender.png";
import vuejs from "../../assets/images/icons/vuejs.png";
import figma from "../../assets/images/icons/figma.png";
import githubIcon from "../../assets/images/icons/github_icon.png";
import php from "../../assets/images/icons/php.png";
import mysql from "../../assets/images/icons/my-sql.png";
import photoshop from "../../assets/images/icons/photoshop.png";
import python from "../../assets/images/icons/python.png";


function Nav() {
    return (
        <>
            <section id="section_skills" className="skills">
                <Title className={"title"} text={"Mes"} span={"Compétences"} />
                <p className="skills_text">  Voici les languages et les logiciels qui je m’aîtrise ,     et que j’utilise</p>

                <div className="skills_box">
                    <Image className={"image_skills"} src={cSharp} alt="icone cSharp" />
                    <Image className={"image_skills"} src={css} alt="icone css" />
                    <Image className={"image_skills"} src={html} alt="icone html" />
                    <Image className={"image_skills"} src={js} alt="icone js" />
                    <Image className={"image_skills"} src={blender} alt="icone blender" />
                    <Image className={"image_skills"} src={vuejs} alt="icone vuejs" />
                    <Image className={"image_skills"} src={figma} alt="icone figma" />
                    <Image className={"image_skills"} src={githubIcon} alt="icone github" />
                    <Image className={"image_skills"} src={php} alt="icone php" />
                    <Image className={"image_skills"} src={mysql} alt="icone mysql" />
                    <Image className={"image_skills"} src={photoshop} alt="icone photoshop" />
                    <Image className={"image_skills"} src={python} alt="icone python" />
                </div>
            </section>
        </>
    )
}

export default Nav