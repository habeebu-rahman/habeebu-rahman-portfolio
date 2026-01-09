export const SkillItem = ({ name, level }) => (
  <div className="group">
    <div className="flex justify-between text-sm font-medium mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-blue-700">{level}</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-900 to-purple-500 h-2 rounded-full transition-all duration-1000"
        style={{ width: level }}
      />
    </div>
  </div>
);
