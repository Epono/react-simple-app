import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header-root">
      <Link to="/">{t("header.welcome")}</Link>
      <div className="header-right">
        <Link to="/about">{t("header.our_story")}</Link>
        <Link to="/membership">{t("header.membership")}</Link>
        <Link to="/write">{t("header.write")}</Link>
        <Link to="/sign-in">{t("header.sign_in")}</Link>
        <Link to="/get-started">{t("header.get_started")}</Link>
      </div>
    </div>
  );
};
