
import Navbar from "./Navbar"


const Layout = ({ children }) => {
  return (
    <div className="bg-stone-200 content">
      < Navbar className="fixed z-100" />
      { children }
      
    </div>
  );
}
 
export default Layout;