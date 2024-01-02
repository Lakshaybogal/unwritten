import HomePage from "@/Home/page"
import Footer from "./components/Footer/page"
import Navbar from "./components/Navbar/Navbar.jsx"


export default function App() {
  return (
    <main className="p-10 flex flex-col justify-center items-center">
      <Navbar />
      <HomePage />
      <Footer/>
    </main>
  )
}
