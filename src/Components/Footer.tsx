import {
  instagramIcon,
  LinkedInIcon,
  twitterIcon,
  facebookIcon,
  sendnaw_logo,
  emailIcon,
} from "../Assets";
const Footer = () => {
  //  Social links
  const instagramLink =
    "https://instagram.com/sendnow.co?igshid=OGQ5ZDc2ODk2ZA==";
  const twitterLink = "https://twitter.com/sendnowtech?s=21";
  const emailLink = "mailto:sendnownigeria@gmail.com";

  return (
    <footer className="footer flex justify-between max-lg:flex-col max-md:items-start max-lg:gap-20 max-md:px-7 max-xl:items-center pt-20 max-md:pb-12 pb-24">
      <div className="flex flex-col gap-4 max-md:items-start max-lg:items-center relative lg:left-[5%] xl:left-[8%] ">
        <img
          src={sendnaw_logo}
          alt="sendnaw logo"
          className="w-[50px] block h-[50px]"
        />
        <p className="text-[#918398] mt-4 text-lg font-[400]">
          Make all transactions in seconds
        </p>

        <div className="social-links flex flex-col gap-3 items-start max-md:items-start max-lg:items-center w-[195px] h-[58px]">
          <p className="text-lg text-[#918398]">Talk to us in real time</p>
          <div className="flex w-full gap-6">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="instagram icon" />
            </a>
            <a href={emailLink} target="_blank" rel="noopener noreferrer">
              <img src={emailIcon} alt="email icon" />
            </a>
            <a href={""} target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="linkedin icon" />
            </a>
            <a href={""} target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="facebook icon" />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="xl:w-2/5 lg:w-2/4 md:w-3/4 max-md:flex-wrap max-md:justify-between flex justify-between relative xl:right-[8%] lg:right-[5%]">
        <ul className="h-[160px] max-md:w-2/5">
          <li className="text-[#110319] flex flex-col gap-2 text-xl font-[700] mb-4">
            Product
            <ul>
              <li>Individuals</li>
              <li>Business</li>
              <li>Request Demo</li>
            </ul>
          </li>
        </ul>
        <ul className="h-[190px] max-md:w-2/5">
          <li className="text-[#110319] flex flex-col gap-2 text-xl font-[700] mb-4">
            Resources
            <ul>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Customer stories</li>
              <li>Careers</li>
            </ul>
          </li>
        </ul>
        <ul className="h-[160px] max-md:w-3/5">
          <li className="text-[#110319] flex flex-col gap-2 text-xl font-[700] mb-4">
            Contact
            <ul>
              <li>Email: hi@sendnaw.com</li>
              <li>Phone: +23491357885</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
