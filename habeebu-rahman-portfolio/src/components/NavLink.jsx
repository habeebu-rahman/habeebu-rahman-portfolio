
export const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-900 hover:text-blue-900 font-medium transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
  </a>
);
