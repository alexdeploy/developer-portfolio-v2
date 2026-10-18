<h1 align="center">
  developer-portfolio-v2
</h1>
<p align="center">
  The first open source version of <a href="https://www.figma.com/community/file/1100794861710979147" target="_blank"> Portfolio for Developers Concept V.2</a>, designed by <a href="https://www.behance.net/darelova" target="_blank">@darelova</a> and developed by <a href="https://github.com/alexdeploy">@alexdeploy</a>. Built with <a href="https://nuxt.com/" target="_blank">Nuxt.js 3.0</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
</p>
<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/6fa55804-6799-419f-9222-359ba49c5e4c/deploy-status)](https://app.netlify.com/sites/developer-portfolio-v2/deploys)

</div>

<p align="center">
  <a href="" target="_blank">
    <img src="./public/images/demo-share.png" />
  </a>
</p>

## 🚨 Forking this repo

Feel free to fork this repository and make it your own! You can use it as a starting point for your own portfolio website. However, please note that the effort and time deserves to be recognized and *plagiarism is a bad practice*. If you use this project, we would greatly appreciate it if you give credits to the designer <a href="https://www.behance.net/darelova" target="_blank">@darelova</a> and the developer <a href="https://github.com/alexdeploy">@alexdeploy</a>, or linking <a href="https://github.com/alexdeploy/developer-portfolio-v2">this repo</a>.

Thanks 🤘 and enjoy it!

## 🛠 Installation

1. Clone the project to your local machine.

```sh
git clone https://github.com/alexdeploy/developer-portfolio-v2.git
```

2. Navigate to the project directory

```sh
cd developer-portfolio-v2
```

3. Install the required dependencies (Node 22.22.3 or newer; pnpm comes with Node through `corepack enable`)

```sh
pnpm install
```

4. Start the development server

```sh
pnpm dev
```

5. The development server should now be running on <a href="http://localhost:3000/">http://localhost:3000/</a>


## ✒️ Customization

The portfolio template includes some default content, but you can easily customize it to fit your needs. Here are some of the things you can change:

* Update the `developer.json` file on root directory, which contains all the text for the project and the portfolio "user" information, including *projects*, *about-me*, *gists* (Ids) and *contact* info.

  Its format is described in [`developer.schema.json`](./developer.schema.json). Editors such as VS Code use it to autocomplete and validate the file as you type, and `pnpm dev` / `pnpm build` stop with a clear error if the file does not match the schema.

* Fill in the optional `site` block of `developer.json` (public URL, description, sharing image, language). It drives the `<head>` meta tags, the social sharing cards and the web app manifest, which is generated at `/pwa/manifest.json`; nothing else needs editing for SEO.

* Update the `nuxt.config.ts` file for additional configuration.

* Change the styling and design of the website to match your personal style.

## 🚀 Building and Running for Production

1. Generate a full static production build

```sh
pnpm build
```

2. Preview the site as it will appear once deployed.

```sh
pnpm preview
```

## 🔄 Dependency updates

Dependencies are kept current by [Renovate](https://docs.renovatebot.com/), configured in [`renovate.json`](./renovate.json): it pins development dependencies, waits a few days before proposing a new npm release, and merges minor and patch updates of the tooling once CI passes. Forks are not affected unless you install the [Renovate GitHub App](https://github.com/apps/renovate) on your own repository; delete the file if you prefer another tool.

## Contributions

If you find any bugs or have any suggestions, you can open an <a href="https://github.com/alexdeploy/developer-portfolio-v2/issues">issue</a>.

## License

This project is licensed under the MIT License. See the <a href="https://github.com/alexdeploy/developer-portfolio-v2/blob/main/LICENSE">LICENSE</a> file for more information.