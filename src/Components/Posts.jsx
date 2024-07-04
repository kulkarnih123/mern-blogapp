import React, { useState } from 'react'


import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'




const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'this is the title of the very first post on the blog',
        desc: 'this description is jsuf t0 show thsty there is some description and should be long enough to look like its a description',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'this is the title of the very first post on the blog',
        desc: 'this description is jsuf t0 show thsty there is some description and should be long enough to look like its a description',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'this is the title of the very first post on the blog',
        desc: 'this description is jsuf t0 show thsty there is some description and should be long enough to look like its a description',
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'this is the title of the very first post on the blog',
        desc: 'this description is jsuf t0 show thsty there is some description and should be long enough to look like its a description',
        authorID: 11
    },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className="posts">
            <div className="container posts__container">
                {
                    posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
                        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category}
                            title={title} description={desc} authorID={authorID} />)
                }
            </div>
        </section>
    )
}

export default Posts
