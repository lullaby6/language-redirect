function languageRedirect(redirects) {
    redirects = Object.keys(redirects).reduce((acc, key) => {
        acc[key.toLowerCase()] = redirects[key];
        return acc;
    }, {});

    const data = {
        user_language: navigator.language || navigator.userLanguage,
        short_language: (navigator.language || navigator.userLanguage).split('-')[0]
    }

    Object.values(data).forEach(language => {
        const redirect = redirects[language]

        if (
            !redirect ||
            redirect === window.location.pathname ||
            `/${redirect}` === window.location.pathname ||
            redirect === window.location.href
        ) return

        window.location.replace(redirect)
    })

    return data
}

if (
    document.currentScript &&
    document.currentScript.src &&
    document.currentScript.dataset.languageRedirect
) {
    try {
        languageRedirect(JSON.parse(document.currentScript.dataset.languageRedirect))
    } catch (error) {
        console.error(error)
    }
}