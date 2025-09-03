const Card = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);
export default Card;
