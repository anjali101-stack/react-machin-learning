// component/Setting/Setting.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSetting } from "../../redux/settingslice";
import { setActivebar } from "../../redux/activebarslic";
import Button from "../Button";

const Setting = () => {
  const settings = useSelector((state) => state.setting);
  const data = useSelector((state) => {
    let arr = [state.profile, state.setting , state.interest]
    return arr
  })
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(updateSetting({ field, value }));
  };

  const handleSubmit = () => {
    dispatch(setActivebar("completed"));

    console.log("Submitted data:", data);
  };

  return (
    <div style={styles.container}>
      <h2>Settings</h2>

      <div style={styles.field}>
        <label>Email:</label>
        <input
          type="email"
          value={settings.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div style={styles.field}>
        <label>
          <input
            type="checkbox"
            checked={settings.notification}
            onChange={(e) => handleChange("notification", e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      <div style={styles.field}>
        <label>Theme:</label>
        <select
          value={settings.theme}
          onChange={(e) => handleChange("theme", e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <Button text="Previous" onClick={() => dispatch(setActivebar("interest"))} />
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    maxWidth: 500,
    margin: "0 auto",
  },
  field: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
  },
};

export default Setting;
