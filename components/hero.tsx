'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  SendHorizontal,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Mail,
  Phone,
  ExternalLink,
  Zap,
  Shield,
  Layers,
  Rocket,
  Users,
  MapPin
} from 'lucide-react'

const skills = [
  'Next.js', 'React', 'GoLang', 'Node.js', 'TypeScript', 'JavaScript',
  'Java', 'HTML5', 'MySQL', 'Bootstrap', 'Git',
  'PostgreSQL', 'MongoDB', 'Docker', 'REST APIs', 'Oracle', 'Tailwind CSS'
]

export function Hero() {
  const [isAmharic, setIsAmharic] = useState(false)



  return (
    <section className="max-w-4xl mx-auto pt-4 md:pt-8 pb-16 space-y-12 md:space-y-16 antialiased px-4 md:px-0">
      {/* Header Info - Circular Side-by-Side Layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
        <div className="relative group shrink-0 flex flex-col items-center gap-4">
          <div className="relative">
            {/* Professional Glowing Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-muted shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src="/programmer.webp"
                alt="Hosaina Y"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Status Badges - Below Image */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full flex items-center gap-2 border border-border/50 shadow-sm">
              <MapPin size={10} className="text-muted-foreground/60" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">Addis Ababa, Ethiopia</span>
            </div>

          </div>
        </div>

        <div className="space-y-6 flex-1">
          <div className="space-y-1">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Hosaina Y.
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest border border-primary/20">
                Full Stack Engineer
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-foreground/90 text-justify hyphens-auto">
                Building fast, scalable, and production-ready web applications.
              </p>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-muted-foreground font-medium text-justify hyphens-auto">
                I turn ideas into clean, maintainable systems that scale from MVP to production SaaS.
                Specializing in Next.js, React, Node.js, and Golang, I focus on delivering better UX,
                secure APIs, and high-performance systems built to grow.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-6 text-muted-foreground/50 pt-2">
              <a href="https://t.me/hossiydev" target="_blank" rel="noopener noreferrer" aria-label="Visit my Telegram Digital Wall" className="hover:text-primary hover:scale-110 transition-all duration-300"><SendHorizontal size={20} /></a>
              <a href="https://www.linkedin.com/in/hossiy16/" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="hover:text-primary hover:scale-110 transition-all duration-300"><Linkedin size={20} /></a>
              <a href="https://instagram.com/hossiy16" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram" className="hover:text-primary hover:scale-110 transition-all duration-300"><Instagram size={20} /></a>
              <a href="https://github.com/hossiy21" target="_blank" rel="noopener noreferrer" aria-label="Check out my projects on GitHub" className="hover:text-primary hover:scale-110 transition-all duration-300"><Github size={20} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yhosaina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send me an email via Gmail" className="hover:text-primary hover:scale-110 transition-all duration-300"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {[
          { icon: <Zap size={18} />, title: 'Performance', desc: 'SSR, SEO, and fast UX patterns.' },
          { icon: <Layers size={18} />, title: 'Scalability', desc: 'Robust APIs & microservices with Go.' },
          { icon: <Shield size={18} />, title: 'Architecture', desc: 'Secure and production-ready systems.' },
          { icon: <Rocket size={18} />, title: 'Shipping', desc: 'Fast delivery without breaking code.' }
        ].map((item, i) => (
          <div key={i} className="flex gap-3 group">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              {item.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-bold tracking-tight">{item.title}</h3>
              <p className="text-[12px] text-muted-foreground leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What I Know */}
      <div className="space-y-4 pt-4 border-t border-border/30">
        <h2 className="font-bold text-[10px] uppercase tracking-[0.3em] text-foreground/30">What I Know</h2>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {skills.map((skill, si) => (
            <div key={si} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <span className="text-[12px] font-medium text-muted-foreground/80">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Box */}
      <div className="relative p-6 rounded-2xl bg-primary/[0.02] border border-primary/10 space-y-3 overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-110">
          <Rocket size={80} />
        </div>
        <h2 className="font-bold text-base tracking-tight text-foreground/80">Working with me</h2>
        <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed font-medium text-justify hyphens-auto">
          I work like a technical partner, not just a developer. Every project I build is
          performance-focused, scalable from day one, and built with clean code.
        </p>
        <div className="pt-2 flex flex-col gap-2">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yhosaina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Directly email me via Gmail" className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:underline group w-fit">
            Reach me at yhosaina@gmail.com <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="https://t.me/hossiydev" target="_blank" rel="noopener noreferrer" aria-label="View my work on Telegram Digital Wall" className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:underline group w-fit">
            Check out my Digital Wall <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Psalm of David - Click to Toggle Language */}
      <div
        onClick={() => setIsAmharic(!isAmharic)}
        className="pt-16 pb-8 border-t border-border/20 text-center space-y-4 cursor-pointer group/psalm select-none"
      >
        <div className={`transition-all duration-700 transform ${isAmharic ? 'opacity-0 -translate-y-2 hidden' : 'opacity-100 translate-y-0 block'}`}>
          <blockquote className="italic font-bold text-[18px] md:text-[22px] text-muted-foreground/80 leading-relaxed max-w-xl mx-auto font-serif group-hover/psalm:text-primary transition-colors text-justify md:text-center hyphens-auto">
            &ldquo;From the rising of the sun to its setting, the name of the Lord is to be praised.&rdquo;
          </blockquote>
        </div>

        <div className={`transition-all duration-700 transform ${isAmharic ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-2 hidden'}`}>
          <blockquote className="font-bold text-[17px] md:text-[20px] text-muted-foreground/80 leading-relaxed max-w-xl mx-auto font-serif group-hover/psalm:text-primary transition-colors text-justify md:text-center hyphens-auto">
            &ldquo;ከፀሐይ መውጫ ጀምሮ እስከ መግቢያው ድረስ የእግዚአብሔር ስም ይመስገን።&rdquo;
          </blockquote>
        </div>

        <div className="space-y-1">
          <p className="font-bold text-[10px] uppercase tracking-[0.4em] text-foreground/30">
            {isAmharic ? 'መዝሙር 113 ፥ 3' : 'Psalm 113:3'}
          </p>
        </div>
      </div>
    </section>
  )
}
