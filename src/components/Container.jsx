const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
);
export default Container;
