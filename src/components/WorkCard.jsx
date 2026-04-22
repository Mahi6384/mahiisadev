import Card from "./Card";
import Icon, { icons } from "./Icon";

const WorkCard = ({
  title,
  description,
  techStacks = "",
  githubUrl,
  liveLink,
}) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition p-6 bg-gray-900 flex flex-col h-full border border-gray-800">
      <div className="flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold tracking-widest text-fuchsia-200/90 font-sans pb-4">
          {title}
        </h3>

        {/* Description */}
        {Array.isArray(description) ? (
          <ul className="text-sm text-white/70 mb-5 space-y-2 list-disc list-outside ml-4">
            {description.map((point, index) => (
              <li key={index} className="leading-relaxed text-justify">
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-white/70 mb-5 leading-relaxed text-justify">
            {description}
          </p>
        )}

        {/* Tech Stacks */}
        {techStacks && (
          <div className="flex flex-wrap gap-2 mb-6">
            {techStacks.split(",").map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-fuchsia-900/20 text-fuchsia-200/80 border border-fuchsia-200/20"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-fuchsia-600/80 hover:bg-fuchsia-600 rounded-lg transition-colors w-full sm:w-auto"
          >
            <Icon path={icons.external} /> Live
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700 w-full sm:w-auto"
          >
            <Icon path={icons.external} /> GitHub
          </a>
        )}
      </div>
    </Card>
  );
};

export default WorkCard;
