import Layout from "../components/Layout";

import React from "react";

class Index extends React.Component {

    static async getInitialProps( { req }){
    	const content = {
            slogan: "From the mundane to the insane",
            wallpapers: ["",""]
        };
        return content;
    }

    render() {
        return (
            <Layout>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <div>{this.props.slogan}</div>
                </div>

                <style jsx>{`
                @media screen and (max-width: 600px) {
                    div {
                        background-color: yellow;
                    }
                }
         
                `}</style>
                
            </Layout>
        );
    }

}
export default Index;
