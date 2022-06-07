const settings = {
  "name": "fra-iccapp",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "FRA ICCAPP",
      "description": "Official portal of FRA ICCAPP"
    }
  },
  "packages": [
    {
      name: "@frontity/frontity-chakra-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "FRA ICCAPP",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: false,
          // the top-level navigation labels and links
          menu: [
            ["Home", "/"],
            ["Members", "/members/"],
            ["Events", "/category/events/"],
            ["About", "/about/"],
            ["Contact", "/test-page/"],
          ],
          // the social links
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#fff4da",
              100: "#ffe0ae",
              200: "#ffcc7d",
              300: "#ffb84b",
              400: "#ffa31a",
              500: "#e68a00",
              600: "#b36b00",
              700: "#000000",
              800: "#4f2d00",
              900: "#1f0d00",
            },
            accent: {
              50: "#ede4d3",
              100: "#fbe3b2",
              200: "#f6d086",
              300: "#f1be58",
              400: "#eca419",
              500: "#d49212",
              600: "#a5710b",
              700: "#775105",
              800: "#483100",
              900: "#1d0f00",
            },
          },
        },
      },
    },
/*
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    }, */
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://backend.iccappfra.infrastructure.aws.dev/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
