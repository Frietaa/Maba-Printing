import Logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base text-base-content p-10">
      <aside>
        <a href="#">
          <img src={Logo} alt="Logo" className="h-auto w-45" />
        </a>
        <p className="font-[montserrat] text-lg">Est. 2023</p>
      </aside>
      <nav>
        <h6 className="footer-title">Tentang Kami</h6>
      </nav>
      <nav>
        <h6 className="footer-title">Katalog</h6>
        <a className="link link-hover">Skripsi Series</a>
        <a className="link link-hover">Sempro, etc Series</a>
        <a className="link link-hover">Tugas Series</a>
      </nav>
      <nav>
        <h6 className="footer-title">Layanan Kami</h6>
        <a className="link link-hover">Printing</a>
        <a className="link link-hover">Photo Card</a>
        <a className="link link-hover">Jasa Lainnya</a>
      </nav>
      <nav>
        <h6 className="footer-title">Kontak Kami</h6>
      </nav>
    </footer>
  );
};

export default Footer;
