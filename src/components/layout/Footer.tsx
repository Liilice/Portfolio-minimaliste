export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="mb-16 sm:mb-0 px-6 py-6 md:px-20 lg:px-10 xl:px-32 border-t border-slate-200 text-center md:text-left">
        <div className="flex flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            © {year} Alice Zheng.
          </p>
  
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <a
              className="hover:text-black transition-colors"
              href="https://www.linkedin.com/in/alicezhenglilice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-black transition-colors"
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