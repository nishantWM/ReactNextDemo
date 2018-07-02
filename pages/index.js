import React from 'react'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';


const Post = (props) => (
    <li>
        <Link as={`/p/${props.id}`}
              href={`/post?title=${props.title}`}>
            <a style={{fontSize: 20}}>{props.title}</a>
        </Link>
    </li>
);


class Index extends React.Component {

    static getInitialProps = async function() {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await res.json();

        console.log(`Show data fetched. Count: ${data.length}`);

        return {
            shows: data
        }
    };

    render() {
        return (
            <Layout>
                <h1>Welcome to this Next.js Demo</h1>
                <ul>
                    <Post id={'first-post'} title={'This is the first post'}/>
                    <Post id={'another-post'} title={'This is another post'}/>
                    <Post id={'some-other-post'} title={'This is some other post'}/>
                </ul>

                <h2>Batman TV shows</h2>
                <ul>
                    {this.props.shows.map(({show}) => (
                        <li key={show.id}>
                            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        )
    }
}

export default Index