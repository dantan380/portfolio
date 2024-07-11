import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a full-stack web developer with previous experience in customer support working at Shopify and Jane App. With knowledge of several languages and through a growing process of planning, development, and testing, I am able to build robust web applications for the given requirement. Clear communication, project ownership, and strong teamwork are used to produce high quality output.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Since transitioning from Customer Support, I have worked with a variety of technologies, including React, Typescript, Node.js, Firebase, PostgreSQL, and MongoDB. Ever since I was a child, I loved to build things. When I discovered web development and the ability to build anything virtually to solve an issue or to provide a solution, I fell in love. Now I am currently seeking opportunities to provide value, while improving my skills further. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. I enjoy climbing, photography, keeping up to date and exploring new technologies, as well as building out my own personal projects!`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Mar 2024",
    role: "Web Developer",
    company: "Alpha Wave",
    description: `Implemented a converting e-commerce store with custom Liquid sections using HTML and CSS to work with Shopify. Worked closely with the CEO to design and build the website, while also implementing marketing and inventory workflows with Zoho One Suite.`,
    technologies: ["HTML", "CSS", "Liquid", "Shopify", "Zoho One", "Figma"],
    link: "https://www.linkedin.com/company/alpha-wave-inc/"
  },
  {
    year: "Sept 2022 - Aug 2023",
    role: "Customer Service Representative",
    company: "Jane App",
    description: `Successfully troubleshooted a multitude of technical issues, ensuring uninterrupted use of the Jane platform for allied healthcare practitioners.Provided live software demonstrations for prospective clients and collaborated with cross-functional teams for enhanced customer satisfaction.`,
    technologies: ["Jira", "Helpscout", "DataDog", "Call handling", "Software Demo"],
    link: "https://jane.app/"
  },
  {
    year: "Oct 2021 - Aug 2022",
    role: "Support Advisor",
    company: "Shopify",
    description: `Replied at least 2 emails an hour, answered 5 - 10 phone calls in 2 hours, and at least 7 chats in 1.5 hours. Employed empathy, conversational skills, and developed meaningful relationships with merchants to provide best in class customer support.`,
    technologies: ["Zendesk","DataDog", "Chat", "Email", "Call handling"],
    link: "https://www.shopify.com/ca"
  },
];

export const PROJECTS = [
  {
    title: "Poppins",
    image: project1,
    description:
      "A full-stack web application for managing check in/out of kids from classrooms or daycares.",
    technologies: ["HTML", "TailwindCSS", "React", "Node.js", "Firebase"],
    link: "https://github.com/dantan380/poppins"
  },
  {
    title: "Tenant",
    image: project2,
    description:
      "An application for tenants to leave comprehensive reviews of their living experiences, as well as view reivews left by other tenants.",
    technologies: ["HTML", "CSS", "Vue", "MongoDB", "Node.js", "Typescript", "Express"],
    link: "https://github.com/dantan380/tenant"
  },
  {
    title: "Smart To-Do List",
    image: project3,
    description:
      "Developed a sophisticated Smart Todo List app to automatically categorize todos into four distinct categories: Watch, Eat, Read, and Buy.",
    technologies: ["HTML", "CSS", "React", "PostgreSQL", "TailwindCSS", "Node.js"],
    link: "https://github.com/dantan380/smart-todo"
  },
];

export const CONTACT = {
  address: "Vancouver, British Columbia, Canada",
  phoneNo: "",
  email: "danieltan380@gmail.com",
};

export const LOGO = {
  github: {
    link: "https://github.com/dantan380/"
  },
  linkedin: {
    link: "https://www.linkedin.com/in/daniel-tan380/"
  }
}
