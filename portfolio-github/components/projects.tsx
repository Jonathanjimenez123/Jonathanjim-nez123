import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Jonathanjimenez123/ecommerce-platform",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com/Jonathanjimenez123/task-management-app",
      demo: "https://demo.com",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con pronósticos, mapas interactivos y alertas personalizadas.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      github: "https://github.com/Jonathanjimenez123/weather-dashboard",
      demo: "https://demo.com",
    },
    {
      title: "Gemini Sanitizer Patch",
      description:
        "Herramienta de seguridad para sanitizar y parchear vulnerabilidades en aplicaciones web utilizando IA.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "AI/ML", "Security", "Automation"],
      github: "https://github.com/Jonathanjimenez123/gemini-sanitizer-patch",
      demo: "https://github.com/Jonathanjimenez123/gemini-sanitizer-patch",
    },
    {
      title: "JSFinder Historical Scanner",
      description: "Scanner avanzado para encontrar y analizar archivos JavaScript históricos en aplicaciones web.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "Python", "Web Scraping", "Security"],
      github: "https://github.com/Jonathanjimenez123/jsfinder-historical-scanner",
      demo: "https://github.com/Jonathanjimenez123/jsfinder-historical-scanner",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Algunos de mis proyectos más destacados que demuestran mis habilidades técnicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
