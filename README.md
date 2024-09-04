# language-redirect.js

## Installation

### CDN

```html
<script src='https://cdn.jsdelivr.net/gh/lullaby6/language-redirect.js/language-redirect.cdn.js'></script>
```

or [Download](https://cdn.jsdelivr.net/gh/lullaby6/language-redirect.js/language-redirect.cdn.js)

## Usage

### HTML

In your script tag you can use the ````data-language-redirect``` attribute for config the redirects easly.

```html
<script
    src='https://cdn.jsdelivr.net/gh/lullaby6/language-redirect.js/language-redirect.cdn.js'
    data-language-redirect='{ "es": "es/index.html" }'
></script>
```

### JS

Also you can use the ````languageRedirect``` function to config the redirects via JavaScript.

```js
languageRedirect({
    es: 'es/index.html'
});
```