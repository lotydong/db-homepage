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

  const script = [
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
