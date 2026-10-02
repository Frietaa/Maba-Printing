import Katalog1 from "/images/skripsi.png";
import Katalog2 from "/images/skripsi1.png";
import Katalog3 from "/images/skripsi2.png";

const Katalog = () => {
  return (
    <div
      id="katalog"
      className="hero bg-base-300 rounded-4xl min-h-screen mt-10 px-10 py-4"
    >
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold font-[poppins]">Hello there</h1>
          <p className="py-6 px-25 font-[montserrat]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* card 1 */}
            <div className="card bg-base-100 w-auto shadow-sm">
              <figure className="px-4 pt-4">
                <img
                  src={Katalog1}
                  alt="skripsi"
                  className="rounded-xl w-sm h-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="card bg-base-100 w-auto shadow-sm">
              <figure className="px-4 pt-4">
                <img
                  src={Katalog2}
                  alt="skripsi 1"
                  className="rounded-xl w-sm h-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="card bg-base-100 w-auto shadow-sm">
              <figure className="px-4 pt-4">
                <img
                  src={Katalog3}
                  alt="skripsi 2"
                  className="rounded-xl w-sm h-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
