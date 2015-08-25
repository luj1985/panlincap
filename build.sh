#!/bin/bash
rm -rf client/dist
rm -rf panlincap/public/images
rm -rf panlincap/public/styles
rm -rf panlincap/public/scripts
rm panlincap/public/*.html
rm panlincap/public/*.ico
rm panlincap/public/robots.txt

cd client
grunt build
cd ..

mv client/dist/* panlincap/public/
