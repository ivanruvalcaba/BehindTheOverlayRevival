#!/bin/sh

rsvg-convert -w 16 -h 16 ../design/logo.svg -o ../extension/img/icon-16.png
rsvg-convert -w 19 -h 19 ../design/logo.svg -o ../extension/img/icon-19.png
rsvg-convert -w 38 -h 38 ../design/logo.svg -o ../extension/img/icon-38.png
rsvg-convert -w 48 -h 48 ../design/logo.svg -o ../extension/img/icon.png
rsvg-convert -w 96 -h 96 ../design/logo.svg -o ../extension/img/icon@2x.png
rsvg-convert -w 512 -h 512 ../design/logo.svg -o ../design/logo.png