import Layout from "../components/Layout";

import React from "react";

class Index extends React.Component {

    static async getInitialProps({ req }) {
        const content = {
            slogan: "From the mundane to the insane",
            wallpapers: ["twitter", "instagram", "youtube"]
        };
        return content;
    }

    render() {
        return (
            <Layout>
                <div className="bio">
                    <div className="wallpaper-container">{this.props.wallpapers.map((wallpaper, i) =>
                        (
                            <img height="100" width="100" src={`../static/${wallpaper}.png`} alt="" id={`wallpaper${i}`} className="wallpaper" key={`${i} `} />
                        ))}
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
                    .bio {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .wallpaper-container {
                        display: flex;
                        flex-direction: row;
                    }
         
                `}</style>

            </Layout>
        );
    }

}
export default Index;
