# Language Redirect

A lightweight and easy-to-use js library to redirection for support differents languages.

## Installation

#### CDN

```html
<script src='https://cdn.jsdelivr.net/gh/lullaby6/language-redirect/language-redirect.js'></script>
```

#### Download

<a href="https:/.jsdelivr.net/gh/lullaby6/language-redirect/language-redirect.js" target="_blank">Download</a> and include the downloaded file in your project:

```html
<script src="/path/to/language-redirect.js"></script>
```

## Usage

#### in HTML

In your script tag you can use the `data-language-redirect` attribute for config the redirects easly:

```html
<script
    src='https://cdn.jsdelivr.net/gh/lullaby6/language-redirect/language-redirect.js'
    data-language-redirect='{ "es": "/es/about.html" }'
></script>
```

#### in JavaScript

Also you can use the `languageRedirect` function to config the redirects via JavaScript:

```js
languageRedirect({
    es: '/es/index.html'
});
```

# License

MIT