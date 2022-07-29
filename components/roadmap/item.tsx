import styles from "@styles/components/Item.module.scss";
import { NextPage } from "next";
import { Modal, Badge, Carousel, Image } from "antd";
import "antd/dist/antd.css";
import {useState} from "react";
import { useRef } from "react";
import { useEffect } from "react";

type IItem = {
  description: string;
  month: string;
  day: string;
  year: string;
  title: string;
  item: string[];
  activity: string;
  category: string;
};
interface IProps {
  i: number;
  r: IItem;
  lineActive: boolean;
  textActive: boolean;
  modalActive: boolean;
  pointerActive: boolean;
  onClick: (index: number) => void;
  onHeight: (height: number) => void;
}
const RoadmapItem: NextPage<IProps> = ({
  i,
  r,
  lineActive,
  textActive,
  modalActive,
  pointerActive,
  onClick,
  onHeight
}) => {
  const cRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(cRef && cRef.current) {
      // console.log(i, cRef.current.clientHeight);
      onHeight(cRef.current.clientHeight)
    }
  }, [cRef]);
  const onClickHandler = (index: number) => {
    setActive(!active);
    onClick(index);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getStatus = (r:IItem) => {
    if(r.activity == "Completed"){
      return <Badge status="success" text={r.activity}/>
      } else if(r.activity == "Not Completed"){
        return <Badge status="error" text={r.activity}/>
      } else {
        return <Badge status="warning" text={r.activity}/>
      }
  }
  const getStatusCategory = (r:IItem) => {
    if(r.category == "Worksheet"){
      return <Badge color="yellow" text={r.category}/>
      } else if(r.category == "Dashboard"){
        return <Badge color="pink" text={r.category}/>
      } else if(r.category == "Import Data"){
        return <Badge color="cyan" text={r.category}/>
      } else if(r.category == "Chart Config"){
        return <Badge color="blue" text={r.category}/>
      } else {
        return <Badge color="purple" text={r.category}/>
      }
  }
  return (
    <div
     ref={cRef}
      key={`map${i}`}
      className={styles.item}
      onClick={() => {
        onClickHandler(i);
      }}
    >
      <Modal
        title={r.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={null}
        width={1000}
      >
        <Image.PreviewGroup>
            {r.item?.slice(0 , 1).map((image, i) => (
              <div key={`img${i}`}>
                  <img src={image} width={600} height={400} />
              </div>
            ))}
          </Image.PreviewGroup>
        <div className={styles.ModalItem}>
          <div className={styles.descriptionModal} style={{fontSize:"larger", paddingBottom:"50px",paddingLeft:"10px"}}>{r.description}</div>
          <div style={{display:"flex",gap:"30px",paddingLeft:"10px"}}>
          <div className={styles.activityModal}>{getStatus(r)}</div>
          <div className={styles.categoryModal}>{getStatusCategory(r)}</div>
          </div>
        </div>
      </Modal>
      <div
        className={`${styles.text} ${textActive ? styles.active : ""} ${
          i % 2 == 0 ? styles.odd : styles.even
        }`}
      >
        {i % 2 == 0 ? (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <div className={styles.intext}>{r.title}</div>
                <div className={styles.description}>{r.description}</div>
                <div
                  className={styles.item}
                  style={{ gap: "5px" }}
                  onClick={showModal}
                >
                  {r.item?.map((image, i) => (
                    <img key={`img${i}`} src={image} width={50} height={30} />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "-20px",
                    paddingLeft: "10px",
                    paddingBottom: "5px",
                  }}
                >
                  <div className={styles.activity}>
                  {getStatus(r)}
                  </div>
                  <div className={styles.category}>
                  {getStatusCategory(r)}
                  </div>
                </div>
              </div>

              <div className={styles.ItemSideContainer}>
                <div className={styles.month}>{r.month}</div>
                <div className={styles.day}>{r.day}</div>
                <div className={styles.year}>{r.year}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex" }}>
              <div className={styles.ItemSideContainerTop}>
                <div className={styles.monthTop}>{r.month}</div>
                <div className={styles.dayTop}>{r.day}</div>
                <div className={styles.yearTop}>{r.year}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div className={styles.intextTop}>{r.title}</div>
                <div className={styles.descriptionTop}>{r.description}</div>
                <div
                  className={styles.itemTop}
                  style={{ gap: "5px" }}
                  onClick={showModal}
                >
                  {r.item?.slice(0, 3).map((image, i) => (
                    <img key={`img${i}`} src={image} width={50} height={30} />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "-20px",
                    paddingLeft: "10px",
                    paddingBottom: "5px",
                  }}
                >
                  <div className={styles.activityTop}>
                    {getStatus(r)}
                  </div>
                  <div className={styles.categoryTop}>
                    {getStatusCategory(r)}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className={`${styles.pointer} ${pointerActive ? styles.active : ""}`}
      ></div>
    </div>
  );
};
export default RoadmapItem;
