import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_URL = "https://adonis-oussou.com";
const DEFAULT_TITLE = "Adonis Portfolio | Full Stack Developer";
const DEFAULT_DESC =
  "Portfolio d'Adonis, développeur Full Stack passionné par la création d'applications web modernes et performantes.";

const SEO = ({
  title,
  description = DEFAULT_DESC,
  path = "/",
}: SEOProps) => {
  const fullTitle = title ? `${title} | Adonis Portfolio` : DEFAULT_TITLE;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
