function Nav()
{
    return (
        <>
            <div className="navbar_center">
                <nav className="navbar">
                    <ul className="navbar_links">
                        <div className="navbar_links-left">
                            <li> <a href=""> <img src="/public/images/logos/nav_logo.png" alt="" /> </a> </li>
                            <li> <a href=""> <span> Deruelle </span> Théo </a> </li>
                        </div>
                        <div className="navbar_links-right">
                            <li> <a href=""> Acceuil </a> </li>
                            <li> <a href="#section_about"> Présentation </a>  </li>
                            <li> <a href=""> Compétence </a> </li>
                            <li> <a href=""> Projet </a> </li>
                            <li> <a href=""> Projet </a> </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav