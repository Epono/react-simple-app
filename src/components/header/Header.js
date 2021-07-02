import { useTranslation } from "react-i18next";
import "./Header.css";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header-root">
      <div>{t("header.welcome")}</div>
      <div className="header-right">
        <a href="" className="header-item">
          {t("header.our_story")}
        </a>
        <a href="" className="header-item">
          {t("header.membership")}
        </a>
        <a href="" className="header-item">
          {t("header.write")}
        </a>
        <a href="" className="header-item">
          {t("header.sign_in")}
        </a>
        <a href="" className="header-item header-item-highlighted">
          {t("header.get_started")}
        </a>
      </div>
    </div>
  );
};
