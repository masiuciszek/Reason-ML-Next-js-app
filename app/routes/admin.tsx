import {Link, useLoaderData} from "remix"
import {getPosts, Post} from "~/post"
import adminStyles from "~/styles/admin.css"

export const loader = () => {
  return getPosts()
}

export const links = () => [{rel: "stylesheet", href: adminStyles}]

const Admin = () => {
  const posts = useLoaderData<Post[]>()

  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <p>...content</p>
      </main>
    </div>
  )
}

export default Admin
