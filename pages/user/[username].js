
import HomeHeader from "../../components/HomeHeader"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <>
            < Navbar className="fixed z-100" />
            <div
                className="inline-flex items-center px-12 py-2 text-sm font-bold text-center text-gray-900 shadow-lg "
            >  Hosgeldiniz. Kullanıcı hesabına giriş yaptınız.
                </div>

            <HomeHeader />
            <div className="h-36"></div>
           


        </>

    )
}

