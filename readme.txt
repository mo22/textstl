
jspm install

jspm cli.js

jspm bundle-sfx --skip-source-maps --minify web.js web.bundle.js
scp web.bundle.js alpha.mxs.de:/server/mxs.de/www/textstl/

