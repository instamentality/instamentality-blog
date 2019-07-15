import Link from 'next/link';
import React from "react";

const linkStyle = {
    marginRight: 15,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "1.6rem",
    color: "rgba(48, 48, 48, 0.8)",
    cursor: "pointer",
    fontFamily: "helvetica"

};

class Header extends React.Component{

    render(){
        const pages = ["politics","relationships","archives","contact","about"];
        

        const flexStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

        }


        const navLinks = pages.map(page => 
                            (
                            <div>
                                <Link href={`/${page}`}>
                                    <a style={linkStyle}>{ page }</a>
                                </Link>
                            </div>));

        return (
                <div style={flexStyle}>
                    

                   
                    <Link href="/">
                        <a style={linkStyle}>
                            <img src="..\static\instagram.png" height="50" width="50"/>
                        </a>
                    </Link>

                    { navLinks }
             

                </div>
        );
    }
    
}



export default Header;