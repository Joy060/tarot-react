import Header, { HeaderBlank } from "../component/Header";
import Footer from "../component/Footer";

const DefaultLayout = ({children}) =>{

    return<div>
        <Header />
        {children}
        <Footer />
    </div>
}
export const BlankLayout = ({children}) =>{

    return<div>
        <HeaderBlank />
        {children}
    </div>
}

export default DefaultLayout;