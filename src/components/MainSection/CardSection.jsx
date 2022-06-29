import React from "react";
import './CardSection.css'
import './CardSectionSide.css'

function CardSection() {
    return (
        <>
            <div className="CardSection-Container">
                <div className="cardSection">
                    <div className="SectionRow">
                        <div className="mainCardSection">
                            <div className="mainCardSection-Category">Cinema</div>
                        </div>
                        <div className="mainCardInfo">
                            <h2 className="mainCardSection-Title">Titulo Massa</h2>
                            <div className="mainCardSection-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            <div className="mainCardSection-Date">
                                18/02/2000
                            </div>
                            <button className="ReadNews">Ler notícia</button>
                        </div>
                    </div>

                    <div className="SectionRow">
                        <div className="mainCardSection">
                            <div className="mainCardSection-Category">Cinema</div>
                        </div>
                        <div className="mainCardInfo">
                            <h2 className="mainCardSection-Title">Titulo Massa</h2>
                            <div className="mainCardSection-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            <div className="mainCardSection-Date">
                                18/02/2000
                            </div>
                            <button className="ReadNews">Ler notícia</button>
                        </div>
                    </div>

                    <div className="SectionRow">
                        <div className="mainCardSection">
                            <div className="mainCardSection-Category">Cinema</div>
                        </div>
                        <div className="mainCardInfo">
                            <h2 className="mainCardSection-Title">Titulo Massa</h2>
                            <div className="mainCardSection-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            <div className="mainCardSection-Date">
                                18/02/2000
                            </div>
                            <button className="ReadNews">Ler notícia</button>
                        </div>
                    </div>

                    <div className="SectionRow">
                        <div className="mainCardSection">
                            <div className="mainCardSection-Category">Cinema</div>
                        </div>
                        <div className="mainCardInfo">
                            <h2 className="mainCardSection-Title">Titulo Massa</h2>
                            <div className="mainCardSection-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            <div className="mainCardSection-Date">
                                18/02/2000
                            </div>
                            <button className="ReadNews">Ler notícia</button>
                        </div>
                    </div>

                    <div className="SectionRow">
                        <div className="mainCardSection">
                            <div className="mainCardSection-Category">Cinema</div>
                        </div>
                        <div className="mainCardInfo">
                            <h2 className="mainCardSection-Title">Titulo Massa</h2>
                            <div className="mainCardSection-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            <div className="mainCardSection-Date">
                                18/02/2000
                            </div>
                            <button className="ReadNews">Ler notícia</button>
                        </div>
                    </div>

                    <div className="SectionRow">
                        <div className="mainCardSection">
                            <div className="mainCardSection-Category">Cinema</div>
                        </div>
                        <div className="mainCardInfo">
                            <h2 className="mainCardSection-Title">Titulo Massa</h2>
                            <div className="mainCardSection-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            <div className="mainCardSection-Date">
                                18/02/2000
                            </div>
                            <button className="ReadNews">Ler notícia</button>
                        </div>
                    </div>
                </div>
                <div className="CardSectionSide">
                    <div className="SideTitle">
                        <h1>Titulo</h1>
                        <div className="borderPurple"></div>
                    </div>
                    <div className="CardSection-SideCard">
                        <div className="CardSection-SideCard-Category">Política</div>
                        <div className="CardSection-SideCard-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum pariatur quae consequuntur tenetur.</div>
                    </div>
                    <div className="CardSection-SideCard">
                        <div className="CardSection-SideCard-Category">Saúde</div>
                        <div className="CardSection-SideCard-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum pariatur quae consequuntur tenetur.</div>
                    </div>
                    <div className="CardSection-SideCard">
                        <div className="CardSection-SideCard-Category">Educação</div>
                        <div className="CardSection-SideCard-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum pariatur quae consequuntur tenetur.</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardSection;