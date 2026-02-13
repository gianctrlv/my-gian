"use client";
import { useState } from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null); // close if already open
    } else {
      setOpenSection(section); // open clicked section
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About Me</h1>

      {/* MY INFO */}
      <div className={styles.section}>
        <button
          className={styles.button}
          onClick={() => toggleSection("info")}
        >
          My Info
        </button>

        {openSection === "info" && (
          <div className={styles.content}>
            <p>
              Hi, I'm Gian. I’m an IT student from Cordova, Cebu.
              I shifted to Information Technology because I became
              interested in how software and systems work.
              I believe in improving step by step every day.
            </p>
          </div>
        )}
      </div>

      {/* MY HOBBIES */}
      <div className={styles.section}>
        <button
          className={styles.button}
          onClick={() => toggleSection("hobbies")}
        >
          My Hobbies
        </button>

        {openSection === "hobbies" && (
          <div className={styles.content}>
            <ul>
              <li>Playing online games</li>
              <li>Learning programming</li>
              <li>Watching tech videos</li>
              <li>Exploring new technologies</li>
            </ul>
          </div>
        )}
      </div>

      {/* MY GOALS */}
      <div className={styles.section}>
        <button
          className={styles.button}
          onClick={() => toggleSection("goals")}
        >
          My Goals
        </button>

        {openSection === "goals" && (
          <div className={styles.content}>
            <ul>
              <li>Become a skilled full-stack developer</li>
              <li>Build real-world projects</li>
              <li>Work in a software company</li>
              <li>Continue improving daily</li>
            </ul>
          </div>
        )}
      </div>

      {/* MY PROJECTS */}
      <div className={styles.section}>
        <button
          className={styles.button}
          onClick={() => toggleSection("projects")}
        >
          My Projects
        </button>

        {openSection === "projects" && (
          <div className={styles.content}>
            <ul>
              <li>Mini POS System (C# - OOP)</li>
              <li>CRUD Web App (PHP & MySQL)</li>
              <li>Portfolio Website (Next.js)</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
