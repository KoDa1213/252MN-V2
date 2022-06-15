import styles from '@styles/components/Item.module.scss'
import { NextPage } from 'next';
import image from 'next/image';
import { useState } from 'react';

type IItem = {
    description: string
    month: string
    day: string
    year: string
    title: string
    item: string[]
    activity: string
    category: string

}
interface IProps {
    i: number;
    r: IItem;
    lineActive: boolean;
    textActive: boolean;
    pointerActive: boolean;
    onClick: (index: number) => void;
}
const RoadmapItem: NextPage<IProps> = ({ i, r, lineActive, textActive, pointerActive, onClick }) => {
    const [active, setActive] = useState(false);
    const onClickHandler = (index: number) => {
        setActive(!active);
        onClick(index);
    }
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen)
    }
    return (<div key={`map${i}`} className={styles.item} onClick={() => onClickHandler(i)}>
        <div className={`${styles.text} ${textActive ? styles.active : ''} ${i % 2 == 0 ? styles.odd : styles.even}`}>
            {i % 2 == 0 ? <>
                <div style={{ display: "flex" }}>
                    <div>
                        <div className={styles.intext}>{r.title}</div>
                        <div className={styles.description}>{r.description}</div>
                        <div className={styles.item}>{
                            r.item?.map((image, i) => <img key={`img${i}`} src={image} width={30} height={20}/>)
                        }</div>
                        <div style={{ display: "flex", gap: '20px', paddingLeft: '10px', paddingBottom: '5px' }}>
                            <div className={styles.activity}>{r.activity}</div>
                            <div className={styles.category}>{r.category}</div>
                        </div>
                    </div>
                    <div className={styles.ItemSideContainer}>
                        <div className={styles.month}>{r.month}</div>
                        <div className={styles.day}>{r.day}</div>
                        <div className={styles.year}>{r.year}</div>
                    </div>
                </div>
            </> : <>
                <div style={{ display: "flex" }}>
                    <div className={styles.ItemSideContainerTop}>
                        <div className={styles.monthTop}>{r.month}</div>
                        <div className={styles.dayTop}>{r.day}</div>
                        <div className={styles.yearTop}>{r.year}</div>
                    </div>
                    <div>
                        <div className={styles.intextTop}>{r.title}</div>
                        <div className={styles.descriptionTop}>{r.description}</div>
                        <div className={styles.itemTop}>{
                            r.item?.map((image, i) => <img key={`img${i}`} src={image} width={30} height={20}/>)
                        }
                          </div>
                        <div style={{ display: "flex", gap: '20px', paddingLeft: '10px', paddingBottom: '5px' }}>
                            <div className={styles.activityTop}>{r.activity}</div>
                            <div className={styles.categoryTop}>{r.category}</div>
                        </div>
                    </div>
                </div>

            </>}
        </div>
        <div className={`${styles.pointer} ${pointerActive ? styles.active : ''}`}></div>
    </div>
    )
}
export default RoadmapItem;