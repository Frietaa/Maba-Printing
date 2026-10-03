import Location from "/icons/map-pin.svg";
import Mail from "/icons/mail.svg";
import Phone from "/icons/phone-call.svg";
import Youtube from "/icons/youtube.png";
import Instagram from "/icons/instagram.png";
import Tiktok from "/icons/tiktok.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="hero hero-content bg-base-200 min-h-screen text-start font-[poppins] rounded-4xl mt-10 px-10 py-4"
    >
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-4xl font-bold opacity-60 tracking-wide text-center">
          Kenali Kami
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              alt="Location Icon"
              src={Location}
            />
          </div>
          <div className="list-col-grow">
            <div>Outlet Kami</div>
            <div className="text-xs text-warp uppercase font-semibold opacity-60">
              Kampus Terpadu Universitas, Balun Ijuk, Kec. Merawang, Kabupaten
              Bangka, Kepulauan Bangka Belitung 33172, Indonesia
            </div>
          </div>
        </li>

        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" alt="Mail Icon" src={Mail} />
          </div>
          <div className="list-col-grow">
            <div>Email</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              mabaprinting@gmaii.com
            </div>
          </div>
        </li>

        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" alt="Phone Icon" src={Phone} />
          </div>
          <div className="list-col-grow">
            <div>Kontak Kami</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              +62 821 7860 3321
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
