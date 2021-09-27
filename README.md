<h1 align="center">
    <img alt="to-do" src="src/assets/images/logo.svg" />
</h1>

<h4 align="center">
  Create realtime Q&A rooms for your meetings!
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/joao96/nlw-letmeask?style=flat-square">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joao96/nlw-letmeask?style=flat-square">
  <img alt="License" src="https://img.shields.io/github/license/joao96/nlw-letmeask?style=flat-square">
</p>

<p align="center">
  <a href="#checkered_flag-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sparkles-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-work-in-progress">Work In Progress</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#get-in-touch-monocle_face">Get in touch</a>
</p>

## :checkered_flag: Technologies

- [React JS](https://pt-br.reactjs.org/docs/getting-started.html)
- [Firebase SDK](https://firebase.google.com/docs/web/setup?hl=pt-br)
- [styled-components](https://styled-components.com/)
- [react-dark-mode-toggle](https://www.npmjs.com/package/react-dark-mode-toggle)
- [classnames](https://github.com/JedWatson/classnames)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: Setup

In order to run this application, it's required that you have [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

**Step 1:** Clone this repo & run a `cd` into project's folder.

**Step 2:** install node modules as below:

```
npm install
```

if you prefer:

```
yarn
```

**Step 3:**

```
yarn dev
```

Once the server is up, go to http://localhost:3000/ and you should see something like this:

<p align="center">
  <img src="src/assets/images/cover.png" alt="Initial page">
</p>

## :page_facing_up: License

<a href="https://github.com/joao96/nlw-letmeask/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/joao96/nlw-letmeask?style=flat-square">
</a>

<br />

This project is licensed under the GPL-3.0.

## :sparkles: How To Use

Since this is a static application, there is no authentication logic. In order to navigate from the Login page to the Dashboard page, you need to alter the URL to the following:

Create your own room by logging in using your Google Account or join an existing room by entering the code. If you just joined in, you can check out other people's question and react to them or create your own!

On the other hand, if you created a room, you're able mark question as answered or give them a highlight status. If you wish, you can delete questions as well.

## :construction: Work In Progress

I will be adding the following features over time:

- [:heavy_check_mark:] Nice looking README
- [:heavy_check_mark:] Toast for creating room and questions
- [:heavy_check_mark:] Nav to admin page after creating room
- [:heavy_check_mark:] Modal to close room
- [:heavy_check_mark:] Styled Components
- [:heavy_check_mark:] Dark theme

- [ ] Responsiveness

## Get in touch! :monocle_face:

[![Linkedin Badge](https://img.shields.io/badge/-João%20Victor%20Poletti-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jvpoletti/)](https://www.linkedin.com/in/jvpoletti/)
[![Gmail Badge](https://img.shields.io/badge/-jvpoletti@gmail.com-ff512f?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvpoletti@gmail.com)](mailto:jvpoletti@gmail.com)

<br />

Made with :green_heart: by [João Victor Poletti](https://github.com/joao96)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
