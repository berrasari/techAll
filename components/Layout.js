
import Navbar from "./Navbar"


const Layout = ({ children }) => {
  return (
    <div className="
    bg-cover content bg-[url('https://c4.wallpaperflare.com/wallpaper/718/756/55/gray-dark-gradation-blur-wallpaper-preview.jpg')] 	">
      < Navbar className="fixed z-100" />
      { children }
      
    </div>
  );
}
 
export default Layout;