import styles from '@styles/components/Roadmap.module.scss'
import { useState } from 'react';
import RoadmapItem from './item';
import React from 'react';
import Navbarindex from 'components/navbar';
import Sidebar from 'components/sidebar/selector';
import Image from 'next/image';


const numbers = new Array(20).fill(1).map((_, index) => index + 1);

const Index = () => {

    const roadmap = [{
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: ' Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        // item:['head-the-dummy-avatar-man-tie-72756.png'],
        activity: 'Completed',
        category: 'Worksheet'

    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "ETL",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }, {
        type: "BI",
        month: "OCT",
        day: "01",
        year: "2022",
        title: 'Calculated Field',
        description: 'Өөрийн дурын тооцооллыг чарт болон дашборд дээр оруулах боломжтой',
        item: ['img', 'img', 'img', 'img'],
        activity: 'Completed',
        category: 'Worksheet'
    }];
    const [activeIndex, setActiveIndex] = useState(0);
    const onClickHandler = (i: number) => {
        setActiveIndex(i);
        
    }
    return (
        <><div><Sidebar /></div>
            <div className={styles.container}>
                <div className={styles.roadmap}>
                    <div style={{ position: "absolute", height: "100%", backgroundColor: "#E9E9E9", width: "5px", right: "50%", }}>
                        <div style={{ height: `${(100 * (activeIndex + 1) / roadmap.length) - (100 / roadmap.length )}%` }}
                            className={styles.line}></div>
                    </div>
                    {roadmap.map((r, i) => <RoadmapItem key={`item${i}`} i={i} r={r} lineActive={i <= activeIndex} textActive={i == activeIndex} pointerActive={i == activeIndex} onClick={() => onClickHandler(i)} />)}

                </div>
            </div></>
    )
}
export default Index;


