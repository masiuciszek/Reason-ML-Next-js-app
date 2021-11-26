import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant"
import {marked} from "marked"

export interface Post {
  slug: string
  title: string
  html?: string
}

interface FrontMatter {
  title: string
  created: string
  spoiler: string
  tags: string[]
}

const postPath = path.join(__dirname, "..", "posts")

function isValidPostAttributes(attributes: any): attributes is FrontMatter {
  return attributes?.title
}

export const getPosts = async (): Promise<Post[]> => {
  const dir = await fs.readdir(postPath)

  return Promise.all(
    dir.map(async fileName => {
      const file = await fs.readFile(path.join(postPath, fileName))
      const {attributes} = parseFrontMatter(file.toString())
      invariant(isValidPostAttributes(attributes), `${fileName} has bad meta data!`)
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: attributes.title,
      }
    })
  )
}

export const getPost = async (slug: string): Promise<Post> => {
  // console.log(path.join())
  const blogPostPath = path.join(postPath, slug + ".md")
  const file = await fs.readFile(blogPostPath)
  const {attributes, body} = parseFrontMatter(file.toString())
  invariant(isValidPostAttributes(attributes), `Post ${blogPostPath} is missing attributes`)
  const html = marked(body)
  return {slug, title: attributes.title, html}
}
