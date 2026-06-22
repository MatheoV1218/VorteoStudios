// src/components/SectionTitle.tsx
import "./SectionTitle.css";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionTitle;