import Navbarlogin from "../components/Navbarlogin"
import HomeHeader from "../components/HomeHeader"
import Footer from "../components/Footer"
export default function Home(){
    return(
<>
            < Navbarlogin className="fixed z-100" />
            <HomeHeader />
            <div className="h-36"></div>
            <Footer/>
            

           </>
    
    )
}