#!/bin/bash
rm -rf client/dist
rm -rf server/public/images
rm -rf server/public/styles
rm -rf server/public/scripts
rm server/public/*.html
rm server/public/*.png
rm server/public/*.ico
rm server/public/robots.txt

cd client
grunt build
cd ..

mv client/dist/* server/public/
