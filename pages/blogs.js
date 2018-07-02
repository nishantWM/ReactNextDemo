import React from 'react'
import Layout from '../components/Layout.js'
import Link from 'next/link'

function getPosts() {
    return [
        {id: 'hello-nextjs', title: 'Hello Next.js'},
        {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        {id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
    ]
}

const BlogLink = ({post}) => (
    <li key={post.id}>
        <Link as={`/blogs/${post.id}`} href={`/blogpost?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>
            {`
      a {
        font-family: "Arial";
      }

      li {
        list-style: square;
        margin: 5px 0px 5px;
      }

      a {
        text-decoration: none;
        color: black;
      }

      a:hover {
        opacity: 0.6;
        color:red;
        font-size:1.2em;
      }
    `}</style>
    </li>
);


class Blogs extends React.Component {
    render() {
        return (
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    {getPosts().map((post) => (
                        <BlogLink key={post.id} post={post}/>
                    ))}
                </ul>

                <style jsx>
                    {`
      h1{
        font-family: "Arial";
      }

      ul {
        padding: 10;
      }

    `}</style>
            </Layout>
        )
    }
}

export default Blogs