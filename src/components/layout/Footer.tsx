export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="py-12 px-8 md:px-20 lg:px-32 border-t border-slate-200 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            © {year} Alice Zheng.
          </p>
  
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <a
              className="hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/alicezhenglilice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="https://github.com/Liilice"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }