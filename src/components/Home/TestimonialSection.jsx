import "./TestimonialSection.css";

function TestimonialSection() {
  return (
    <section className="testimonial-bg">
      <div className="testimonial-header">
        <div className="testimonial-label">OUR CUSTOMER REVIEW</div>
        <h2 className="testimonial-title">What Our Client Says</h2>
      </div>
      <div className="testimonial-card-wrapper">
        <div className="testimonial-avatar"></div>
        <div className="testimonial-card">
          <div className="testimonial-stars">
            {[1,2,3,4,5].map(num => (
              <svg key={num} className="star" width="25" height="25" viewBox="0 0 20 20" fill="#FFD700">
                <polygon points="10,1.5 12.67,7.13 18.8,7.63 14,11.85 15.25,18.13 10,14.7 4.75,18.13 6,11.85 1.2,7.63 7.33,7.13" />
              </svg>
            ))}
          </div>
          <div className="testimonial-text">
            “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
          </div>
          <div className="testimonial-client">
            <span className="testimonial-client-name">Jackson Dean</span>
            <span className="testimonial-client-role">Guest</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
