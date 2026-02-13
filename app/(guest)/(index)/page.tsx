import React from 'react';

export default function HomePage() {
  return (
    <main style={styles.container}>
      <div style={styles.wrapper}>
        {/* LEFT SIDE: IMAGE */}
        <div style={styles.imageContainer}>
          <img
            src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/475261090_1410320823360191_2052596759209340931_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=B14VwkLtMkUQ7kNvwGY-jM4&_nc_oc=AdnUBiOiC55aIpbx0KhSqR2g8nrYj54NP3KkgWgxfyEcn8yQJhooRnJOStEHkF0Qw58&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=NOywAtwxs_zxrOtVD7c99Q&oh=00_AfvFGqDmZOM0ByjOro3qZ-QtXSPJbW18h4t7JUfdqJ7QCw&oe=69943912" // Replace with your image link
            alt="Gian Lagahit"
            style={styles.profileImage}
          />
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div style={styles.contentContainer}>
          <h1 style={styles.nameHeader}>I'm Gian,</h1>
          
          <div style={styles.descriptionBox}>
            <p style={styles.bioText}>
              I am <strong>Gian Lagahit</strong>, a project manager with experience in planning, 
              coordinating, and delivering projects on time and within scope. I excel at bridging 
              communication between stakeholders and development teams, ensuring goals are 
              clearly defined and efficiently executed. With strong leadership, organization, 
              and problem-solving skills, I focus on driving team collaboration, managing risks, 
              and delivering high-quality results that align with business objectives.
            </p>
          </div>

          {/* SOCIAL ICON */}
          <div style={styles.socialContainer}>
            <a href="YOUR_FACEBOOK_LINK" style={styles.socialIcon}>
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