import React from "react";
import './Container.css'
import './MainCard.css'
import './SideCard.css'

function MainCard() {
    return (
        <>
            <div className="Container">
                <div className="Top">
                    <div className="MainCard">
                        <div className="category">Política</div>
                        <div className="news-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolor nihil id, blanditiis fugiat assumenda quod ut dignissimos voluptatem numquam magni voluptatum eum illo iste deserunt fuga recusandae voluptates ducimus!</div>
                    </div>

                    <div className="SideCard">
                        <div className="MainSideCard">
                            <div className="side-category">Esportes</div>
                            <div className="sideNews">Lorem ipsum dolor</div>
                        </div>
                        <div className="MainSideCard">
                            <div className="side-category">Esportes</div>
                            <div className="sideNews">Lorem ipsum dolor</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainCard