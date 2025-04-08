import React, { useState } from "react";
import Profile from "./component/Profile/Profile";
import Address from "./component/Address/Address";
import Setting from "./component/Setting/Setting";

function App() {
  const [active, setActive] = useState("profile");

  const bar = [
    { id: 1, title: "Profile", OnPress: "profile" },
    { id: 2, title: "Address", OnPress: "address" },
    { id: 3, title: "Setting", OnPress: "setting" },
  ];

  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row", // <-- row-wise layout
          gap: 10,
          padding: 20,
          borderBottom: "1px solid #ccc",
          justifyContent: "center",
        }}
      >
        {bar.map((item) => {
          const isActive = active === item.OnPress;
          return (
            <div
              key={item.id}
              onClick={() => setActive(item.OnPress)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: isActive ? "#007bff" : "#f0f0f0",
                color: isActive ? "white" : "black",
                borderRadius: 8,
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div style={{ padding: 20 }}>
        {active === "profile" && <Profile />}
        {active === "address" && <Address />}
        {active === "setting" && <Setting />}
      </div>
    </div>
  );
}

export default App;
