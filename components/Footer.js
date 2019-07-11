import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Footer = () => (
    <div>
        <p>2019 Instamentality</p>
        <div id="socialmedia">
            <Link href="/">
                <a style={linkStyle}>
                    <img src="..\static\twitter.png" height="50" width="50"/>
                </a>
            </Link>
            <Link href="/">
                <a style={linkStyle}>
                    <img src="..\static\instagram.png" height="50" width="50"/>
                </a>
            </Link>
            <Link href="/">
                <a style={linkStyle}>
                    <img src="..\static\youtube.png" height="50" width="50"/>
                </a>
            </Link>
        </div>
    </div>
);

export default Footer;