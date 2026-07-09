import { Link } from "react-router-dom";
import "./ProjectDetail.css";

export default function NotFound() {
  return (
    <section className="project-detail missing-project">
      <div className="detail-inner">
        <p className="detail-eyebrow">404</p>
        <h1>This page does not exist.</h1>
        <br />
        <Link to="/" className="detail-button">
          ← Back Home
        </Link>
      </div>
    </section>
  );
}
