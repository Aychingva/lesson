import React from 'react'

function Blogcard({id,title,body}) {
  return (
    <div>
        <h2>
            <Link to={`/blogs/${id}`}>
                {title}
            </Link>
            

        </h2>
        <p>{body.slice(0,60)}</p>
        <p>{id}</p>
    </div>
  )
}

export default Blogcard