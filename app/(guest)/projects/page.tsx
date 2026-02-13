"use client";
import Image from "next/image";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Mini POS System",
      description: "A C# project demonstrating OOP principles with a Point of Sale system.",
      imageUrl: "/images/mini-pos.jpg", // put your image in public/images
    },
    {
      title: "CRUD Web App",
      description: "A PHP & MySQL web application that implements Create, Read, Update, Delete operations.",
      imageUrl: "/https://codeshack.io/web/img/posts/crud-application-php-pdo-mysql.png",
    },
    {
      title: "Portfolio Website",
      description: "A Next.js portfolio website to showcase projects and skills.",
      imageUrl: "/images/portfolio-site.jpg",
    },
  ];

  return (
    <main className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
