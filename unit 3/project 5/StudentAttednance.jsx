import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Magesh", status: "Absent" },
    { id: 2, name: "Arun", status: "Absent" },
    { id: 3, name: "Kavin", status: "Absent" },
    { id: 4, name: "Rahul", status: "Absent" },
    { id: 5, name: "Vijay", status: "Absent" }
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div style={styles.container}>
      <h2>Student Attendance Tracker</h2>

      <div style={styles.summary}>
        <h3>Total Students: {students.length}</h3>
        <h3>Present: {presentCount}</h3>
        <h3>Absent: {absentCount}</h3>
      </div>

      <div>
        {students.map((student) => (
          <div key={student.id} style={styles.student}>
            <h3>{student.name}</h3>

            <p>
              Status:{" "}
              <b
                style={{
                  color:
                    student.status === "Present"
                      ? "green"
                      : "red"
                }}
              >
                {student.status}
              </b>
            </p>

            <button
              onClick={() =>
                markAttendance(student.id, "Present")
              }
            >
              Present
            </button>

            <button
              onClick={() =>
                markAttendance(student.id, "Absent")
              }
            >
              Absent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "600px",
    margin: "30px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
    border: "2px solid #333",
    borderRadius: "10px"
  },

  summary: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px"
  },

  student: {
    border: "1px solid #aaa",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px"
  }
};

export default App;
