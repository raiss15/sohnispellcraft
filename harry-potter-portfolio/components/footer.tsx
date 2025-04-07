import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-cinzel text-xl font-bold text-primary">
              Sohni Rais
            </Link>
            <p className="text-sm text-muted-foreground mt-1">Software Engineer & Front-end Developer</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/raiss15"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/sohnirais"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:rais.s@northeastern.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sohni Rais. All rights reserved.</p>
          <p className="mt-1 font-cinzel">Mischief Managed</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

