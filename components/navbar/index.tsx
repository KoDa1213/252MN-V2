import styles from '@styles/components/NavBar.module.scss';
import StickyBox from "react-sticky-box";
import Link from 'next/link';
import Image from 'next/image';
const Navbarindex = () => {
    return (
        <StickyBox style={{zIndex: 1}}>
        <ul className={styles.navbar}>
            <Link href='/'>
                <li>Roadmap</li>
            </Link>
            <Link href="/product">
                <li>Product</li>
            </Link>
            <Link href="/about">
                <li>About</li>
            </Link>    
        </ul>
        </StickyBox>

        )
        
}

export default Navbarindex;