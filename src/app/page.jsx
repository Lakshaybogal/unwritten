import HomePage from "@/Home/page"
import Footer from "./components/Footer/page"
import Navbar from "./components/Navbar/Navbar.jsx"
import { getPosts } from "../../lib/client"


export default async function App() {
  // const posts=await getPosts();
  // console.log(posts);
  return (
    <main className="p-10 flex flex-col justify-center items-center">
      <Navbar />
     <h1>Name</h1>
      <HomePage />
      <Footer/>
    </main>
  )
}
