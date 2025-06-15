import { useAppSelector } from "../../hooks/hooks";

type Props = {};

const Location = () => {
  const { me } = useAppSelector((state) => state.auth);
  if(me)
 { return (
    <section className="location-section">
      <h2 className="location-title">📍 Локація</h2>
      <p className="location-address">
        Dwór Złotopolska Dolina <br />
        Trębki Nowe 90, 05-170 Zakroczym, Польща
      </p>

      <div className="map-container">
        <iframe
          title="Dwór Złotopolska Dolina"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.377147860012!2d20.52054628936983!3d52.454196799961565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ea619cfb322a5%3A0xf0e138c4d9bf66de!2sDw%C3%B3r%20Z%C5%82otopolska%20Dolina!5e0!3m2!1suk!2sua!4v1749854463997!5m2!1suk!2sua"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );}
};

export default Location;

