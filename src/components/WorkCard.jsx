import Card from "./Card";
import Icon, { icons } from "./Icon";
const WorkCard = ({ img, title, href }) => (
  <Card className="group overflow-hidden p-0">
    <div className="aspect-[16/10] w-full bg-white/5">
      {img ? (
        <img src={img} alt="project" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center text-white/30">
          Screenshot
        </div>
      )}
    </div>
    <div className="p-5">
      <p className="text-center text-sm text-white/80">{title}</p>
    </div>
    <a
      href={href}
      className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/80 opacity-0 transition group-hover:opacity-100"
      target="_blank"
      rel="noreferrer"
    >
      Open
      <Icon path={icons.external} />
    </a>
  </Card>
);
export default WorkCard;
