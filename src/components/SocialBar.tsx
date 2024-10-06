import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook} from "@fortawesome/free-brands-svg-icons";

const whatsapp = import.meta.env.VITE_WHATSAPP;
const facebook = import.meta.env.VITE_FACEBOOK;
const SocialBar = () => {
    return(
        <div className="flex justify-center space-x-8 pb-6 bg-black">
            <a href= {whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-6xl">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-6xl">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
    );
};

export default SocialBar;