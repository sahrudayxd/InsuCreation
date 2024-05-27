import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

import Nav from "../Nav";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

import "./index.css";

const FollowUs = () => (
  <div className="follow-us">
    <h1>FOLLOW US</h1>
    <div>
      <FaInstagram size={20} color="#000000" />
    </div>
    <div>
      <FaTwitter size={20} color="#000000" />
    </div>
    <div>
      <FaFacebookSquare size={20} color="#000000" />
    </div>
  </div>
);

const CommonLayout = ({ children }) => (
  <div className="common-layout-container">
    <Nav />
    <FollowUs />
    {children}
    <Reviews />
    <Footer />
  </div>
);

export default CommonLayout;
