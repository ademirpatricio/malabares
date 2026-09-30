import { Helmet } from "react-helmet-async";

function SEO({ title, description, canonical, ogImage }) {
  const siteName = "Malabares MKT & TEC";
  const baseUrl = "https://malabares.com.br";
  const defaultOgImage = `${baseUrl}/og-image.jpg`;

  const fullTitle = title ? `${title} • ${siteName}` : `${siteName} • Marketing Digital, Sites e Estratégia Digital`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={`${baseUrl}${canonical || "/"}`} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
}

export default SEO;
