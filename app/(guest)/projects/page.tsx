"use client";
import Image from "next/image";
import styles from "./projects.module.css";

export default function ProjectsPage() {

  const projects = [
    {
      title: "Mini POS System",
      description: "A C# project demonstrating OOP principles with a Point of Sale system.",
      imageUrl: "https://supportedly.com/wp-content/uploads/2021/02/Point-of-Sale-System-Small-Business-Supportedly.jpg",
    },
    {
      title: "CRUD Web App",
      description: "A PHP & MySQL web application that implements Create, Read, Update, Delete operations.",
      imageUrl: "https://codeshack.io/web/img/posts/crud-application-php-pdo-mysql.png",
    },
    {
      title: "Portfolio Website",
      description: "A Next.js portfolio website to showcase projects and skills.",
      imageUrl: "https://themewagon.com/wp-content/uploads/2022/12/Meyawo.png",
    },
  ];


  // BLOG HIGHLIGHTS
  const blogs = [
    {
      title: "My First Blog",
      description: "This blog talks about my journey as an IT student and learning web development.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69GIH4O14XZwvKHARH9DLZLSP_TEr8Z0bjg&s",
    },
    {
      title: "Why I Love Programming",
      description: "Programming allows me to create systems and solve real-world problems.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmVdeEIHgOShvnv-ZcArXbut9OajjMwardA&s",
    },
  ];


  return (
    <main className={styles.container}>

      {/* PROJECTS SECTION */}
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



      {/* BLOG HIGHLIGHTS SECTION */}
      <h1 className={styles.blogTitle}>Blog Highlights</h1>

      <div className={styles.projectsGrid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>


    </main>
  );
}
