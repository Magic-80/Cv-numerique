import Button from "../../components/Button/Button"
import Title from "../../components/Title/Title"
function About()
{
    return (
        <>
            <section id="section_about" className="about">
                    <div className="about_background">
                        <Title className={"title"} text={"A Propos "} span={"De Moi"} />
                        <div className="about_content">
                            <div className="about_content_left">
                                <p> 
                                    👨‍💻 Bonjour, je m’appelle Théo et je suis passionné par l’informatique depuis mon plus jeune âge. Actuellement en deuxième année de ma formation à La Manu, 
                                    je me plonge davantage dans 
                                    le monde du web pour approfondir 
                                    mes connaissances. Mon objectif est 
                                    de faire de cette passion mon métier à l’avenir.
                                </p>
                                <p>
                                    💼 Actuellement à la recherche d’une opportunité de stage en développement web, je suis déterminé à mettre en pratique mes compétences acquises tout en continuant à 
                                    apprendre dans un environnement professionnel. 
                                    Mon objectif est de contribuer à des projets professionnel et de voir l’envers du décor.
                                </p>
                                <p>
                                    🌐 Ma passion pour l’informatique m’a motivé à explorer différentes facettes du développement, notamment le jeux vidéo et le web et 
                                    je suis prêt à relever de nouveaux défis.
                                </p>
                                <p>
                                    🚀 Si vous recherchez un stagiaire enthousiaste et motivé pour rejoindre votre équipe en développement web, ou si vous avez des conseils à partager, 
                                    n’hésitez pas à me contacter. Je suis ouvert aux opportunités et prêt à contribuer dès maintenant.
                                </p>
                            </div>

                            <div className="about_content_right">
                                <img src="/images/logos/photo-identiter.png" alt="" />
                                <Button type={"button"} className={"button_color_blue"} title={"Télécharger mon cv"}/>
                            </div>
                        </div>
                    </div>
                    
            </section>

        </>
    )
}

export default About