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

3. Install the required dependencies

```sh
yarn
```

4. Start the development server

```sh
yarn dev
```

5. The development server should now be running on <a href="http://localhost:3000/">http://localhost:3000/</a>


## ✒️ Customization

The portfolio template includes some default content, but you can easily customize it to fit your needs. Here are some of the things you can change:

* Update the `developer.json` file on root directory, which contains all the text for the project and the portfolio "user" information, including *projects*, *about-me*, *gists* (Ids) and *contact* info.

* Update the `nuxt.config.ts` file for meta tags of website and some additional config.

* Update the `public/pwa/manifest.json` file for PWA config.

* Change the styling and design of the website to match your personal style.

## 🚀 Building and Running for Production

1. Generate a full static production build

```sh
yarn build
```

2. Preview the site as it will appear once deployed.

```sh
yarn preview
```

## Contributions

If you find any bugs or have any suggestions, you can open an <a href="https://github.com/alexdeploy/developer-portfolio-v2/issues">issue</a>.

## License

This project is licensed under the MIT License. See the <a href="https://github.com/alexdeploy/developer-portfolio-v2/blob/main/LICENSE">LICENSE</a> file for more information.