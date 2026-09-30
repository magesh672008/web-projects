import React from "react";

function StudentDashboard() {
  const students = [
    {
      name: "S.Magesh",
      department: "B.E CSE",
      year: "2nd Year",
      attendance: "92%",
      marks: "85%"
    },
    {
      name: "Arun Kumar",
      department: "B.E CSE",
      year: "2nd Year",
      attendance: "88%",
      marks: "78%"
    },
    {
      name: "Priya",
      department: "B.E CSE",
      year: "2nd Year",
      attendance: "95%",
      marks: "91%"
    }
  ];

  return (
    <div style={styles.container}>
      <h1>🎓 Student Dashboard</h1>

      <div style={styles.header}>
        <h2>Welcome Students 👋</h2>
        <p>Manage your academic details easily</p>
      </div>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>👨‍🎓 Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div style={styles.card}>
          <h3>📚 Department</h3>
          <h2>CSE</h2>
        </div>

        <div style={styles.card}>
          <h3>📅 Attendance</h3>
          <h2>92%</h2>
        </div>

        <div style={styles.card}>
          <h3>🏆 Average Marks</h3>
          <h2>85%</h2>
        </div>
      </div>

      <h2>Student Details</h2>

      <div style={styles.tableBox}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Attendance</th>
              <th>Marks</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>{student.attendance}</td>
                <td>{student.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f2f6ff",
    textAlign: "center"
  },

  header: {
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "25px"
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px"
  },

  card: {
    backgroundColor: "white",
    width: "200px",
    padding: "20px",
    borderRadius: "15px",
    border: "2px solid #ddd",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  },

  tableBox: {
    overflowX: "auto"
  },

  table: {
    width: "90%",
    margin: "auto",
    borderCollapse: "collapse",
    backgroundColor: "white"
  }
};

export default StudentDashboard;