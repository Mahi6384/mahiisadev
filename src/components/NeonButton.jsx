const NeonButton = ({ children, className = "" }) => (
  <button
    className={`relative overflow-hidden rounded-2xl px-8 py-3 font-semibold tracking-wide text-fuchsia-200 shadow-[0_0_15px_fuchsia-200]
      transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_25px_fuchsia-200] active:scale-95 ${className}`}
  >
    <span className="relative z-10 drop-shadow-[0_0_5px_fuchsia-200]">
      {children}
    </span>
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-fuchsia-200 to-fuchsia-500 opacity-20 blur-xl" />
    <span className="absolute inset-0 rounded-2xl border border-fuchsia-200/40 animate-pulse" />
  </button>
);

export default NeonButton;
