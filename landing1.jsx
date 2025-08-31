import React from "react";

export default function Landing1() {
  // Hover state for buttons
  const [hover, setHover] = React.useState({ login: false, signup: false });

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>FoodBitezz!</h1>
        <nav>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#menu" style={styles.navLink}>Menu</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a href="/landing2" style={styles.navLink}>More →</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Welcome to FoodBitezz!</h2>
        <p style={styles.heroText}>Delicious meals delivered at your doorstep.</p>
        <div style={styles.buttonContainer}>
          <a
            href="/login"
            style={{
              ...styles.heroBtn,
              background: hover.login ? "deeppink" : "hotpink",
            }}
            onMouseEnter={() => setHover({ ...hover, login: true })}
            onMouseLeave={() => setHover({ ...hover, login: false })}
          >
            Login
          </a>
          <a
            href="/signup"
            style={{
              ...styles.heroBtn,
              background: hover.signup ? "deeppink" : "hotpink",
            }}
            onMouseEnter={() => setHover({ ...hover, signup: true })}
            onMouseLeave={() => setHover({ ...hover, signup: false })}
          >
            Sign Up
          </a>
        </div>
      </section>

      {/* Footer */}
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
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
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
    background: "url('landpic.jpeg') no-repeat center center/cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    minHeight: "calc(100vh - 80px)", // adjusts for header/footer
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
