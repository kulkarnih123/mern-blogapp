import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
   <section className="post-detail">
    <div className="container post-detail__container">
      <div className="post-detail__header">
        <PostAuthor/>
        <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title</h1>
      <div className="post-detail__thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi sequi, beatae deserunt iure adipisci labore explicabo impedit ipsa quo eveniet necessitatibus assumenda nulla recusandae deleniti itaque, distinctio rerum vero quia inventore. Impedit, alias fuga repellat 
        id assumenda, unde sapiente aspernatur consequatur iure quisquam dicta qui ea odit omnis! Illo!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid expedita facilis omnis beatae sint nulla voluptate enim quibusdam dignissimos similique repellat recusandae fugiat unde ullam repellendus nostrum repudiandae, corporis iusto corrupti facere, fugit perferendis. Modi quae quia aliquam culpa facere, voluptatibus ratione, saepe sequi
         expedita asperiores mollitia quasi voluptas suscipit impedit cum excepturi! Inventore, repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio, fugit quidem harum exercitationem amet ut alias neque earum, error aperiam cum nemo quo fugiat porro facilis maxime eveniet quam rem officiis vero deleniti at qui! Consequuntur iste doloremque necessitatibus! Voluptas minima assumenda nulla maiores sit similique consequatur! Sunt cupiditate, corrupti, sed iste consequatur est magnam officiis esse excepturi quam aliquid numquam repellendus quia similique quisquam. Quaerat minus laborum impedit quo aut possimus recusandae sit doloremque voluptatum dolorum
         ut nostrum voluptates autem fuga corrupti eum, sequi ipsam quia quasi, eveniet expedita? Possimus, dicta quasi quam vitae sint illo ea incidunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo veniam quis enim similique fuga magnam eius praesentium obcaecati exercitationem illo possimus sint, vero, vel non sequi accusantium unde deleniti dolor animi ab iste consequuntur itaque! Commodi, suscipit! Necessitatibus deleniti et ad aspernatur suscipit magnam ab, animi mollitia accusantium iure.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tenetur.
      </p>
    </div>
   </section>
  )
}

export default PostDetail
