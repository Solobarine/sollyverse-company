import {
  faDiscord,
  faGithubAlt,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <div className="px-6 sm:px-20 bg-green-300 dark:bg-green-800 py-10">
      <div className="flex flex-wrap items-start gap-10 justify-between">
        <div className="grow">
          <span className="flex items-center mb-4 gap-2">
            <img
              src="/logo.png"
              alt="Sollyverse"
              width={undefined}
              className="w-6"
            />
            <h4 className="text-xl font-bold">Sollyverse</h4>
          </span>
          <small className="">
            Data Science such a so that service man techno software development.
          </small>
          <small className="block text-xs">
            Seamless Crypto Transactions at your fingertips.
          </small>
          <div className="grid py-4 gap-2">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPaperPlane} />
              <p>solobarine@gmail.com</p>
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhone} />
              <p>(+234) 9032 083 144</p>
            </span>
          </div>
        </div>
        <div className="flex items-start gap-x-32 gap-y-4 flex-wrap font-semibold">
          <div className="grid gap-2">
            <h4 className="text-lg font-bold">Explore</h4>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link href="/" className="hover:text-yellow-400">
              About Us
            </Link>
            <Link href="/" className="hover:text-yellow-400">
              Our Team
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact Us
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-bold">Product</h4>
            <Link href="/" className="hover:text-yellow-400">
              Rates
            </Link>
            <Link href="/" className="hover:text-yellow-400">
              Privacy
            </Link>
            <Link href="/" className="hover:text-yellow-400">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex items-center justify-between p-2 font-semibold">
        <p>Copyright &copy; {date.getFullYear()} Sollyverse</p>
        <div className="flex gap-2 items-center text-xl justify-end">
          <Link href="https://linkedin.com/in/solomon-akpuru">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="https://twitter.com/sollyverse">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faDiscord} />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faGithubAlt} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
