# Page Transitions Travelapp

### Fork

🙋🏼 This repository is a rewrite with Angular & Angular Universal of [Sarah Drasner](https://twitter.com/sarah_edo)'s orginal work with [Vue & Nuxt](https://github.com/sdras/page-transitions-travelapp).

Live demo: [https://page-transitions-travelapp.azurewebsites.net](https://page-transitions-travelapp.azurewebsites.net)

### Original

This demo shows an example of how to achieve native-like page transitions on the web. There's much to be improved here- it's not meant to be a full-fledged web application, just a quick demo to show how this kind of implementation could theoretically work. These concepts can and should be expressed differently in your own application, the sky's the limit here! This is created with Nuxt and Vue.

Article explaining the demo is available at
[https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web](https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web)

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at http://localhost:4200/
$ ng serve

# build for production and launch server
$ npm run build:ssr && npm run serve:ssr

# generate static project
$ npm run build:ssr
```

## Runing in Docker

First build the project. See [build](#build) for details.

Now you can build Docker image:

```bash
docker build -t page-transitions-travelapp .
```

and run it:

```bash
docker run -p 80:80 page-transitions-travelapp
```

Navigate to http://localhost in order to see the containerized application.

## Further help

For detailed explanation on how things work, checkout the [Angular Universal docs](https://angular.io/guide/universal).
