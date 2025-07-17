import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Jonathan Jiménez</h3>
            <p className="text-muted-foreground">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-2">
              <Link href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="#sobre-mi" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Mí
              </Link>
              <Link href="#proyectos" className="block text-muted-foreground hover:text-primary transition-colors">
                Proyectos
              </Link>
              <Link href="#contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Jonathanjimenez123"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:escobarjimenez7@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Jonathan Jiménez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
