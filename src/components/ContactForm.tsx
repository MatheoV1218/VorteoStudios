// src/components/ContactForm.tsx
import "./ContactForm.css";

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-row">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Email address" required />
      </div>

      <input type="text" name="business" placeholder="Business name / type" />

      <select name="websiteType" defaultValue="">
        <option value="" disabled>
          What do you need?
        </option>
        <option value="new-website">New website</option>
        <option value="redesign">Website redesign</option>
        <option value="landing-page">Landing page</option>
        <option value="not-sure">Not sure yet</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell me about the website you want..."
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;