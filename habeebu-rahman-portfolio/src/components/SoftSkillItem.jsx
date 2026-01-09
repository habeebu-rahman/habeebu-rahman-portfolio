export const SoftSkillItem = ({ title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
    <div>
      <h4 className="font-bold text-gray-200">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);
