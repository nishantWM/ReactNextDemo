import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

    linkStyle = {
        marginRight:15
    };

    render(){
        return(
            <div>
                <Link href='/'>
                    <a style={this.linkStyle}>Home</a>
                </Link>
                <Link href='/about'>
                    <a style={this.linkStyle}>About Us</a>
                </Link>
                <Link href='/blogs'>
                    <a style={this.linkStyle}>Blogs</a>
                </Link>
            </div>
        )
    }
}

export default Header;