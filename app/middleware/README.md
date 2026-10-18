# `middleware/` [Directory](https://nuxt.com/docs/guide/directory-structure/middleware)

Nuxt provides a customizable **route middleware** framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

>> Route middleware run within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.

There are three kinds of route middleware:

1. Anonymous (or inline) route middleware, which are defined directly in the pages where they are used.

2. Named route middleware, which are placed in the `middleware/` directory and will be automatically loaded via asynchronous import when used on a page. (Note: The route middleware name is normalized to kebab-case, so `someMiddleware` becomes `some-middleware`.)

3. Global route middleware, which are placed in the `middleware/` directory (with a `.global` suffix) and will be automatically run on every route change.

The first two kinds of route middleware can be defined in `definePageMeta`.

[Here](https://nuxt.com/docs/guide/directory-structure/middleware) is more info about middleware.