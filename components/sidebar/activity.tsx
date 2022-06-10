import React, { useState } from 'react';
import styles from "@styles/components/Activity.module.scss"

const activityList = [
  { value: 'Completed', label: 'Completed' },
  { value: 'Not Completed', label: 'Not Completed' },
  { value: 'In Progress', label: 'In Progress' },
];

function App() {
  const [lang, setLang] = useState([]);
  return (
    <div className={styles.activity}>
      Activity
      <div className={styles.Label}>
      {activityList.map((x, i) => (
        <label key={i}>
          <input
            type="checkbox"
            name="lang"
            value={x.value}
          />{' '}
          {x.label}
        </label>
      ))}
      </div>
    </div>
  );
}

export default App;
