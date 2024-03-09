import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() { 
  return(
    <div>
        <footer className="flex flex-col justify-evenly [background:var(--color-dark-grey)] h-[150px]">
            <div className="flex items-center justify-between">
            <div className="p-4 ml-8">
                <h3 className="[color:var(--color-light-grey)] ">PDFTDLR</h3>
            </div>
            <div>
                <ul className="flex gap-[12px] [color:var(--color-light-grey)]">
                <li>Eleven</li>
                <li>Twelve</li>
                <li>Thirteen</li>
                <li>Fourteen</li>
                </ul>
            </div>
            <div className="mr-12 flex gap-3 [color:var(--color-light-grey)]">
                <a href="#"><span className="d text-1xl"><FaYoutube /></span></a>
                <a href="#"><span className="d text-1xl"><FaFacebookF /></span></a>
                <a href="#"><span className="d text-1xl"><FaTwitter /></span></a>
                <a href="#"><span className="d text-1xl"><FaInstagram /></span></a>
                <a href="#"><span className="d text-1xl"><FaLinkedinIn /></span></a>
            </div>
            </div>
            <div className="my-8 flex items-center justify-center text-xs [color:var(--color-light-grey)]">
            <p>PDFTDLR @2024. All rights reserved.</p>
            </div>
        </footer>
    </div>
    );
}

export default Footer;