# contentful-nuxt-sample

## Environments
- CMS: Contentful
- Hosting: Netlify
- Frondend framework: Nuxt.js

## Building on Netlify
- Set Environment variables on Netlify
    - `Site settings` > `Build & deploy` > `Environment variables`
    - `CTF_CDA_ACCESS_TOKEN` and `CTF_SPACE_ID` are required to build Contentful contents on Netlify
        - `.env` is not included in git repository
- Make build webhook on Netlify
    - `Site settings` > `Build & deploy` > `Build hooks`
    - Set name to hook such as `contentful-build`
- Add Netlify integration on Contentful
    - `Settings` > `Webhooks` > `Add` (Netlify template in sidebar)