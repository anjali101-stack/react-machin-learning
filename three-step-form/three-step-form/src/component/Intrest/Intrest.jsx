// component/Interest/InterestForm.js
import React, { useEffect } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setActivebar } from "../../redux/activebarslic";
import { toggleInterest } from "../../redux/interestslice";

const InterestForm = () => {

    const interest  =  useSelector((state) => state.interest )

    console.log(interest, "====================")

    const dispatch = useDispatch();

  const interestOptions = ["javascript", "python", "php", "css", "html"];

  const handleCheckboxChange = (key) => {
    dispatch(toggleInterest(key))
    console.log(key)
  };


  useEffect(()=>{


  }, handleCheckboxChange)

  return (
    <div>

    <div style={styles.container}>
      <h2>Select Your Interests</h2>
      {interestOptions.map((item) => (
        <label key={item} style={styles.label}>
          <input
            type="checkbox"
            
            // checked={interests[item]}
            onChange={() => handleCheckboxChange(item)}
          />
          <span style={styles.text}>{item.toUpperCase()}</span>
        </label>
      ))}

    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>

      <Button text={"Previous"} onClick={()=> dispatch(setActivebar("profile"))}/>
      <Button text={"next"} onClick={()=> dispatch(setActivebar("setting"))}/>
    </div>

    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    maxWidth: 400,
    margin: "0 auto",
  },
  label: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    cursor: "pointer",
  },
  text: {
    marginLeft: 8,
  },
};

export default InterestForm;
