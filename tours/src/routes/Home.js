import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home()
{
 return(
    <>
    <Navbar/>
   <Hero
   cName ="hero"
   heroimg="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   title= "Your Journey Your Story"
   text ="Choose Your Favourite Destination."
   buttonText ="Travel Plan"
   url = "/"
   btnClass="show"
   />
   <Destination/>
   <Trip/>
   <Footer/>
    </>
 );
}
export default Home;