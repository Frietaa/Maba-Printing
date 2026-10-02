const Hero = () => {
  return (
    <div id="hero" className="hero bg-base mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Content Image"
          src="/images/brosur.png"
          className="rounded-2xl shadow-2xl w-auto h-125 max-w-sm lg:max-w-lg"
        />
        <div className="pr-25">
          <h1 className="text-6xl font-extrabold font-[poppins]">
            Solusi Praktis <br /> Kebutuhan <br />
            Printing Anda!
          </h1>
          <p className="py-8 font-[montserrat]">
            Kami tahu rasanya dikejar dosen dan waktu. Karena itu, kami hadir
            untuk bantu kamu cetak skripsi, tugas akhir, dan semua kebutuhan
            kuliah tanpa drama.
          </p>
          <button className="btn btn-primary rounded-4xl px-8">
            <a href="#katalog">Katalog</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
