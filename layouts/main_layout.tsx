import { Footer, NavBar} from "@components";
import { NextPage } from "next";


interface IProps {
    children: React.ReactNode;
}
const Index: NextPage<IProps> = ({ children }) => {
    return (<div>
        <NavBar/>
        {children}
        {<Footer/>}
    </div>)
}
export default Index;