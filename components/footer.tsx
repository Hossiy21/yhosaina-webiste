export function Footer() {
  return (
    <footer className="border-t border-border/20">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-3">
        <p className="text-[12px] text-muted-foreground/60 text-center font-medium">
          © {new Date().getFullYear()} Hosaina Y. All rights reserved.
        </p>
        <p className="text-[10px] text-muted-foreground/40 text-center uppercase tracking-[0.2em] font-bold">
          Domain proudly sponsored by <span className="text-primary/60">Yegara Host</span> after winning their challenge.        </p>
      </div>
    </footer>
  )
}
