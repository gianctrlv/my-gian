import React from 'react';

export default function HomePage() {
  return (
    <main style={styles.container}>
      <div style={styles.wrapper}>
        {/* LEFT SIDE: IMAGE */}
        <div style={styles.imageContainer}>
          <img
            src="https://scontent.fceb9-1.fna.fbcdn.net/v/t39.30808-6/633926039_122108622597236043_8032364314136937697_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aY1j8vULN40Q7kNvwG9J4Bb&_nc_oc=AdknLz-oVmi7c8bkI7dNQDehpvqArKEkj3Spo36rHOumrvT1_FfbnXX5DyRploMreOE&_nc_zt=23&_nc_ht=scontent.fceb9-1.fna&_nc_gid=2VWGA03_1louDZWk7RiVVA&oh=00_AfuingNmVR15a3bDsH2j4loygRzY1gCVKTH2vp37-Eqnxg&oe=69946951" // Replace with your image link
            alt="Gian Lagahit"
            style={styles.profileImage}
          />
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div style={styles.contentContainer}>
          <h1 style={styles.nameHeader}>I'm Gian,</h1>
          
          <div style={styles.descriptionBox}>
            <p style={styles.bioText}>
              I am <strong>Gian Lagahit</strong>, a passionate IT student from Cordova. I enjoy programming, web development, and exploring new technologies. I am motivated to create projects that solve real-world problems and continuously improve my technical skills.

            </p>
          </div>

          {/* SOCIAL ICON */}
          <div style={styles.socialContainer}>
            <a href="https://www.facebook.com/shrekako" style={styles.socialIcon}>
              <span style={styles.iconCircle}>f</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', sans-serif", // Clean modern font
    padding: "20px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "1100px",
    width: "100%",
    alignItems: "stretch",
    gap: "60px",
    // Responsive wrap for mobile
    flexWrap: "wrap",
  },
  imageContainer: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
  },
  profileImage: {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    objectFit: "cover",
    // No border-radius to match the image's square/rectangular look
  },
  contentContainer: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 0",
  },
  nameHeader: {
    fontSize: "64px",
    fontFamily: "serif", // Essential to match the "I'm Gian" look
    margin: "0 0 40px 0",
    fontWeight: "500",
    color: "#333",
  },
  descriptionBox: {
    maxWidth: "500px",
  },
  bioText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#1a1a1a",
    textAlign: "center", // Matches the centered text block in your image
    marginBottom: "30px",
  },
  socialContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  iconCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    border: "1px solid #000",
    borderRadius: "50%",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#000",
  },
  socialIcon: {
    textDecoration: "none",
  }
};