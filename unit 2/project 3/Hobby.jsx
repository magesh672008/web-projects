import React from "react";

function Hobby() {
  const hobbies = [
    {
      name: "Listening to Music 🎵",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Watching Movies 🎬",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Playing Cricket 🏏",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Playing Games 🎮",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Coding 💻",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div style={styles.container}>
      <h1>My Hobbies ❤️</h1>

      <div style={styles.hobbyContainer}>
        {hobbies.map((hobby, index) => (
          <div style={styles.card} key={index}>
            <img
              src={hobby.image}
              alt={hobby.name}
              style={styles.image}
            />

            <h2>{hobby.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f2f2f2",
    minHeight: "100vh"
  },

  hobbyContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  },

  card: {
    width: "250px",
    backgroundColor: "white",
    border: "2px solid #333",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  }
};

export default Hobby;
