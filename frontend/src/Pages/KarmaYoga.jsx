import React, { useEffect, useState } from "react";
import "../Styles/KarmaYoga.css";
import nityakarmaimage from "../assets/nityakarmaimage.png";
import naimittikakarmaimage from "../assets/naimittikakarmaimage.png";
import kamyakarmaimage from "../assets/kamyakarmaimage.png";
import nishkamakarmaimage from "../assets/nishkamakarmaimage.png";

function karmaYoga() {
  const images = [
    nityakarmaimage,
    naimittikakarmaimage,
    kamyakarmaimage,
    nishkamakarmaimage,
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
    <div className="karmayogaPage">
      <div className="karmayogaTopContainer">
        <div className="karmayogaContent">
          <h1>Karma Yoga</h1>
          <p>
            <span>
              <b>
                Karma Yoga is the path of selfless action, teaching that one can
                attain spiritual growth and inner peace by performing one’s
                duties with the right attitude.
              </b>
            </span>
          </p>
          <br />
          <section className="karmayogaContent1">
            <p>
              Rooted in the teachings of the Bhagavad Gita, Karma Yoga
              emphasizes that actions are unavoidable, but the way we perform
              them determines whether they bind us or liberate us. The central
              idea is to act without attachment to the results, a principle
              known as Nishkama Karma.
            </p>
          </section>

          <section className="karmayogaContent2">
            <p>
              Instead of working for personal gain, recognition, or reward, a
              Karma Yogi performs duties sincerely and dedicates the outcomes to
              a higher purpose, such as God or the welfare of others. This
              approach reduces ego, selfishness, and anxiety, as the individual
              focuses only on effort, not on success or failure.
            </p>
          </section>

          <section className="karmayogaContent3">
            <p>
              Karma Yoga also classifies actions into types such as Nitya (daily
              duties), Naimittika (occasional duties), and Kamya (desire-driven
              actions), guiding individuals to gradually move toward selfless
              action. By practicing discipline, responsibility, and detachment,
              a person purifies the mind and develops qualities like humility,
              compassion, and balance.
            </p>
          </section>

          <section className="karmayogaContent4">
            <p>
              Ultimately, Karma Yoga is not about renouncing work but about
              transforming everyday actions into a form of spiritual practice,
              leading to inner freedom and realization of the true Self.
            </p>
          </section>
        </div>

        <div className="karmayogaImage">
          <div className="karmayogaImages">
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
        <div className="karmayogasubscribe">
          <div className="karmayogasubscribefirst">
            <div className="subcribenityakarma">
              <div>
                <h2>Nityakarma</h2>
              </div>
              <div>
                <ul className="subcribenityakarmalist">
                  <li>
                    Nitya Karma refers to daily obligatory duties performed
                    regularly without fail.
                  </li>
                  <li>
                    These actions maintain personal discipline and social
                    harmony in everyday life.
                  </li>
                  <li>
                    Neglecting Nitya Karma is believed to result in negative
                    spiritual consequences.
                  </li>
                  <li>
                    Performing them without attachment helps purify the mind and
                    reduce ego.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribenaimittikakarma">
              <div>
                <h2>Naimittikakarma</h2>
              </div>
              <div>
                <ul className="subcribenaimittikakarmalist">
                  <li>
                    Naimittika Karma refers to duties performed on special
                    occasions or specific circumstances.
                  </li>
                  <li>
                    These actions arise due to events like festivals, rituals,
                    or family responsibilities.
                  </li>
                  <li>
                    They are not daily duties but must be performed when the
                    situation demands.
                  </li>
                  <li>
                    Performing them sincerely helps maintain moral and spiritual
                    balance.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="karmayogasubscribesecond">
            <div className="subcribekamyakarma">
              <div>
                <h2>Kamyakarma</h2>
              </div>
              <div>
                <ul className="subcribekamyakarmalist">
                  <li>
                    Kamya Karma refers to actions performed with personal
                    desires, aiming for wealth, and fulfillment of ambitions.
                  </li>
                  <li>
                    These actions are motivated creating attachment and binding
                    individuals to consequences of their deeds.
                  </li>
                  <li>
                    Kamya Karma strengthens ego and desire, leading to repeated
                    cycles of action and reaction.
                  </li>
                  <li>
                    Spiritual teachings advise reducing Kamya Karma gradually,
                    encouraging individuals to shift toward selfless actions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribenishkamakarma">
              <div>
                <h2>Nishkamakarma</h2>
              </div>
              <div>
                <ul className="subcribenishkamakarmalist">
                  <li>
                    Nishkama Karma means performing actions without desire for
                    rewards.
                  </li>
                  <li>
                    This approach removes attachment to success and failure,
                    helping individuals remain calm, balanced, and peaceful.
                  </li>
                  <li>
                    Nishkama Karma reduces ego, selfishness, and anxiety,
                    allowing the mind to become pure, disciplined, and focused.
                  </li>
                  <li>
                    Practicing Nishkama Karma leads to inner freedom and
                    ultimately liberation from the cycle of birth, death.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="karmayoga-btn">
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default karmaYoga;
