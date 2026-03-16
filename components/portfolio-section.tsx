import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TechFlow SaaS",
    category: "Web Application",
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Artisan Coffee",
    category: "E-commerce",
    color: "from-secondary/20 to-accent/20",
  },
  {
    title: "Zenith Finance",
    category: "Corporate Website",
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Bloom Wellness",
    category: "Landing Page",
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Nova Creative",
    category: "Portfolio",
    color: "from-secondary/30 to-secondary/10",
  },
  {
    title: "Urban Eats",
    category: "Restaurant Website",
    color: "from-accent/30 to-accent/10",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects we are proud of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient background placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary/60">紫</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-primary-foreground">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">{project.category}</p>
                <div className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
