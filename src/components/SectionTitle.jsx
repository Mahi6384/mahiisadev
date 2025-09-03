import GradientText from "./GradientText";
const SectionTitle = ({ kicker, title }) => (
  <div className="mb-8">
    <p className="text-sm tracking-[0.25em] text-fuchsia-300">{kicker}</p>
    <h2 className="mt-2 text-3xl font-semibold text-white">
      <GradientText>{title}</GradientText>
    </h2>
  </div>
);
export default SectionTitle;
