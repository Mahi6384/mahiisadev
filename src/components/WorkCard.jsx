import Card from "./Card";
import Icon, { icons } from "./Icon";

const WorkCard = ({
  img,
  title,
  description,
  techStacks = "",
  githubUrl,
  liveLink,
}) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition p-0 bg-gray-900">
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-white/30">
            Screenshot
          </div>
        )}
      </div>

      <div className="p-2">
        {/* Title */}
        <h3 className="text-lg font-semibold tracking-widest  text-fuchsia-200/80 font-sans pb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/70 mb-3 line-clamp-5">{description}</p>

        {/* Tech Stacks */}
        {techStacks && (
          <div className="flex flex-wrap gap-2 mb-3">
            {techStacks.split(",").map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-fuchsia-900/10 text-fuchsia-200/70 border border-fuchsia-200/20"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
            >
              <Icon path={icons.external} /> GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
            >
              <Icon path={icons.external} /> Live
            </a>
          )}
          {/* {href && !liveLink && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
            >
              <Icon path={icons.external} /> Open
            </a>
          )} */}
        </div>
      </div>
    </Card>
  );
};

export default WorkCard;
