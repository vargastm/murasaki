import Link from "next/link"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-accent">紫</span>
            <span className="text-xl font-semibold">Murasaki Studio</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-background/70 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Murasaki Studio. All rights reserved.
          </p>
          <a
            href="mailto:hello@murasaki.studio"
            className="text-accent hover:text-accent/80 transition-colors text-sm"
          >
            hello@murasaki.studio
          </a>
        </div>
      </div>
    </footer>
  )
}
