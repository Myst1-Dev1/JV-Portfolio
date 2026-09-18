export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0d0d0d] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <span className="text-[#00FFFF] font-bold text-lg tracking-wide font-sans">
          João Victor
        </span>

        {/* Right */}
        <p className="text-gray-400 text-sm font-medium">
          © {new Date().getFullYear()} todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
