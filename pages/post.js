import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

class Post extends React.Component {

    static getInitialProps = async function (context) {
        const {id} = context.query;
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const show = await res.json();

        console.log(`Fetched show: ${show.name}`);
        return {show}
    };

    render() {
        return (
            <Layout>
                <h1>{this.props.show.name}</h1>
                <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
                <img src={this.props.show.image.medium}/>
            </Layout>
        )
    }
}


export default Post;