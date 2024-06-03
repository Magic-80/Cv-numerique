import Title from "../../components/Title/Title"
import BoxExperience from "../../components/BoxExperience/BoxExperience";

function Experience()
{
    return (
        <>
            <section id="section_experience" className="experience">    
                    <Title className={"title"} text={"Mes"} span={"Expériences"} />
                    <p className="experience_text">  Voici mes formations , mes stages , là ou j’ai travaillé , ainsi que mes diplômes </p>
                    <BoxExperience></BoxExperience>

            </section>
        </>
    )
}

export default Experience