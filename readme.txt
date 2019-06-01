jspm install npm:opentype.js npm:base64-arraybuffer npm:three github:Doodle3D/ThreeJS-export-STL npm:optimist npm:google-fonts-complete

jspm install

jspm cli.js

jspm bundle-sfx --skip-source-maps --minify web.js web.bundle.js
scp web.bundle.js alpha.mxs.de:/server/mxs.de/www/textstl/

