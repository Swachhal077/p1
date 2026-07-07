export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wide transition';
  const styles = {
    primary: 'bg-brand text-white hover:bg-brand/90',
    outline: 'border border-brand text-brand hover:bg-brand hover:text-white',
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
