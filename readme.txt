jspm install \
  npm:base64-arraybuffer \
  npm:request \
  npm:opentype.js \
  npm:three \
  github:Doodle3D/ThreeJS-export-STL \
  npm:optimist \
  npm:google-fonts-complete

jspm ./cli.js

jspm install

jspm bundle-sfx --skip-source-maps --minify web.js web.bundle.js
scp web.bundle.js alpha.mxs.de:/server/mxs.de/www/textstl/
