import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./HeroSection.css";

function HeroSection() {
  const [title, setTitle] = useState(
    localStorage.getItem("heroTitle") || '<h1 class="second-heading">A Luxurious Way To Enjoy Your Life</h1>'
  );
  const [editTitle, setEditTitle] = useState(false);

  const [buttonVisible, setButtonVisible] = useState(localStorage.getItem("buttonVisible") === "true");
  const [showButtonPopup, setShowButtonPopup] = useState(false);

  const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "Button");
  const [buttonUrl, setButtonUrl] = useState(localStorage.getItem("buttonUrl") || "#");
  const [buttonStyle, setButtonStyle] = useState(localStorage.getItem("buttonStyle") || "fill");
  const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "#e77f2e");
  const [buttonSize, setButtonSize] = useState(localStorage.getItem("buttonSize") || "medium");

  const [tempText, setTempText] = useState(buttonText);
  const [tempUrl, setTempUrl] = useState(buttonUrl);
  const [tempStyle, setTempStyle] = useState(buttonStyle);
  const [tempColor, setTempColor] = useState(buttonColor);
  const [tempSize, setTempSize] = useState(buttonSize);

  const quillModules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      ['link', 'clean']
    ]
  };

  const quillFormats = ['font', 'size', 'bold', 'italic', 'underline', 'strike', 'align', 'link'];

  const handleSaveTitle = async () => {
    setEditTitle(false);
    localStorage.setItem("heroTitle", title);

    const payload = {
      component: "HeroSection",
      field: "Title",
      value: title,
    };

    try {
      const res = await fetch("https://growthzi-backend0.onrender.com/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Title Updated:", data.message);
    } catch (err) {
      console.error("Failed to update title:", err);
    }
  };

  const openButtonPopup = () => {
    setTempText(buttonText);
    setTempUrl(buttonUrl);
    setTempStyle(buttonStyle);
    setTempColor(buttonColor);
    setTempSize(buttonSize);
    setShowButtonPopup(true);
  };

  const handleSaveButton = async () => {
    setButtonText(tempText);
    setButtonUrl(tempUrl);
    setButtonStyle(tempStyle);
    setButtonColor(tempColor);
    setButtonSize(tempSize);
    setButtonVisible(true);
    setShowButtonPopup(false);

    localStorage.setItem("buttonText", tempText);
    localStorage.setItem("buttonUrl", tempUrl);
    localStorage.setItem("buttonStyle", tempStyle);
    localStorage.setItem("buttonColor", tempColor);
    localStorage.setItem("buttonSize", tempSize);
    localStorage.setItem("buttonVisible", "true");

    const payload = {
      component: "HeroSection",
      field: "Button",
      value: {
        text: tempText,
        url: tempUrl,
        style: tempStyle,
        color: tempColor,
        size: tempSize,
      },
    };

    try {
      const res = await fetch("https://growthzi-backend0.onrender.com/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Button Updated:", data.message);
    } catch (err) {
      console.error("Failed to update button:", err);
    }
  };

  const handleDeleteButton = () => {
    setButtonVisible(false);
    setShowButtonPopup(false);

    localStorage.removeItem("buttonText");
    localStorage.removeItem("buttonUrl");
    localStorage.removeItem("buttonStyle");
    localStorage.removeItem("buttonColor");
    localStorage.removeItem("buttonSize");
    localStorage.setItem("buttonVisible", "false");
  };

  return (
    <section className="hero">
      <nav className="navbar-hero">
        <div className="logo">
          <img src={require("../../images/Logo.png")} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/404">Error</a>
        </div>
      </nav>

      <div className="first-heading">Best Place to Relax and Enjoy</div>

      {/* Editable Title */}
      <div className="editable-container">
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <span className="edit-icon" onClick={() => setEditTitle(true)}>✏️</span>
        {editTitle && (
          <div className="inline-popup-editor">
            <ReactQuill theme="snow" value={title} onChange={setTitle} modules={quillModules} formats={quillFormats} />
            <div className="editor-buttons">
              <button className="save-btn" onClick={handleSaveTitle}>Save</button>
              <button className="cancel-btn" onClick={() => setEditTitle(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>

      {/* Editable Button */}
      <div className="add-btn-container">
        {buttonVisible ? (
          <div className="editable-container">
            <a href={buttonUrl} target="_blank" rel="noreferrer" className={`custom-btn ${buttonStyle} ${buttonSize}`}
              style={{
                backgroundColor: buttonStyle === "fill" ? buttonColor : "transparent",
                color: buttonStyle === "fill" ? "white" : buttonColor,
                border: `2px solid ${buttonColor}`
              }}>
              {buttonText}
            </a>
            <span className="edit-icon" onClick={openButtonPopup}>✏️</span>
          </div>
        ) : (
          <button className="add-btn" onClick={openButtonPopup}>+ Add Button</button>
        )}
      </div>

      {/* Popup */}
      {showButtonPopup && (
        <div className="popup-overlay">
          <div className="button-popup-editor">
            <h3>Link Button to page or URL</h3>
            <input type="text" placeholder="Enter URL" value={tempUrl} onChange={(e) => setTempUrl(e.target.value)} className="input-field" />
            <label>Button Style</label>
            <select value={tempStyle} onChange={(e) => setTempStyle(e.target.value)}>
              <option value="fill">Fill</option>
              <option value="outline">Outline</option>
            </select>
            <label>Button Text</label>
            <input type="text" value={tempText} onChange={(e) => setTempText(e.target.value)} className="input-field" />
            <label>Color</label>
            <input type="color" value={tempColor} onChange={(e) => setTempColor(e.target.value)} />
            <label>Button Size</label>
            <select value={tempSize} onChange={(e) => setTempSize(e.target.value)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div className="editor-buttons">
              <button className="save-btn" onClick={handleSaveButton}>Save Button</button>
              <button className="cancel-btn" onClick={() => setShowButtonPopup(false)}>Cancel</button>
              {buttonVisible && (
                <button className="delete-btn" onClick={handleDeleteButton}>Delete</button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
