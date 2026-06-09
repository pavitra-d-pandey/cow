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
          ✓ धन्यवाद! आपका अनुरोध दर्ज कर लिया गया है। हमारी टीम 2 कार्य-दिवसों में
          आपसे संपर्क करेगी।
        </div>
        <button className="btn btn-green" onClick={() => setDone(false)}>
          एक और अनुरोध भेजें
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div>
          <label>पूरा नाम *</label>
          <input required placeholder="जैसे: राम प्रसाद यादव" />
        </div>
        <div>
          <label>मोबाइल नंबर *</label>
          <input required type="tel" placeholder="10 अंकों का मोबाइल" />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label>जिला</label>
          <input placeholder="जैसे: लखनऊ" />
        </div>
        <div>
          <label>रुचि का क्षेत्र</label>
          <select defaultValue="">
            <option value="" disabled>
              चुनें
            </option>
            <option>किसान प्रशिक्षण</option>
            <option>आजीविका मॉडल / इकाई-योजना</option>
            <option>लोकल-टेक किट खरीदना</option>
            <option>SHG / महिला समूह</option>
            <option>गौशाला क्षमता-संवर्धन</option>
            <option>अन्य</option>
          </select>
        </div>
      </div>
      <div>
        <label>आपकी देशी गायों की संख्या</label>
        <select defaultValue="">
          <option value="" disabled>
            चुनें
          </option>
          <option>कोई नहीं (नई शुरुआत)</option>
          <option>1–2</option>
          <option>3–5</option>
          <option>6–10</option>
          <option>10 से अधिक</option>
        </select>
      </div>
      <div>
        <label>संदेश / आवश्यकता</label>
        <textarea rows={4} placeholder="अपनी आवश्यकता संक्षेप में लिखें..." />
      </div>
      <button className="btn btn-primary" type="submit">
        अनुरोध भेजें →
      </button>
    </form>
  );
}
