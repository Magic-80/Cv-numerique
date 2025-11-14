import nav_logo from "../../assets/images/logos/nav_logo.png"

function Nav()
{
    return (
        <>
            <div className="navbar_center">
                <nav className="navbar">
                    <ul className="navbar_links">
                        <div className="navbar_links-left">
                            <li> <a href=""> <img src={nav_logo} alt="Logo de représentation" /> </a> </li>
                            <li> <a href=""> <span> Deruelle </span> Théo </a> </li>
                        </div>
                        <div className="navbar_links-right">
                            <li> <a href=""> Acceuil </a> </li>
                            <li> <a href="#section_about"> Présentation </a>  </li>
                            <li> <a href="#section_experience"> Parcours </a> </li>
                            <li> <a href="#section_skills"> Compétence </a> </li>
                            <li> <a href="#section_project"> Projet </a> </li>
                            <li> <a href="#section_contact"> Contact </a> </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav