import React from 'react';
import Link from 'next/link';
import Header from './Header';

class Layout extends React.Component {

    layoutStyle = {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD'
    };

    render() {
        return (
            <div style={this.layoutStyle}>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;