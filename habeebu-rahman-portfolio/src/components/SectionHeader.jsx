export const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center space-y-2">
    <span className="text-blue-700 font-bold tracking-widest text-sm uppercase">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>
  </div>
);
