export default {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-eufemia-theme-handler',
      options: {
        defaultTheme: 'ui',
        storageId: 'eufemia-ui',
        themes: {
          ui: { name: 'DNB Eufemia' },
          sbanken: { name: 'Sbanken' },
        },
      },
    },
  ],
}
