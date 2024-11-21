import React, { useEffect, useState } from 'react'
import { blogall } from '../../../services/blogsall'
import Blogcard from '../../../components/blogscard'

function Blogs() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const data = await blogall()
                // setPosts(data.posts);
                console.log(data);

            } catch (error) {
                console.log("error", error)
            }
        })()
    }, [])

    return (

        <div>
            {posts.map((post) => (
                <Blogcard key={post.id} {...post} />
            ))}
        </div>
    )
}

export default Blogs
// blogall().then(data=>console.log(data))