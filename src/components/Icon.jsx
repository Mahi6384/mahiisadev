const Icon = ({ path, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={`h-5 w-5 ${className}`}
  >
    <path d={path} />
  </svg>
);

const icons = {
  monitor: "M3 4h18v10H3z M7 20h10M9 16h6",
  pen: "M12 20l-7 1 1-7L15 5l4 4-8 8zm0 0l4 4",
  wp: "M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm5.2 6l2.1-5.8L9 9m6.1 9l-3.2-9",
  external: "M14 3h7v7M10 14L21 3 M21 10v11H3V3h11",
};
export { icons };
export default Icon;
