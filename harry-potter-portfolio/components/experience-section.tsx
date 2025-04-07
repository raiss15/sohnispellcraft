"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Front-end Developer Co-op",
    company: "Northeastern University",
    location: "Boston, USA",
    period: "Jan 2025 – present",
    description: [
      "Built responsive and scalable web applications using React.js, TypeScript, and Redux, adhering to modern development best practices.",
      "Collaborated with backend developers to integrate RESTful APIs into the frontend, ensuring seamless data flow and functionality.",
      "Conducted automated unit and integration testing using CI/CD pipelines, leveraging tools such as GitHub Actions to ensure code reliability and streamline deployment processes.",
      "Utilized tools like Postman API for testing API endpoints and debugging integration issues.",
      "Worked with databases such as MySQL to validate data consistency between frontend and backend systems.",
    ],
    badges: ["React.js", "TypeScript", "Redux", "RESTful APIs", "CI/CD", "MySQL"],
  },
  {
    title: "Software Engineer",
    company: "Technomargin",
    location: "Remote",
    period: "April 2020 – May 2023",
    description: [
      "Developed a React.js and Node.js application to assist individuals with drug abuse, featuring data analysis, inventory tracking, and clinical trial management for improved healthcare collaboration.",
      "Developed RESTful APIs using Spring Boot, improving API response time by 20% and enabling seamless integration with third-party systems with automated testing using JUnit and Mockito.",
      "Implemented a robust security framework using Spring Security, enhancing the application's protection against unauthorized access and ensuring compliance with industry standards.",
      "Created a school ERP system using React.js and Express.js, enhancing performance and decreasing server load by 25% through the implementation of code splitting, lazy loading, and caching strategies.",
    ],
    badges: ["React.js", "Node.js", "Spring Boot", "JUnit", "Mockito", "Express.js"],
  },
  {
    title: "Business Development Executive",
    company: "Silicon IT Hub",
    location: "Ahmedabad, India",
    period: "April 2019 – March 2020",
    description: [
      "Spearheaded business development initiatives, achieving a 20% increase in conversion rates and securing a $2 million project within six months.",
      "Cultivated strong client relationships, improving customer satisfaction ratings from 72% to 97% through personalized service and strategic account management.",
    ],
    badges: ["Business Development", "Client Relations", "Sales"],
  },
  {
    title: "Business Development Executive",
    company: "WhiteFox Global Solutions",
    location: "Ahmedabad, India",
    period: "April 2017 – Dec 2018",
    description: [
      "Managed a high-volume lead pipeline, following up on 300 leads from marketing campaigns and increasing new business opportunities by 30%.",
      "Designed and executed targeted email marketing campaigns using MailChimp to engage potential clients and nurture leads through the sales funnel.",
    ],
    badges: ["Lead Management", "Email Marketing", "MailChimp"],
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-primary">Professional Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career path has been as adventurous as a journey through the Forbidden Forest, with each role adding new
            spells to my professional grimoire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30 rounded-full"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-primary border-4 border-background z-10 
                  left-[-12px] md:left-auto md:right-[-15px] md:left-[-15px]"
                  style={{ [index % 2 === 0 ? "right" : "left"]: "-15px" }}
                ></div>

                <Card className="relative border-primary/20 shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-cinzel text-xl md:text-2xl text-primary">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.location}
                      <div className="mt-1 font-medium">{exp.period}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4 list-disc pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm md:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

