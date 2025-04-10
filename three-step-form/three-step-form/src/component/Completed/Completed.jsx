// component/Completed/Completed.js
import React from "react";
import { useSelector } from "react-redux";

const Completed = () => {
  const profile = useSelector((state) => state.profile);
  const setting = useSelector((state) => state.setting);
  const interest = useSelector((state) => state.interest);

  return (
    <div style={styles.container}>
      <h2>Form Submitted Successfully 🎉</h2>

      <section style={styles.section}>
        <h3>Profile</h3>
        <p><strong>Name:</strong> {profile.name}</p>
      </section>

      <section style={styles.section}>
        <h3>Settings</h3>
        <p><strong>Email:</strong> {setting.email}</p>
        <p><strong>Notifications:</strong> {setting.notification ? "Enabled" : "Disabled"}</p>
        <p><strong>Theme:</strong> {setting.theme}</p>
      </section>

      <section style={styles.section}>
        <h3>Interests</h3>
        <ul>
          {Object.entries(interest)
            .filter(([_, isSelected]) => isSelected)
            .map(([key]) => (
              <li key={key}>{key.toUpperCase()}</li>
            ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 10,
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
  },
  section: {
    marginBottom: 20,
  },
};

export default Completed;
