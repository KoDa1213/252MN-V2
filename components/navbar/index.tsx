import styles from "@styles/components/NavBar.module.scss";
import React from "react";
import StickyBox from "react-sticky-box";
import { Button, Space } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import Logo from "public/252Logo.svg";
import Image from "next/image";

const Navbarindex = () => {
  return (
    <StickyBox style={{ zIndex: 1 }}>
      <div className={styles.navbar}>
        <div className={styles.Logo}>
          <Image src={Logo} width={130} height={80}  alt="252Logo" />
        </div>
        <div className={styles.mainButton}>
          <Space size={70}>
          <Link href="/">
            <Button type="text" style={{fontSize:"15px"}} >Roadmap</Button>
          </Link>
          <Link href="/product">
            <Button type="text" style={{fontSize:"15px"}}>Product</Button>
          </Link>
          <Link href="/forum">
            <Button type="text" style={{fontSize:"15px"}}>Forum</Button>
          </Link>
          </Space>
        </div>
        <div className={styles.sideButton}>
          <Button >Try Free</Button>
          <Button type="primary" style={{backgroundColor:"#de2d37",border:"1px red solid"}}>Buy now</Button>
        </div>
      </div>
    </StickyBox>
  );
};

export default Navbarindex;
