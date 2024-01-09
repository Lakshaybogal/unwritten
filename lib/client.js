import { createClient, groq } from 'next-sanity'


export const client = createClient({

  projectId: "ijcw0r41",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
  token: "skVVfjqm9brKeVfETl9IaHDDOSIeTmh7f7O02mOqLDBkVUinDC3ohfN5vbBOSUr8w2EOghOPHrtBHFnVaXQNLSD0faJfxsxCvfc8FUcYB7dYq39PqkEC0g50oQ5NTtlycnZdL3Ovk2bOGBQXA7R9a0PpjEPozGuIWOxVZq35rHrmICFLYLSV", // Replace with your token or remove if not needed for read operations
})

export async function getPosts() {
    try{
  const posts = await client.fetch(groq`
    *[_type == 'post'] {
      _id, 
      title,   
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
      "body": pt::text(body),
      "author": *[_type == 'author'&& _id == ^.author._ref][0] {
        _id,
        name,
        "slug": slug.current
      },
      categories[]->{
        _id,
        name,
      },
      "content":body
    }
  `)
  return posts;

}
catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
}
}
