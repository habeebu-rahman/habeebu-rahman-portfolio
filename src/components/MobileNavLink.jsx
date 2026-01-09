export const MobileNavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-lg font-medium text-gray-300 hover:text-blue-900 p-2"
  >
    {children}
  </a>
);
