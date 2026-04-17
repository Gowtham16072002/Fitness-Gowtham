import React, { useEffect, useState } from "react";
import "../Styles/Jnanayoga.css";
import vivekaimage from "../assets/vivekaimage.png";
import vairagyaimage from "../assets/vairagyaimage.png";
import shatsampattiimage from "../assets/shatsampattiimage.png";
import mumukshutvaimage from "../assets/mumukshutvaimage.png";
function Jnanayoga() {
  const images = [
    vivekaimage,
    vairagyaimage,
    shatsampattiimage,
    mumukshutvaimage,
  ];
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
    <div className="jnanayogaPage">
      <div className="jnanayogaTopContainer">
        <div className="jnanayogaContent">
          <h1>Jnana Yoga</h1>
          <p>
            <span>
              <b>
                Jnana Yoga is the path of knowledge and wisdom, focused on
                realizing the true nature of the Self and understanding ultimate
                reality.
              </b>
            </span>
          </p>
          <br />
          <section className="jnanayogaContent1">
            <p>
              Rooted in the teachings of the Upanishads, it emphasizes that
              ignorance (avidya) is the main cause of human suffering, and true
              liberation (moksha) can be attained through right knowledge. Jnana
              Yoga encourages deep thinking, questioning, and analysis to
              distinguish between the eternal and the temporary.
            </p>
          </section>

          <section className="jnanayogaContent2">
            <p>
              The practice of Jnana Yoga involves inquiry into fundamental
              questions such as “Who am I?” and “What is the nature of reality?”
              Through methods like self-reflection, meditation, and study of
              scriptures, a seeker gradually realizes that the individual self
              (Atman) is identical with the ultimate reality (Brahman). This
              realization removes illusions and leads to a deeper understanding
              of existence.
            </p>
          </section>

          <section className="jnanayogaContent3">
            <p>
              Jnana Yoga also requires certain qualifications, often referred to
              as Sadhana Chatushtaya, which include discrimination (Viveka),
              detachment (Vairagya), self-discipline (Shatsampatti), and a
              strong desire for liberation (Mumukshutva). These qualities help
              purify the mind and prepare the seeker for higher knowledge and
              spiritual insight.
            </p>
          </section>

          <section className="jnanayogaContent4">
            <p>
              Ultimately, Jnana Yoga leads to self-realization, where the
              individual transcends ignorance, ego, and worldly attachments. By
              gaining true knowledge, one experiences inner peace, freedom, and
              unity with the universal consciousness, achieving liberation from
              the cycle of birth and death.
            </p>
          </section>
        </div>

        <div className="jnanayogaImage">
          <div className="jnanayogaImages">
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
        <div className="jnanayogasubscribe">
          <div className="jnanayogasubscribefirst">
            <div className="subcribeviveka">
              <div>
                <h2>viveka</h2>
              </div>
              <div>
                <ul className="subcribevivekalist">
                  <li>
                    Viveka means discrimination between the eternal and helping
                    individuals understand true reality beyond illusions.
                  </li>
                  <li>
                    It enables seekers to distinguish between the Self and
                    non-Self, leading toward spiritual clarity and wisdom.
                  </li>
                  <li>
                    Through Viveka, one realizes that material pleasures are
                    temporary and not the ultimate source of happiness.
                  </li>
                  <li>
                    This understanding guides individuals to focus on spiritual
                    growth and realization of the eternal truth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribevairagya">
              <div>
                <h2>Vairagya</h2>
              </div>
              <div>
                <ul className="subcribevairagyalist">
                  <li>
                    Vairagya means detachment and it reducing desires and
                    attachments that distract the mind from spiritual goals.
                  </li>
                  <li>
                    It involves developing disinterest toward temporary objects
                    and limited ability to provide lasting happiness.
                  </li>
                  <li>
                    Vairagya does not mean renouncing duties, but performing
                    them without emotional attachment on results or outcomes.
                  </li>
                  <li>
                    This quality helps purify the mind and progress toward
                    self-realization and liberation from worldly bondage.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="jnanayogasubscribesecond">
            <div className="subcribeshatsampatti">
              <div>
                <h2>Shatsampatti</h2>
              </div>
              <div>
                <ul className="subcribeshatsampattilist">
                  <li>
                    Shatsampatti refers to six virtues that help control mind
                    and senses for spiritual growth and discipline.
                  </li>
                  <li>
                    These include Shama, Dama, Uparati, Titiksha, Shraddha, and
                    Samadhana, guiding balanced and focused living always.
                  </li>
                  <li>
                    Practicing these virtues develops inner strength and
                    concentration essential for spiritual progress.
                  </li>
                  <li>
                    Shatsampatti helps maintain mental stability and prepares
                    seekers for deeper knowledge and liberation from ignorance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribemumukshutva">
              <div>
                <h2>Mumukshutva</h2>
              </div>
              <div>
                <ul className="subcribemumukshutvalist">
                  <li>
                    Mumukshutva is the intense desire for liberation from the
                    cycle of birth, death, and suffering.
                  </li>
                  <li>
                    It motivates seekers to pursue spiritual practices with
                    dedication and unwavering commitment to ultimate truth.
                  </li>
                  <li>
                    This longing encourages detachment from world and
                    strengthens determination to achieve inner freedom.
                  </li>
                  <li>
                    Mumukshutva is essential for progress in Jnana Yoga, driving
                    the seeker toward enlightenment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="jnanayoga-btn">
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default Jnanayoga;
