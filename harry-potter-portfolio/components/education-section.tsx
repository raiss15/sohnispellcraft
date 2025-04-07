"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    school: "Northeastern University",
    location: "Boston, USA",
    degree: "MS in Information Systems",
    period: "Sept 2023 – Dec 2025",
    gpa: "GPA: 3.67/4.0",
    house: "gryffindor",
    color: "from-[#740001] to-[#D3A625]",
  },
  {
    school: "Marwadi University",
    location: "Rajkot, India",
    degree: "MS in Information Technology",
    period: "July 2012 – May 2016",
    gpa: "GPA: 8.2/10.0",
    house: "ravenclaw",
    color: "from-[#0E1A40] to-[#946B2D]",
  },
]

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-primary">Academic Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background has provided me with the knowledge and skills needed to excel in the magical world
            of software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden border-0 shadow-lg backdrop-blur-sm bg-card/90`}>
                  <div className={`h-3 bg-gradient-to-r ${edu.color}`}></div>
                  <CardHeader className="relative">
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 opacity-30 bg-[url('/images/${edu.house}-crest.png')] bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <CardTitle className="font-cinzel text-xl md:text-2xl text-primary">{edu.school}</CardTitle>
                    <CardDescription className="text-base">
                      <div className="mb-1">{edu.location}</div>
                      {edu.degree}
                      <div className="mt-1 font-medium">{edu.period}</div>
                      <div className="mt-1">{edu.gpa}</div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection

