#!/bin/bash
echo Seed files running ...
node_modules/.bin/sequelize db:seed --seed 20230316232610-programs-seeder.js
node_modules/.bin/sequelize db:seed --seed 20230319185759-internalusers-seeder.js
node_modules/.bin/sequelize db:seed --seed 20230326181536-companies-seeder.js
node_modules/.bin/sequelize db:seed --seed 20230325224908-externalusers-seeder.js
echo Seed Successful, enjoy the rest of your day Mr Cassidy!