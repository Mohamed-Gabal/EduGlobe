import passportIcon from "../../../assets/Icons/document.svg";
import photoIcon from "../../../assets/Icons/document1.svg";
import checkIcon from "../../../assets/Icons/document2.svg";

const documentsData = [
  {
    id: 1,
    icon: passportIcon,
    title: "Passport Front Page",
    description:
      "A clear, colored scan of your passport's identification page showing your photo, name, and passport number.",
    meta: "Valid for 6+ months",
    metaIcon: checkIcon,
  },
  {
    id: 2,
    icon: photoIcon,
    title: "Recent Photograph",
    description:
      "A passport-style photograph taken within the last 6 months with a plain white or light background.",
    meta: "High resolution required",
    metaIcon: checkIcon,
  },
];

export default documentsData;
