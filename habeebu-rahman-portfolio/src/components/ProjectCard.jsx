import { Icons } from "./Icons";

export const ProjectCard = ({ title, tags, description, icon,  }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-900 transition-all duration-300  group hover:-translate-y-2">
    <div className="p-8 space-y-4 ">
      <div className="flex justify-between items-start ">
        <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-900 transition-colors">
          {icon}
        </div>
        <Icons.ExternalLink
          size={20}
          className="text-gray-500 hover:text-blue-900 cursor-pointer"
        />
      </div>

      <h3 className="text-xl font-bold text-white group-hover:text-blue-900 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-gray-900 text-blue-700 border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
