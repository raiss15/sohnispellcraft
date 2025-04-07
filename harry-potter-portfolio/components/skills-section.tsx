"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "languages",
    title: "Spells (Languages)",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "technologies",
    title: "Potions (Technologies)",
    skills: [
      "Flask",
      "Django",
      "Node.js",
      "React.js",
      "Redux",
      "Next.js",
      "GraphQL",
      "MySQL",
      "MongoDB",
      "Git",
      "Kafka",
      "Linux",
      "Hibernate",
      "JDBC",
      "Spring framework",
      "Core Java",
      "Maven",
      "Gradle",
      "J2EE",
      "ETL",
      "JUnit",
      "Mockito",
      "Grafana",
    ],
  },
  {
    id: "devops",
    title: "Magical Artifacts (DevOps/Cloud)",
    skills: ["Jenkins", "Terraform", "Ansible", "AWS EC2", "AWS Lambda", "AWS DynamoDB", "Docker", "Kubernetes"],
  },
  {
    id: "methodologies",
    title: "Ancient Runes (Methodologies)",
    skills: ["Agile", "Scrum", "OOP", "Functional Programming", "CI/CD"],
  },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-primary">Magical Abilities</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Like a well-stocked spellbook, my technical skills have been carefully cultivated through years of study and
            practical application.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="font-cinzel">
                  {category.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-cinzel text-xl md:text-2xl font-bold mb-6 text-center">{category.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 h-full flex items-center justify-center text-center hover:bg-primary/20 transition-colors duration-300">
                            <span className="font-medium">{skill}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

