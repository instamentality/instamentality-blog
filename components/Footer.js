import Link from 'next/link';
import React from 'react';
import { flexStyle } from '../assets/style.js'
/**
 * @todo style "2019 Instamentality" text
 */

const linkStyle = {
    marginRight: 15
};

const socials = ["twitter", "instagram", "youtube"]

const socialLinks = socials.map(social =>
                            (
                                <div key={ social}>
                                    <Link href={`${social}.com`}>
                                        <a style={linkStyle}>
                                            <img height="50" width="50" src={`../static/${social}.png`}/>
                                        </a>
                                    </Link>
                                </div>
                            ));

const socialStyle = {
    display: "flex",
    justifyContent: "flex-end"
}

class Footer extends React.Component{

    render() {
        return(
            <div style={ flexStyle }>

            <p>2019 Instamentality</p>
            
            <div style={ socialStyle }>
                { socialLinks }
            </div>            

            </div>
        );
    }
}

export default Footer;