import React, { useEffect, useState } from "react";
import "../Styles/Bhaktiyoga.css";
import artaimage from "../assets/artaimage.png";
import artharthiimage from "../assets/artharthiimage.png";
import jijnasuimage from "../assets/jijnasuimage.png";
import jnaniimage from "../assets/jnaniimage.png";
function Bhaktiyoga() {
  const images = [artaimage, artharthiimage, jijnasuimage, jnaniimage];
  const [showImage, setShowImage] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setShowImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 900);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="BhaktiyogaPage">
      <div className="BhaktiyogaTopContainer">
        <div className="BhaktiyogaContent">
          <h1>Bhaktiyoga</h1>
          <p>
            <span>
              <b>
                Bhakti Yoga is the spiritual path of devotion, centered on
                developing a deep, personal relationship with the Divine through
                love, faith, and surrender.
              </b>
            </span>
          </p>
          <br />
          <section className="BhaktiyogaContent1">
            <p>
              Rooted in the teachings of the Bhagavad Gita, it teaches that the
              ultimate goal of life can be attained through pure and selfless
              devotion rather than only knowledge or action.
            </p>
          </section>

          <section className="BhaktiyogaContent2">
            <p>
              A devotee, or bhakta, expresses this love through prayer,
              chanting, worship, service, and constant remembrance of God. The
              essence of Bhakti Yoga lies in surrendering the ego and offering
              all thoughts, actions, and emotions to the Divine, seeing God as a
              beloved friend, parent, or guide.
            </p>
          </section>

          <section className="BhaktiyogaContent3">
            <p>
              This path is open to all, regardless of background, and emphasizes
              qualities like humility, compassion, trust, and unwavering faith.
              The Bhagavata Purana describes various forms of devotion,
              encouraging a continuous connection with the Divine in everyday
              life.
            </p>
          </section>

          <section className="BhaktiyogaContent4">
            <p>
              Bhakti Yoga also recognizes different types of devotees, from
              those who seek help in distress to those who worship with pure
              love and wisdom. Over time, sincere devotion purifies the heart,
              brings peace and joy, and ultimately leads to union with the
              Divine.
            </p>
          </section>
        </div>

        <div className="BhaktiyogaImage">
          <div className="BhaktiyogaImages">
            <div
              key={showImage}
              className={`image-container ${fade ? "fade-In" : "fade-Out"}`}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0.2)),url(${images[showImage]})`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="Bhaktiyogasubscribe">
          <div className="Bhaktiyogasubscribefirst">
            <div className="subcribearta">
              <div>
                <h2>Arta</h2>
              </div>
              <div>
                <ul className="subcribeartalist">
                  <li>
                    Arta devotees turn to God during times of distress,
                    suffering, fear, or difficult life situations seeking
                    relief.
                  </li>
                  <li>
                    Their devotion arises mainly from emotional pain,
                    uncertainty, and desire for protection and comfort from
                    divine power.
                  </li>
                  <li>
                    This type of devotion is sincere but often temporary,
                    depending on resolution of personal problems and hardships.
                  </li>
                  <li>
                    Arta devotion can gradually develop into deeper faith and
                    understanding with continued spiritual practice and
                    guidance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeartharthi">
              <div>
                <h2>Artharthi</h2>
              </div>
              <div>
                <ul className="subcribeartharthilist">
                  <li>
                    Artharthi devotees worship God seeking wealth, success,
                    prosperity, and fulfillment of personal desires and
                    ambitions.
                  </li>
                  <li>
                    Their devotion is motivated by material goals and
                    expectation of favorable outcomes through divine blessings
                    and grace.
                  </li>
                  <li>
                    They believe God can grant success, remove obstacles, and
                    improve their overall life conditions significantly.
                  </li>
                  <li>
                    This form of devotion can gradually evolve into selfless
                    love as understanding and spiritual maturity increase.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Bhaktiyogasubscribesecond">
            <div className="subcribejijnasu">
              <div>
                <h2>Jijnasu</h2>
              </div>
              <div>
                <ul className="subcribejijnasulist">
                  <li>
                    Jijnasu devotees seek knowledge about God, driven by
                    curiosity and desire for spiritual understanding and truth.
                  </li>
                  <li>
                    Their devotion arises from questioning, studying scriptures,
                    and exploring deeper meanings of life and existence.
                  </li>
                  <li>
                    They are not motivated by material gains but by intellectual
                    and spiritual inquiry into divine reality.
                  </li>
                  <li>
                    Jijnasu devotion often leads to higher wisdom, eventually
                    transforming into pure and selfless love for God.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribejnani">
              <div>
                <h2>Jnani</h2>
              </div>
              <div>
                <ul className="subcribejnanilist">
                  <li>
                    Jnani devotees possess true knowledge of God and worship
                    with deep understanding and unwavering devotion always.
                  </li>
                  <li>
                    Their devotion is selfless, free from desires, and rooted in
                    realization of the divine truth and unity.
                  </li>
                  <li>
                    They see God in all beings, maintaining constant awareness
                    and experiencing oneness with the ultimate reality.
                  </li>
                  <li>
                    Jnani is considered the highest devotee, attaining spiritual
                    liberation through pure love, knowledge, and complete
                    surrender.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Bhaktiyoga-btn">
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default Bhaktiyoga;
