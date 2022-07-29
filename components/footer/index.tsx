import React from "react";
import { Layout, Space, List, Typography, Divider } from "antd";
import styles from "@styles/components/Footer.module.scss"
import "antd/dist/antd.css";
import { FacebookOutlined,YoutubeOutlined,PhoneOutlined,MailOutlined} from "@ant-design/icons";

const { Link, Title } = Typography;

const { Footer } = Layout;

const dataProduct = [
  "BI",
  "ETL",
  "123"
];

const dataService = [
  "Home",
  "Forum 1",
  "Forum 2"
];

export default function App() {
  return (
    <Footer className={styles.footer}>
      <Space size={60} align="start">
        <List
          header={<Title level={5}>Products</Title>}
          dataSource={dataProduct}
          renderItem={(item) => (
            <List.Item>
              <Link href="/product" style={{ color: 'black' }}>
                {item}
              </Link>
            </List.Item>
          )}
        />
        <List
          header={<Title level={5}>Forum</Title>}
          dataSource={dataService}
          renderItem={(item) => (
            <List.Item>
              <Link href="#" style={{ color: 'black' }}>
                {item}
              </Link>
            </List.Item>
          )}
        />
        <Space style={{display:"grid",gap:"18px"}}>
      <Title style={{ paddingBottom: "5px", paddingTop: "12px" }} level={5}>
        Contact us 
      </Title>
        <a href="https://www.facebook.com/scs.mongolia" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
          <FacebookOutlined /> Facebook
        </a>
        <a href="https://www.youtube.com/channel/UCWZt8FXpeiuyoHdeiORlkEQ" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
          <YoutubeOutlined /> Youtube
        </a>
        <a target="_blank" rel="noreferrer" style={{ color: 'black' }}>
        <PhoneOutlined/> 9999999
        </a>
        <a target="_blank" rel="noreferrer" style={{ color: 'black' }}>
        <MailOutlined /> test@test.com
        </a>
        </Space>
      </Space>
      <Divider />
      <div style={{ textAlign: 'center', padding: "12px" }}>2022 252.mn</div>

    </Footer>
  );
}
