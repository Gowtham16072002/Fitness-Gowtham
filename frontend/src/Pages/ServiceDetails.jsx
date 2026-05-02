import "../Styles/ServiceDetails.css";

function ServiceDetails({ data }) {
  return (
    <section className="service-details">
      <div className="service-container">
        {/* LEFT LARGE CARD */}
        {data.serviceCards
          .filter((card) => card.layout === "large")
          .map((card, index) => (
            <div key={index} className="cardSD left-card">
              <div className="icon-circleSD">
                <i className={card.icon}></i>
              </div>

              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <h4>Includes:</h4>
              <ul>
                {card.includes.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </div>
          ))}

        {/* RIGHT SMALL CARDS */}
        <div className="right-cards">
          {data.serviceCards
            .filter((card) => card.layout === "small")
            .map((card, index) => (
              <div key={index} className="cardSD">
                <div className="icon-circleSD">
                  <i className={card.icon}></i>
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <h4>Includes:</h4>
                <ul>
                  {card.includes.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-container">
          {data.faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
