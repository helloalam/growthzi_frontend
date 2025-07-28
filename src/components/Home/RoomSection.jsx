import React, { useState } from "react";
import "./RoomSection.css";
import doublebed from "../../icons/doublebed.svg";
import ac from "../../icons/ac.svg";
import wifi from "../../icons/free-wifi.svg";
import bathtub from "../../icons/bathtub.svg";

const initialRooms = [
  {
    title: "Superior Suite",
    price: "$200/night",
    featured: true,
    image_id: "superior_suite",
    image_url: null,
  },
  {
    title: "Junior Suite",
    price: "$170/night",
    image_id: "junior_suite",
    image_url: null,
  },
  {
    title: "Deluxe Room",
    price: "$140/night",
    image_id: "deluxe_room",
    image_url: null,
  },
  {
    title: "Double Room",
    price: "$120/night",
    image_id: "double_room",
    image_url: null,
  },
];

function RoomSection() {
  const [rooms, setRooms] = useState(initialRooms);

  const handleImageUpload = async (event, image_id, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("image_id", image_id);

    try {
      const res = await fetch("https://growthzi-backend0.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        console.log("[SUCCESS] Uploaded image:", data.url);
        const updatedRooms = [...rooms];
        updatedRooms[index].image_url = data.url;
        setRooms(updatedRooms);
      } else {
        alert(data.error || "Upload failed");
        console.error("[ERROR] Upload failed:", data.error); 
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
      console.error("[ERROR] Upload request failed:", err);
    }
  };

  return (
    <section className="room-section">
      <div className="room-section-header">
        <div className="vertical-line"><hr /></div>
        <div className="room-section-label">OUR ROOM CHOICES</div>
        <h2 className="room-section-title">Luxury Rooms & Suites</h2>
      </div>
      <div className="room-cards-grid">
        {rooms.map((room, idx) => (
          <div className={`room-card ${!room.image_url ? "no-image" : ""}`} key={idx}>
            <div className="room-card-image-wrapper">
              {room.image_url ? (
                <img
                  src={room.image_url}
                  alt=""
                  className="room-card-image"
                />
              ) : null}

              <label className="edit-icon-wrapper">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, room.image_id, idx)}
                  style={{ display: "none" }}
                />
                ✏️
              </label>
            </div>

            <div className="room-card-info">
              <span className="room-card-title">{room.title}</span>
              <span className="room-card-price">{room.price}</span>
              <span className="room-card-hr">{room.hr}<hr></hr></span>
               {room.size &&
                <span className="room-card-size">{room.size}</span>
              }
                    {room.featured && (
                <div className="room-card-actions">
                  <button className="room-card-bookbtn">
                    Book Now <span className="arrow">{'>'}</span>
                  </button>
                  <span className="room-icons">
                    <img src={doublebed} alt="doublebed" />
                    <img src={ac} alt="ac" />
                    <img src={bathtub} alt="bathtub" />
                    <img src={wifi} alt="wifi" />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default RoomSection;