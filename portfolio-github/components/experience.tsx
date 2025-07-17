import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "Madrid, España",
      period: "2022 - Presente",
      description:
        "Lideré el desarrollo de aplicaciones web escalables utilizando React y Node.js. Implementé arquitecturas de microservicios y mejoré el rendimiento en un 40%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Barcelona, España",
      period: "2020 - 2022",
      description:
        "Desarrollé interfaces de usuario responsivas y accesibles para diversos clientes. Colaboré estrechamente con diseñadores UX/UI para implementar experiencias excepcionales.",
      technologies: ["Vue.js", "JavaScript", "SASS", "Webpack", "Figma"],
    },
    {
      title: "Junior Developer",
      company: "Startup Solutions",
      location: "Valencia, España",
      period: "2019 - 2020",
      description:
        "Comencé mi carrera profesional desarrollando funcionalidades para aplicaciones web. Aprendí las mejores prácticas de desarrollo y trabajo en equipo.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experiencia" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional y los logros más importantes en cada etapa
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
