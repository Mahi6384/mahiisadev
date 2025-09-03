const NeonButton = ({ children, className = "" }) => (
  <button
    className={`relative rounded-2xl px-6 py-3 font-medium transition hover:scale-[1.1]  ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 rounded-2xl bg-[#201a20] opacity-90" />
    <span className="absolute inset-3 rounded-3xl blur-lg bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-300 opacity-20" />
  </button>
);
export default NeonButton;
