import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">¡Hola! Soy</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Jonathan Jiménez</h1>
              <h2 className="text-2xl md:text-3xl text-primary font-semibold">Desarrollador Full Stack</h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Apasionado por crear experiencias digitales excepcionales. Especializado en React, Node.js y tecnologías
              modernas de desarrollo web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contacto">Contáctame</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:escobarjimenez7@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Foto de perfil"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button variant="ghost" size="icon" asChild>
            <a href="#sobre-mi">
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
