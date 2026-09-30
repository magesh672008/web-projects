import React from "react";
import magesh from "./assets/magesh.jpg";
function StudentCard() {
  return (
    <div style={styles.card}>
      <img
        src={magesh}
        alt="Student"
        style={styles.image}
      />

      <h2>Student ID Card</h2>
      <p><b>Name:</b> S. Magesh</p>
      <p><b>Student ID:</b> 411625104038</p>
      <p><b>Department:</b> Computer Science</p>
      <p><b>Year:</b> II</p>
      <p><b>College:</b> Prince DrK Vasudevan College of Engineering and Technology</p>
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    border: "2px solid #007bff",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    fontFamily: "Arial",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
};

export default StudentCard;