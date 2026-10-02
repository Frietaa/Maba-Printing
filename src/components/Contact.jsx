import Icon1 from "/icons/headLogo.png";

const Contact = () => {
  return (
    <div className="hero hero-content bg-base min-h-screen text-center font-[poppins]">
      <div className="card w-96 bg-base-100 card-lg shadow-sm flex w-full flex-col lg:flex-row">
        {/* left side */}
        <div className="card-body bg-base-200 -mr-4">
          <h2 className="card-title text-2xl">Kenali Kami</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          {/* section location, email, and phone */}
          <div className="flex items-center space-x-4">
            <img src={Icon1} alt="Logo" className="h-auto w-10" />
            <div>
              <h2 className="card-title text-sm">Location</h2>
              <p className="text-sm font-[montserrat]">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={Icon1} alt="Logo" className="h-auto w-10" />
            <div>
              <h2 className="card-title text-sm">Location</h2>
              <p className="text-sm font-[montserrat]">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={Icon1} alt="Logo" className="h-auto w-10" />
            <div>
              <h2 className="card-title text-sm">Location</h2>
              <p className="text-sm font-[montserrat]">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          {/* icon section */}
          <h2 className="card-title">Follow Us</h2>
          <div className="flex items-center space-x-4">
            <a>
              <img src={Icon1} alt="Logo" className="h-auto w-10" />
            </a>
            <a>
              <img src={Icon1} alt="Logo" className="h-auto w-10" />
            </a>
            <a>
              <img src={Icon1} alt="Logo" className="h-auto w-10" />
            </a>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        {/* right side */}
        <div className="card-body bg-base-200 -ml-4">
          <h2 className="card-title">Kirim Pesan</h2>
          {/* input fields */}
          <div className="flex gap-2">
            <input
              tpe="text"
              placeholder="Nama"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <input
              tpe="text"
              placeholder="Nama"
              className="input input-bordered w-full max-w-xs mb-4"
            />
          </div>
          <div className="flex gap-2">
            <input
              tpe="text"
              placeholder="Nama"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <input
              tpe="text"
              placeholder="Nama"
              className="input input-bordered w-full max-w-xs mb-4"
            />
          </div>
          <div className="flex flex-col">
            <input
              tpe="text"
              placeholder="Nama"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <input
              tpe="text"
              placeholder="Nama"
              className="input input-bordered w-full max-w-xs mb-4"
            />
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
