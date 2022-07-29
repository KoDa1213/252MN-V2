import styles from "@styles/components/Roadmap.module.scss";
import { useEffect, useState } from "react";
import RoadmapItem from "./item";
import React from "react";
import Image from "next/image";
import { roadmap } from "./roadmap";

interface IProps {
  filter: any;
}
const Index: React.FC<IProps> = ({ filter }) => {
  const [data, setData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickHandler = (i: number) => {
    setActiveIndex(i);
  };

  useEffect(() => {
    setData(roadmap);
  }, [roadmap]);

  useEffect(() => {
    // setActiveIndex(activeIndex - activeIndex)
    if (filter?.type) {
      const clone = [...roadmap];
      let filtered = clone.filter((x) => x.type === filter.type);
      if (filter?.activity.length > 0) {
        filtered = filtered.filter(
          (x) =>
            x.type === filter.type &&
            filter.activity.findIndex((a: string) => a === x.activity) > -1
        );
      }
      if (filter?.components.length > 0) {
        filtered = filtered.filter((x) => {
          return (
            filter.components.findIndex((c: string) => c === x.category) > -1
          );
        });
      }
      setData(filtered);
      console.log(activeIndex);
    }
  }, [filter]);

  const onSetItemHeight = (index: number, height: number) => {
    const d = [...(data || [])];
    d[index].height = height;
    setData(d);
  };

  const getHeight = () => {
    let prevHeights = 0;
    data.forEach((d, i) => {
      if(i < activeIndex) {
        prevHeights += d.height;
      }
    });
    return prevHeights + data[activeIndex]?.height / 2;

    // return height;
  }
  return (
    <div className={styles.container}>
      <div className={styles.roadmap}>
        <div className={styles.mainline}>
          <div
            style={{
              // height: `${
              //   (100 * (activeIndex + 1)) / roadmap.length -
              //   100 / roadmap.length
              // }%`,
              height: getHeight()+"px"
            }}
            className={styles.line}
          ></div>
        </div>
        {data.map((r, i) => (
          <RoadmapItem
            key={`item${i}`}
            i={i}
            r={r}
            modalActive={i == activeIndex}
            lineActive={i <= activeIndex}
            textActive={i == activeIndex}
            pointerActive={i == activeIndex}
            onClick={() => onClickHandler(i)}
            onHeight={(h) => onSetItemHeight(i, h)}
          />
        ))}
      </div>
    </div>
  );
};
export default Index;
