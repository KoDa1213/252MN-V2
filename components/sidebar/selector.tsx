import React, { Component } from 'react'
import Select from 'react-select'
import { ReactDOM } from 'react'
import styles from '@styles/components/Sidebar.module.scss'
import StickyBox from "react-sticky-box";
import { defaultComponents } from 'react-select/dist/declarations/src/components'
import App from './activity'

const options = [
  { value: 'Worksheet', label: 'Worksheet' },
  { value: 'Dashboard', label: 'Dashboard' },
  { value: 'Chart Config', label: 'Chart Config'},
  { value: 'Integration', label: 'Integration' },
  { value: 'Import Data', label: 'Import Data' },
  { value: 'Data Source', label: 'Data Source' },
]
const customStyles = {
  menu: (provided: any, state: { selectProps: { width: any; menuColor: any } }) => ({
    ...provided,
    padding: 20,
    boxshadow:'none',
    background:'none',
  }),

  control: (_: any, { selectProps: { width }}: any) => ({
    width: width   
  }),

  indicatorsContainer: () => ({
    display:'none',
  }),

  menuList: () => ({
    border:'none',
  }),

  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  }
}
const Sidebar = () => (
 
    <div className={styles.Sidebar}>
       <StickyBox >
    <div className={styles.Title}>
      Components
    </div>
    <div>
    <Select 
      styles={customStyles}
      isSearchable={false}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      menuIsOpen={true} />
      </div>
      <div>
      <App/>
      </div>
      </StickyBox>
  </div>
)
export default Sidebar;