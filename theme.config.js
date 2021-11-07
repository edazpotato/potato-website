export default {
  github: 'https://github.com/edazpotato/potato',
  docsRepositoryBase: 'https://github.com/edazpotato/potato-website',
  titleSuffix: ' – POTATO',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">POTATO</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Epic cool Discord bot
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="POTATO Discord bot documentation" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>All content & code is public domain 🎉</>,
  unstable_faviconGlyph: "🥔",
}
