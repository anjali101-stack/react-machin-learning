import React, { useState } from "react";
import Profile from "./component/Profile/Profile";
import Setting from "./component/Setting/Setting";
import { useDispatch, useSelector } from "react-redux";
import { setActivebar } from "./redux/activebarslic";
import Completed from "./component/Completed/Completed";
import Intrest from "./component/Intrest/Intrest";

function App() {
  const dispatch = useDispatch()
  const activebar  = useSelector((state) => state.active)

  const bar = [
    { id: 1, title: "Profile", OnPress: "profile" },
    { id: 2, title: "Intrest", OnPress: "intrest" },
    { id: 3, title: "Setting", OnPress: "setting" },
  ];

  return (
    <div className="App">

{activebar === "completed" ?  <Completed/>
: 
<div
style={{
  display: "flex",
  flexDirection: "column", // <-- row-wise layout
  gap: 10,
  padding: 20,
  position:"relative",
  left:'25%',
  border: "1px solid #ccc",
  justifyContent: "center",
  width:'50%',
  borderRadius:20 
}}
>

<div style={{display:'flex', alignSelf:"center"}}>

{bar.map((item) => {
  const isActive = activebar === item.OnPress;
  return (
    <div
      key={item.id}
      onClick={() => dispatch(setActivebar(item.OnPress))}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: isActive ? "#007bff" : "#f0f0f0",
        color: isActive ? "white" : "black",
        borderRadius: 8,
        fontWeight: isActive ? "bold" : "normal",
        marginRight:5,
        marginLeft:5  
      }}
    >
      <div >

      {item.title}
      </div>
    </div>
  );
})}
</div>


{/* Main Content Area */}
<div style={{ padding: 20 }}>
{activebar === "profile" && <Profile />}
{activebar === "intrest" && <Intrest />}
{activebar === "setting" && <Setting />}
</div>
</div>
}

      {/* Top Navigation Bar */}
     

    </div>
  );
}

export default App;
