const UserConfig = require("@11ty/eleventy/src/UserConfig");
const tpPlugin = require("@teipublisher/pb-eleventy-plugin");

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
    // copy css
    eleventyConfig.addPassthroughCopy('src/resources/css');
    // copy TEI Publisher components
    eleventyConfig.addPassthroughCopy({
        'node_modules/@teipublisher/pb-components/dist/*.js': 'resources/scripts',
        'node_modules/@teipublisher/pb-components/lib/*.js': 'resources/lib',
        'node_modules/@teipublisher/pb-components/images/openseadragon/*': 'resources/images/openseadragon',
        'node_modules/@teipublisher/pb-components/images/leaflet/*': 'resources/images/leaflet', 
        'node_modules/@teipublisher/pb-components/i18n/common/*': 'resources/i18n/common'
    });

    eleventyConfig.addPlugin(tpPlugin, {
        remote: 'http://127.0.0.1:8080/exist/apps/tei-publisher/',
    });

    return {
        dir: {
          input: "src",
          output: "_site"
        }
    }
};