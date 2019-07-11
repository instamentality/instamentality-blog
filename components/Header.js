import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>
                <img src="..\static\instagram.png"/>
            </a>
        </Link>
        <Link href="/politics">
            <a style={linkStyle}>Politics</a>
        </Link>
        <Link href="/relationships">
            <a style={linkStyle}>Magazine</a>
        </Link>
        <Link href="/archives">
            <a style={linkStyle}>Archives</a>
        </Link>
        <Link href="/contact">
            <a style={linkStyle}>Contact</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;