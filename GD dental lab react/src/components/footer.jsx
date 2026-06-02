import Logo from "../assets/GD_Logo.png"

function Footer() {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-md shadow-lg w-[90%] mx-auto rounded-3xl text-white grid grid-cols-1 md:grid-cols-3 py-[5vh] pb-[15vh]">

      <div className="flex flex-col items-start px-[20%]">
        <img src={Logo} alt="GD_Logo" className="w-[40%] mb-[2vh]" />
        <p className="leading-relaxed">
          GD Dental Lab - 'Shramasafalya',<br />
          In front of 'Rathod Eye Hospital'<br />
          Ram Nagar, Akola - MH
        </p>
      </div>

      <div className="w-full h-[30vh] md:h-full px-[2%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3731.9896744020803!2d77.01139260000001!3d20.710643899999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72faaab2903a5%3A0xfea226f681525883!2sG.D%20Dental%20Lab!5e0!3m2!1sen!2sin!4v1780393754714!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '0.75rem' }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
        <div className="text-center mt-[10%]">
        <p>© {new Date().getFullYear()} GD Dental Lab. All rights reserved</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#" className="ml-[5vh]">Terms of Service</a>
        </div>
      </div>
      </div>

      <div className="flex flex-col px-[20%]">
        <p className="font-semibold mb-[2vh]">Quick Links</p>
        <div className="flex flex-col space-y-[1vh]">
          <a href="#" >Jump To the top</a>
          <a href="#" >About Us</a>
          <a href="#" >Our Team</a>
          <a href="#">Our Services</a>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;