module.exports = {
    plugins: [{
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/blog`,
            name: "markdown-pages"
        },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`
]

}