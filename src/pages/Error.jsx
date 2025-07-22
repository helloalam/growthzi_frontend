import   { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Error.css";
import Footer from "../components/Footer/Footer";

function Error() {
  const subtitle = "Oops!! Something Is Missing";

  const [desc, setDesc] = useState(
    localStorage.getItem("errorDesc") ||
      "Sorry But The Page You Are Looking For Does Not Exist, Have Been Removed, Name Changed Or Is Temporarily Unavailable"
  );
  const [editDesc, setEditDesc] = useState(false);

  const [buttonVisible, setButtonVisible] = useState(
    localStorage.getItem("errorButtonVisible") === "true"
  );
  const [showButtonPopup, setShowButtonPopup] = useState(false);
  const [buttonText, setButtonText] = useState(localStorage.getItem("errorButtonText") || "Back To Home");
  const [buttonUrl, setButtonUrl] = useState(localStorage.getItem("errorButtonUrl") || "/");
  const [buttonStyle, setButtonStyle] = useState(localStorage.getItem("errorButtonStyle") || "outline");
  const [buttonColor, setButtonColor] = useState(localStorage.getItem("errorButtonColor") || "#ffffff");
  const [buttonSize, setButtonSize] = useState(localStorage.getItem("errorButtonSize") || "medium");

  const [tempText, setTempText] = useState(buttonText);
  const [tempUrl, setTempUrl] = useState(buttonUrl);
  const [tempStyle, setTempStyle] = useState(buttonStyle);
  const [tempColor, setTempColor] = useState(buttonColor);
  const [tempSize, setTempSize] = useState(buttonSize);

  const quillModules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["link", "clean"],
    ],
  };
  const quillFormats = [
    "font", "size", "bold", "italic", "underline", "strike", "align", "link"
  ];


  const handleSaveDesc = async () => {
    setEditDesc(false);

    localStorage.setItem("errorDesc", desc);

    const payload = {
      component: "ErrorPage",
      field: "Description",
      value: desc,
    };

    try {
      const res = await fetch("https://growthzi-backend0.onrender.com/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Description updated:", data.message);
    } catch (error) {
      console.error("Error updating description:", error);
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

    localStorage.setItem("errorButtonText", tempText);
    localStorage.setItem("errorButtonUrl", tempUrl);
    localStorage.setItem("errorButtonStyle", tempStyle);
    localStorage.setItem("errorButtonColor", tempColor);
    localStorage.setItem("errorButtonSize", tempSize);
    localStorage.setItem("errorButtonVisible", "true");

    const payload = {
      component: "ErrorPage",
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
      console.log(" Button updated:", data.message);
    } catch (error) {
      console.error(" Error updating button:", error);
    }
  };


  const handleDeleteButton = () => {
    setButtonVisible(false);
    setShowButtonPopup(false);
    localStorage.setItem("errorButtonVisible", "false");
  };

  return (
    <>
      <section className="error-hero">
        <nav className="navbar-hero">
          <div className="logo"><img src={require("../images/Logo.png")} alt="Logo" /></div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/404">  Error</a>
          </div>
        </nav>

        <div className="error-404-bg">404</div>

        <div className="error-content-container">
          <div className="editable-container center">
            <h2 className="error-subtitle">{subtitle}</h2>
          </div>

          <div className="editable-container center error-desc-container">
            <div className="error-desc" dangerouslySetInnerHTML={{ __html: desc }} />
            <span className="edit-icon" onClick={() => setEditDesc(true)}>✏️</span>
            {editDesc && (
              <div className="inline-popup-editor">
                <ReactQuill
                  theme="snow"
                  value={desc}
                  onChange={setDesc}
                  modules={quillModules}
                  formats={quillFormats}
                />
                <div className="editor-buttons">
                  <button className="save-btn" onClick={handleSaveDesc}>Save</button>
                  <button className="cancel-btn" onClick={() => setEditDesc(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>

          <div className="add-btn-container center">
            {buttonVisible ? (
              <div className="editable-container center">
                <a
                  href={buttonUrl}
                  className={`custom-btn ${buttonStyle} ${buttonSize}`}
                  style={{
                    backgroundColor: buttonStyle === "fill" ? buttonColor : "transparent",
                    color: buttonStyle === "fill" ? "#fff" : buttonColor,
                    border:
                      buttonStyle === "outline"
                        ? `1.5px solid #fff`
                        : `2px solid ${buttonColor}`,
                    marginTop: "22px",
                  }}
                >
                  {buttonText}
                </a>
                <span className="edit-icon" onClick={openButtonPopup}>✏️</span>
              </div>
            ) : (
              <button className="add-btn" onClick={openButtonPopup}>+ Add Button</button>
            )}
          </div>
        </div>

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
      <Footer />
    </>
  );
}

export default Error;
