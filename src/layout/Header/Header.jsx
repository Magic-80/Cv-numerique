import Nav from "../Nav/Nav";
import Button from "../../components/Button/Button";

function Header()
{
    return(
        <>
            <header className="header">
                <Nav></Nav>
                <div className="header_row">
                    <div className="header_colum_left">
                        <p className="header_title"> Bonjour, je m’appelle <span> Théo </span> </p>
                        <p className="header_subtitle"> Etudiants en tant que Développeur Web  </p>
                        <p className="header_text">  Actuellement en recherche d’un stage et d’une alternance en développement web  </p>

                        <div className="header_button">
                            <Button type={"button"}  className={"button_about"} title={"About me"} />
                            <Button type={"button"}  className={"button_download"} title={"Télécharger mon cv"} />
                            <a href=""> <img src="/public/images/icons/linkedin-icon.png" alt="" /> </a>
                            <a href=""> <img src="/public/images/icons/github_icon.png" alt="" /> </a>
                        </div>

                    </div>
                    <div className="header_colum_right">
                        <img src="/public/images/backgrounds/header_img.png" alt="img de représentation" />
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header