import { Link } from 'react-router-dom';

export default function Button({ to, children, className = '', variant = 'primary', onClick }) {
  const baseStyles = 'px-8 py-4 font-medium transition-all duration-300 inline-block uppercase tracking-[0.15em] text-sm text-center';
  const variants = {
    primary: 'bg-gold text-black hover:bg-white',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
}
