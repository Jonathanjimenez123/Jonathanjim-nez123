import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code,
      title: "Desarrollo Limpio",
      description: "Código mantenible y escalable siguiendo las mejores prácticas",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Creativas",
      description: "Enfoque innovador para resolver problemas complejos",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva en equipos multidisciplinarios",
    },
    {
      icon: Zap,
      title: "Aprendizaje Continuo",
      description: "Siempre actualizado con las últimas tecnologías",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soy un desarrollador apasionado con más de X años de experiencia creando aplicaciones web modernas y
            escalables. Me encanta transformar ideas en realidades digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
