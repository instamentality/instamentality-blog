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
        const wallpapers = ["eva","eva","eva"];
        return (
            <Layout>
                <div className="bio">
                    <div className="wallpaper-container">

                    {wallpapers.map((wallpaper, i) => {
                        return (<img src={`../static/eva.png`} alt="" id={`wallpaper${i}`} className="wallpaper" key={`${i} `} />)
                    })}
                    </div>
                    <div className="slogan-container">{this.props.slogan}</div>
                </div>

                <style jsx>{`
                    @media screen and (max-width: 600px) {
                        .wallpaper {
                            display: none;
                        }
                        #wallpaper1 {
                            display: block;
                        }
                    }
                    .wallpaper{
                        width: 30%;
                    }
                    .bio {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .wallpaper-container {
                        display: flex;
                        flex-direction: row;
                        height: 25vh;
                        
                        
                    }
                    #wallpaper1{
                        width: 50%;
                    }
          
         
                `}</style>

            </Layout>
        );
    }

    renderWallpaper(){
        let arr = [];
        for(let i = 0; i < 3; i++){
            arr.push(<img src={`../static/eva.png`} alt="" id={`wallpaper${i}`} className="wallpaper" key={`${i} `} />);
        }
        return arr;
    }

}
export default Index;
