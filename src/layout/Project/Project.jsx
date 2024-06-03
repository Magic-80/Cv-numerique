import Title from "../../components/Title/Title"
// import Image from "../../components/Image/Image"
import BoxProject from "../../components/BoxProject/BoxProject"

function Project()
{
    return (
        <>
            <section id="section_project" className="project">
                <Title className={"title"} text={"Mes"} span={"Projets"} />

                <nav className="project_nav">
                    <ul className="project_nav_content">
                        <li className="project_nav_content_li"> <a href="#"> Tout </a> </li>
                        <li  className="project_nav_content_li"> <a href="#"> Web-Desing </a> </li>
                        <li  className="project_nav_content_li"> <a href="#"> Front-End </a> </li>
                        <li  className="project_nav_content_li"> <a href="#"> Back-End </a> </li>
                    </ul>
                </nav>

                <BoxProject></BoxProject>
                
            </section>
        </>
    )
}   

export default Project