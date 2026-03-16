import { Zap, Shield, Heart } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast websites optimized for speed.",
  },
  {
    icon: Shield,
    title: "High Quality",
    description: "Pixel-perfect designs with attention to detail.",
  },
  {
    icon: Heart,
    title: "Clean Design",
    description: "Minimalist aesthetics that speak volumes.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <span className="text-2xl">紫</span>
              <span className="text-sm font-medium uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A modern web studio focused on excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              A modern web studio focused on clean design, fast performance, and high-quality 
              websites for businesses. We combine Japanese-inspired minimalism with cutting-edge 
              technology to create digital experiences that stand out.
            </p>
            <div className="flex flex-col gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <div className="relative">
                <span className="text-[12rem] font-bold text-primary/20 select-none">紫</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary block">紫</span>
                    <span className="text-sm text-muted-foreground mt-2 block">Murasaki</span>
                    <span className="text-xs text-muted-foreground/60">Purple</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
