import "./AmenitiesSection.css";
import gym from '../../icons/gym.svg';
import spa from '../../icons/spa.svg';
import breakfast from '../../icons/breakfast.svg';
const icons = {
  workout: (
<img src={gym} alt="gym" className="icon" />
)
 ,
  spa: (
<img src={spa} alt="gym" className="icon" />

  ),
  cuisines: (
<img src={breakfast} alt="gym" className="icon" />

  )
};

const amenities = [
  {
    icon: icons.workout,
    title: "Workout & Yoga Rooms",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#"
  },
  {
    icon: icons.spa,
    title: "Spa, Massage & Sauna",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#"
  },
  {
    icon: icons.cuisines,
    title: "Multiple Cuisines & Beverages",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#"
  }
];

function AmenitiesSection() {
  return (
    <section className="amenities-section">
      <div className="amenities-header">
        <div className="amenities-pretitle">INTRODUCING OUR SERVICES</div>
        <h2 className="amenities-title">
          Amenities That You<br />Can Enjoy
        </h2>
        <p className="amenities-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="amenities-grid">
        <div className="amenity-blank"></div>
        <div className="amenity-card dark">
          {amenities[0].icon}
          <h3 className="amenity-card-title">{amenities[0].title}</h3>
          <p className="amenity-card-desc">{amenities[0].desc}</p>
          <a href={amenities[0].link} className="amenity-card-link">Discover More &rarr;</a>
        </div>

        <div className="amenity-card dark">
          {amenities[1].icon}
          <h3 className="amenity-card-title">{amenities[1].title}</h3>
          <p className="amenity-card-desc">{amenities[1].desc}</p>
          <a href={amenities[1].link} className="amenity-card-link">Discover More &rarr;</a>
        </div>
        <div className="amenity-blank"></div>

        <div className="amenity-blank"></div>
        <div className="amenity-card dark">
          {amenities[2].icon}
          <h3 className="amenity-card-title">{amenities[2].title}</h3>
          <p className="amenity-card-desc">{amenities[2].desc}</p>
          <a href={amenities[2].link} className="amenity-card-link">Discover More &rarr;</a>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
