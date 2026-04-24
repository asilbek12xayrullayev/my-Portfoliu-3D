const config = {
  title: "Asilbek xayrullayev | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "My Portfoliu",
  email: "ax039281@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "My Portfoliu",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/pegase_pubgm_01.1?igsh=dGFkdnY5eGgzNzdl",
    facebook: "",
    github: "https://github.com/asilbek12xayrullayev",
  },
};
export { config };
