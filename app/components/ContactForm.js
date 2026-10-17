"use client";

import { useState } from "react";

export default function ContactForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="form">
        <div className="note-ok">
          ✓ Thank you! Your request has been recorded. Our team will contact you
          within 2 working days.
        </div>
        <button className="btn btn-green" onClick={() => setDone(false)}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div>
          <label>Full Name *</label>
          <input required placeholder="e.g. Ram Prasad Yadav" />
        </div>
        <div>
          <label>Mobile Number *</label>
          <input required type="tel" placeholder="10-digit mobile" />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label>District</label>
          <input placeholder="e.g. Prayagraj" />
        </div>
        <div>
          <label>Area of Interest</label>
          <select defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>Farmer Training</option>
            <option>Livelihood Model / Unit Plan</option>
            <option>Buying a Local-Tech Kit</option>
            <option>SHG / Women's Group</option>
            <option>Gaushala Capacity Building</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label>Number of indigenous cows you have</label>
        <select defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option>None (just starting)</option>
          <option>1–2</option>
          <option>3–5</option>
          <option>6–10</option>
          <option>More than 10</option>
        </select>
      </div>
      <div>
        <label>Message / Requirement</label>
        <textarea rows={4} placeholder="Describe your requirement briefly..." />
      </div>
      <button className="btn btn-primary" type="submit">
        Send Request →
      </button>
    </form>
  );
}
