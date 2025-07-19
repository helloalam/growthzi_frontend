import "./RoomSection.css";
import doublebed from "../../icons/doublebed.svg";
import ac from "../../icons/ac.svg";
import wifi from "../../icons/free-wifi.svg"
import bathtub from "../../icons/bathtub.svg"

const rooms = [
  {
    title: "Superior Suite",
    price: "$200/night",
    featured:true,
  },
  {
    title: "Junior Suite",
    price: "$170/night",
  },
  {
    title: "Deluxe Room",
    price: "$140/night",
  },
  {
    title: "Double Room",
    price: "$120/night",
  },
];

function RoomSection() {
  return (
    <section className="room-section">
      <div className="room-section-header">
        <div className="vertical-line"><hr></hr></div>
        <div className="room-section-label">OUR ROOM CHOICES</div>
        <h2 className="room-section-title">Luxury Rooms & Suites</h2>
      </div>
      <div className="room-cards-grid">
        {rooms.map((room, idx) => (
          <div className="room-card" key={idx}>
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
