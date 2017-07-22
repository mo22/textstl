
./node_modules/.bin/jspm install

./node_modules/.bin/jspm run cli.js

./node_modules/.bin/jspm bundle-sfx --skip-source-maps --minify web.js web.bundle.js
scp web.bundle.js alpha.mxs.de:/server/mxs.de/www/textstl/

