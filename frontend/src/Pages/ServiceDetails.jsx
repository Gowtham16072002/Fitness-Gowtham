import PricingPlans from "./PricingPlans";
import "../Styles/ServiceDetails.css";

function ServiceDetails() {
  return (
    <section className="service-details">
      <div className="service-container">
        <div className="cardSD left-card">
          <div className="icon-circleSD">
            <i className="fa-regular fa-user"></i>
          </div>
          <h3>Personal Training & Beginner Programs</h3>
          <p>
            Experience personalized one-on-one training designed around your
            unique goals, fitness level, and lifestyle. Whether you're just
            starting your fitness journey or looking to improve strength and
            technique, these programs provide safe, structured, and effective
            workouts that build confidence and deliver real results. With expert
            guidance and consistent support, you'll learn proper movement
            patterns, avoid injuries, and stay motivated every step of the way.
          </p>

          <h4>Includes:</h4>
          <ul>
            <li>Fully customized workout plans tailored to your goals</li>
            <li>One-on-one coaching with real-time feedback</li>
            <li>Proper form, posture and technique correction</li>
            <li>Beginner-friendly routines with gradual progression</li>
            <li>Strength, mobility, and flexibility training</li>
            <li>Confidence-building workouts for long-term consistency</li>
          </ul>
        </div>

        <div className="right-cards">
          <div className="cardSD">
            <div className="icon-circleSD">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <h3>Wellness Coaching</h3>

            <p>
              Holistic guidance focused on daily habits, recovery, and mental
              well-being to support long-term health and balance.
            </p>

            <h4>Includes:</h4>
            <ul>
              <li>Habit & lifestyle coaching</li>
              <li>Recovery & stress management</li>
              <li>Nutrition basics</li>
              <li>Mindset support</li>
            </ul>
          </div>

          <div className="cardSD">
            <div className="icon-circleSD">
              <i className="fa-solid fa-video"></i>
            </div>

            <h3>Online Coaching</h3>

            <p>
              Personalized virtual training with flexible schedules, progress
              tracking, and ongoing support — train anytime, anywhere.
            </p>

            <h4>Includes:</h4>
            <ul>
              <li>Personalized workout plans</li>
              <li>Progress tracking</li>
              <li>Virtual check-ins</li>
              <li>Ongoing support</li>
            </ul>
          </div>
        </div>
      </div>

      <PricingPlans />

      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-container">
          <div className="faq-item">
            <h4>How long does it take to see results?</h4>
            <p>
              Most people begin noticing improvements in strength, energy, and
              endurance within 4–6 weeks when following the program
              consistently.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you provide a diet plan?</h4>
            <p>
              Yes. Our Pro and Elite plans include customized diet guidance
              tailored to your fitness goals and lifestyle.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is online coaching available?</h4>
            <p>
              Yes! We offer online coaching programs that allow you to train
              from anywhere with workout plans, virtual check-ins, and progress
              tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
