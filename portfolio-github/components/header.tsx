import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="text-xl font-bold">
          Jonathanjim-nez123
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
            Inicio
          </a>
          <a href="#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
            Sobre Mí
          </a>
          <a href="#habilidades" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
            Habilidades
          </a>
          <a href="#proyectos" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
            Proyectos
          </a>
          <a href="#experiencia" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
            Experiencia
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Jonathanjimenez123" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:escobarjimenez7@gmail.com">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
