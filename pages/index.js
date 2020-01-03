import Layout from "../components/Layout";
import React from "react";

class Index extends React.Component {
    static async getInitialProps({ req }) {
        const content = {
            slogan: "From the mundane to the insane"
        };
        return content;
    }
    render() {
        const wallpapers = ["eva", "eva", "eva"];
        return (
            <Layout>
                <div className="bio">
                    <section className="wallpaper-container">
                        <picture>
                            <img src="../static/eva.png" />
                        </picture>

                        <picture id="center">
                            <img src="../static/eva.png" />
                        </picture>

                        <picture>
                            <img src="../static/eva.png" />
                        </picture>
                    </section>

                    <div className="slogan-container">{this.props.slogan}</div>
                    <div className="under"></div>
                </div>

                <style jsx>{`

    
                    .bio {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .wallpaper-container{
                        display: grid;
                        width: 100vw;
            
                        overflow-x: scroll;
                        grid-template-rows: 25%;
                        grid-template-columns: [head-zoomed] 3fr 4fr [sea-zoomed] 3fr;
                        grid-column-gap: 1rem; 
                        justify-items: center;
                    }
                    .wallpaper-container img{
                        object-fit: cover;
                        max-width: 30vw;
                        justify-self: stretch;
                    }
                    #center{
                        /* make column gaps look smaller by scaling the 
                        center image */
                        transform: scaleX(1.3);
                    }
                    @media (max-width: 90rem){
                        .wallpaper-container picture:not(#center){
                            display: none;
                        }
                        .wallpaper-container{
                            justify-items: stretch;
                        }
                        #center img{
                            max-width: none;
                            width: 100vw;
                            grid-column: 1 / -1;
                            transition: grid-column 2s;
                        } 
                    } 
                `}</style>
            </Layout>
        );
    }
    renderWallpaper() {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(<img src={`../static/eva.png`} alt="" id={`wallpaper${i}`} className="wallpaper" key={`${i} `} />);
        }
        return arr;
    }
}
export default Index;
