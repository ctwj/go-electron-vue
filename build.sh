#/bin/sh

cd ./frontend
yarn build
cd ..

# remove resources/app/index.html  slash 
# sed -i '' 's/\/assets\//assets\//g' resources/app/index.html

astilectron-bundler
