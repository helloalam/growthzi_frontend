import "./TeamSection.css";

const TwitterIcon = (
  <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#b39b72" strokeWidth="1.5"/><path d="M18 8.049c-.49.217-1.017.363-1.571.43A2.606 2.606 0 0 0 17.5 7c-.5.294-1.054.491-1.643.603A2.588 2.588 0 0 0 8.84 9.788a7.34 7.34 0 0 1-5.33-2.702S2.08 9.936 6.3 11.6c-.368.102-.758.155-1.16.155-.284 0-.562-.03-.83-.081.561 1.752 2.217 3.026 4.172 3.06A7.348 7.348 0 0 1 3 17.473c5.197.303 8.044-4.18 8.044-7.808 0-.119-.003-.237-.008-.355A5.934 5.934 0 0 0 18 8.049z" stroke="#b39b72" strokeWidth="1.5"/></svg>
);
const FacebookIcon = (
  <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#b39b72" strokeWidth="1.5"/><path d="M13.41 20v-7h2.34l.3-2.41h-2.64v-1.22c0-.7.19-1.18 1.18-1.18H16V6.29A13 13 0 0 0 14.42 6c-1.76 0-2.96 1.09-2.96 3.09v1.5H9.06v2.41h2.4v7h1.95z" stroke="#b39b72" strokeWidth="1.2"/></svg>
);
const InstaIcon = (
  <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#b39b72" strokeWidth="1.5"/><rect x="7" y="7" width="10" height="10" rx="5" stroke="#b39b72" strokeWidth="1.2"/><circle cx="12" cy="12" r="3" stroke="#b39b72" strokeWidth="1.2"/><circle cx="16" cy="8" r="1" fill="#b39b72"/></svg>
);

const team = [
  {
    name: "Laurent Wayne",
    role: "Hotel Manager",
    image: "", 
    socials: [TwitterIcon, FacebookIcon, InstaIcon],
  },
  {
    name: "Josh Mullins",
    role: "Kitchen Manager",
    image: "",
    socials: [],
  },
  {
    name: "Andrea Hugh",
    role: "Receptionista",
    image: "",
    socials: [],
  },
  {
    name: "James Norman",
    role: "Room Service",
    image: "",
    socials: [],
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-inner-container">
        <div className="team-header">
          <div className="team-vertical-line"></div>
          <div className="team-label">MEET OUR TEAM</div>
          <h2 className="team-title">Expert Team Persons</h2>
        </div>
        <div className="team-grid">
          {team.map((person, idx) => (
            <div className="team-card" key={idx}>
              <div className="team-img-wrap">
                {person.image ? (
                  <img src={person.image} alt={person.name} />
                ) : (
                  <div className="team-img-placeholder"></div>
                )}
                <div className="team-socials">
                  {person.socials.map((icon, i) => (
                    <span className="team-social-icon" key={i}>{icon}</span>
                  ))}
                </div>
              </div>
              <div className="team-card-footer">
                <div className="team-person-name">{person.name}</div>
                <div className="team-person-role">{person.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
