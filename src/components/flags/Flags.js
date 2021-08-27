import "./Flags.css";
import { useTranslation } from "react-i18next";
import { GRID_UNIT } from "../../constants.js";
import englishFlag from "../../assets/images/united-kingdom.png";
import germanFlag from "../../assets/images/germany.png";
import frenchFlag from "../../assets/images/france.png";
import italianFlag from "../../assets/images/italy.png";

const lngs = {
  en: { nativeName: "English", image: englishFlag },
  de: { nativeName: "Deutsch", image: germanFlag },
  fr: { nativeName: "French", image: frenchFlag },
  it: { nativeName: "Italian", image: italianFlag },
};

export const Flags = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flags-container">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.language === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          <img
            src={lngs[lng].image}
            width={GRID_UNIT * 2}
            data-toggle="tooltip"
            title={lngs[lng].nativeName}
            alt={lngs[lng].nativeName}
          />
        </button>
      ))}
    </div>
  );
};
