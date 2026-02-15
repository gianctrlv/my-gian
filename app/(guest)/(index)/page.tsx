"use client";

import React, { useEffect, useState } from 'react';

export default function HomePage() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {

    const checkTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();

  }, []);


  const dynamicStyles = {
    ...styles,
    container: {
      ...styles.container,
      backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
    },
    nameHeader: {
      ...styles.nameHeader,
      color: isDark ? "#ffffff" : "#333",
    },
    bioText: {
      ...styles.bioText,
      color: isDark ? "#ffffff" : "#1a1a1a",
    },
    iconCircle: {
      ...styles.iconCircle,
      border: isDark ? "1px solid #ffffff" : "1px solid #000",
      color: isDark ? "#ffffff" : "#000",
    }
  };


  return (
    <main style={dynamicStyles.container}>
      <div style={dynamicStyles.wrapper}>

        <div style={dynamicStyles.imageContainer}>
          <img
            src="https://scontent.fceb9-1.fna.fbcdn.net/v/t39.30808-6/633926039_122108622597236043_8032364314136937697_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aY1j8vULN40Q7kNvwG9J4Bb&_nc_oc=AdknLz-oVmi7c8bkI7dNQDehpvqArKEkj3Spo36rHOumrvT1_FfbnXX5DyRploMreOE&_nc_zt=23&_nc_ht=scontent.fceb9-1.fna&_nc_gid=oy5_oKZH2MQw334bNgEKQg&oh=00_AftOKgyBR_G6RVEVof59PY0MfE_eEDdLPpk5VjjvPfuKGA&oe=69974491"
            alt="Gian Lagahit"
            style={dynamicStyles.profileImage}
          />
        </div>

        <div style={dynamicStyles.contentContainer}>

          <h1 style={dynamicStyles.nameHeader}>
            I'm Gian,
          </h1>
          
          <div style={dynamicStyles.descriptionBox}>
            <p style={dynamicStyles.bioText}>
              I am <strong>Gian Lagahit</strong>, a passionate IT student from Cordova.
              I enjoy programming, web development, and exploring new technologies.
              I am motivated to create projects that solve real-world problems and continuously improve my technical skills.
            </p>
          </div>

          <div style={dynamicStyles.socialContainer}>
            <a href="https://www.facebook.com/shrekako" style={dynamicStyles.socialIcon}>
              <span style={dynamicStyles.iconCircle}>f</span>
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
    fontFamily: "'Inter', sans-serif",
    padding: "20px",
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "1100px",
    width: "100%",
    alignItems: "stretch",
    gap: "60px",
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
  },

  contentContainer: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  nameHeader: {
    fontSize: "64px",
    fontFamily: "serif",
    marginBottom: "40px",
  },

  descriptionBox: {
    maxWidth: "500px",
  },

  bioText: {
    fontSize: "15px",
    lineHeight: "1.6",
    textAlign: "center",
    marginBottom: "30px",
  },

  socialContainer: {
    display: "flex",
    justifyContent: "center",
  },

  iconCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    fontSize: "20px",
    fontWeight: "bold",
  },

  socialIcon: {
    textDecoration: "none",
  }

};
