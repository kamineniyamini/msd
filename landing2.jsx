import React from "react";

export default function Landing2() {
  const [hover, setHover] = React.useState({ track: false, book: false, feedback: false });

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>FoodBitezz!</h1>
        <nav>
          <a href="/landing1" style={styles.navLink}>← Back</a>
          <a href="#tracking" style={styles.navLink}>Live Tracking</a>
          <a href="#reservation" style={styles.navLink}>Reservation</a>
          <a href="#feedback" style={styles.navLink}>Feedback</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Manage Your Experience</h2>
        <p style={styles.heroText}>Track orders, reserve tables, and share your feedback.</p>
        <div style={styles.buttonContainer}>
          <a
            href="#tracking"
            style={{
              ...styles.heroBtn,
              background: hover.track ? "deeppink" : "hotpink",
            }}
            onMouseEnter={() => setHover({ ...hover, track: true })}
            onMouseLeave={() => setHover({ ...hover, track: false })}
          >
            Track Now
          </a>
          <a
            href="#reservation"
            style={{
              ...styles.heroBtn,
              background: hover.book ? "deeppink" : "hotpink",
            }}
            onMouseEnter={() => setHover({ ...hover, book: true })}
            onMouseLeave={() => setHover({ ...hover, book: false })}
          >
            Book Table
          </a>
          <a
            href="#feedback"
            style={{
              ...styles.heroBtn,
              background: hover.feedback ? "deeppink" : "hotpink",
            }}
            onMouseEnter={() => setHover({ ...hover, feedback: true })}
            onMouseLeave={() => setHover({ ...hover, feedback: false })}
          >
            Give Feedback
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 FoodBitezz! All Rights Reserved.
      </footer>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    background: "deeppink",
    color: "white",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "0 12px",
    fontWeight: "bold",
  },
  hero: {
    flex: 1,
    width: "100%",
    minHeight: "calc(100vh - 80px)", // header + footer approx
    background: "url('landpic.jpeg') no-repeat center center/cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
  },
  heroTitle: {
    fontSize: "42px",
    margin: "0 0 15px",
  },
  heroText: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  heroBtn: {
    color: "white",
    padding: "12px 25px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  footer: {
    background: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
    flexShrink: 0,
  },
};
