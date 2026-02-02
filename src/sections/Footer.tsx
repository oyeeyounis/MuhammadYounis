import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Muhammad Younis. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1 flex items-center justify-center sm:justify-start gap-1">
              Built with <Heart size={12} className="text-red-400" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
