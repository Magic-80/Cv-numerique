import Title from "../../components/Title/Title"
import Image from "../../components/Image/Image"


function Nav()
{
    return (
        <>
            <section id="section_skills" className="skills">
                <Title className={"title"} text={"Mes"} span={"Compétences"} />
                <p className="skills_text">  Voici les languages et les logiciels qui je m’aîtrise ,     et que j’utilise</p>

                <div className="skills_box">

                    {/* TODO mettre en place des img en svg pour une meilleur qualité  */}
                    <Image className={"image_skills"} src={"/images/icons/cSharp.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/css.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/html.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/js.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/blender.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/vuejs.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/figma.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/github_icon.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/php.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/my-sql.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/photoshop.png"} alt={"icone css"} />
                    <Image className={"image_skills"} src={"/images/icons/python.png"} alt={"icone css"} />
                </div>
            </section>
        </>
    )
}

export default Nav