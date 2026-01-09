export const SocialIcon = ({ icon, href }) => (
      <a 
        href={href} 
        target="_blank" 
        rel="noreferrer"
        className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-blue-900 hover:text-blue-900 transition-all transform hover:-translate-y-0.5"
      >
        {icon}
      </a>
    );