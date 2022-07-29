import {
  useEffect,
  useState,
} from "react";
import SwitchSelector from "react-switch-selector";
import styles from "@styles/components/Sidebar.module.scss";
import "antd/dist/antd.css"
import _ from "lodash";
import { roles } from "./roles";
import { Checkbox } from "antd";
import React from "react";

interface IProps {
  onFilter: (filter: any) => void;
}

const Sidebar: React.FC<IProps> = ({ onFilter }) => {
  const [kpiList, setKpiList] = useState<any[]>([]);
  const [checkedRoleId, setCheckedRoleId] = useState<any>();
  const [roleName, setRoleName] = useState<string>();
  const [components, setComponents] = useState<string[]>([]);
  const [activity, setActivity] = useState<any[]>([]);
  const initialSelectedIndex = roles.findIndex(({ value }) => value === "BI");

  const onChangeRole = (text: any) => {
    let checked = true;
    let name = undefined;
    let id = text === "ETL" ? 2 : 1;

    if (checked) {
      setCheckedRoleId(id);
      const role = roles.find((x) => x.id === id);
      if (role) {
        name = role.label;
        setKpiList(role.kpi);
      }
    } else {
      setCheckedRoleId(undefined);
      setKpiList([]);
    }
    setRoleName(name);

    onFilter({
      type: name,
      components: [],
      activity,
    });
  };

  useEffect(() => {
    setCheckedRoleId(roles[0].id);
    onChangeRole(roles[0].id);
  }, [roles]);

  const onChangeKpi = (id: number, checked: boolean) => {
    const cloneList = [...kpiList];
    const i = cloneList.findIndex((x) => x.id === id);
    if (i > -1) {
      cloneList[i].checked = checked;
      setKpiList(cloneList);
    }
    const cmp: string[] = [];
    const checkedList = cloneList.filter((x) => x?.checked === true);
    if (checkedList.length === 0) {
      cloneList.forEach((c) => {
        cmp.push(c.name);
      });
    } else {
      checkedList.forEach((c) => {
        cmp.push(c.name);
      });
    }
    setComponents(cmp);
    onFilter({
      type: roleName,
      components: cmp,
      activity,
    });
  };

  const onChangeActivity = (name: string, checked: boolean) => {
    const clones = [...activity];
    const i = clones.findIndex((c) => c === name);
    if (checked) {
      if (i < 0) {
        clones.push(name);
      }
    } else {
      if (i > -1) {
        clones.splice(i, 1);
      }
    }
    setActivity(clones);

    onFilter({
      type: roleName,
      components,
      activity: clones,
    });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.switch}>
        <div style={{ height: "40px" }}>
          <SwitchSelector
            onChange={onChangeRole}
            //onChange={(e:any) => onChangeRole(2,true)}
            options={roles}
            initialSelectedIndex={initialSelectedIndex}
            fontSize={17}
            backgroundColor={"#f9f9f9"}
            selectedFontColor={"#f5f6fa"}
            selectedBackgroundColor={"#de2d37"}
            wrapperBorderRadius={5}
            optionBorderRadius={5}
            border="none"
          />
        </div>
      </div>
      <h3 className={styles.title1}>Components</h3>
      <div className={styles.component}>
        {kpiList.map((item: any) => (
          <div key={item.id}>
            <Checkbox
              id={"kpi_" + item.id}
              type="checkbox"
              checked={item?.checked}
              onChange={(e) => onChangeKpi(item.id, e.target.checked)}
            />
            <label style={{paddingLeft:'8px'}} htmlFor={"kpi_" + item.id}>{item.name}</label>
          </div>
        ))}
      </div>
      <h3 className={styles.title}>Activity</h3>
      <div className={styles.activity}>
        <Checkbox
          onChange={(e) => onChangeActivity("Completed", e.target.checked)}
        >
          Completed
        </Checkbox>
        <Checkbox
          onChange={(e) => onChangeActivity("Not Completed", e.target.checked)}
        >
          Not Completed
        </Checkbox>
        <Checkbox
          onChange={(e) => onChangeActivity("In Process", e.target.checked)}
        > In Process
        </Checkbox>
      </div>
    </div>
  );
};

export default Sidebar;
