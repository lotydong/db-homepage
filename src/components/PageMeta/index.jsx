import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const PageMeta = ({ page }) => {
  const title = `${page.metaTitle} - ${process.env.SITE_TITLE}`
  const siteUrl = process.env.SITE_URL
  const apiUrl = process.env.API_URL
  const currentUrl = siteUrl + page.path

  const meta = [
    { name: `description`, content: page.metaDescription },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: page.metaDescription },
    { name: `twitter:creator`, content: process.env.TWITTER },
    { name: `twitter:card`, content: `summary` },
    { name: `og:type`, content: `article` },
    { name: `og:title`, content: title },
    { name: `og:url`, content: currentUrl },
    { name: `og:description`, content: page.metaDescription },
  ]

  const link = [
    { rel: `canonical`, href: currentUrl },
    { rel: `dns-prefetch`, href: apiUrl },
    { rel: `author`, href: process.env.GPLUS },
  ]

  const script = [{
    innerHTML: `
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        if (isIE11) {
          var script = document.createElement('script');
          script.src = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated';
          document.head.appendChild(script.outerHTML);
        }`,
  },
  {
    type: `application/ld+json`,
    innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "${siteUrl}",
          "logo": "${siteUrl}/static/favicons/apple-touch-icon-180x180.png"
        },
        {
          "@context" : "http://schema.org",
          "@type" : "WebSite",
          "name" : "${process.env.SITE_TITLE}",
          "url" : "${siteUrl}",
        }`,
  },
  {
    type: `application/ld+json`,
    innerHTML: `{
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "David Brookes",
      "url": "https://davidbrookes.co.uk",
      "sameAs" : [
        "https://www.linkedin.com/in/dbrookes",
        "https://github.com/dbrookes",
        "https://twitter.com/_dbrookes",
        "http://dribbble.com/dbrookes"
      ]
    }`,
  },
  ]

  return (
    <Helmet
      title={title}
      meta={meta}
      link={link}
      script={script}
    />
  )
}

PageMeta.propTypes = {
  page: PropTypes.object.isRequired,
}

export default PageMeta
