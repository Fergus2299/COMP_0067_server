#!/bin/bash
echo Seed files running ...
sequelize db:seed --seed 20230316232610-programs-seeder.js
sequelize db:seed --seed 20230319185759-internalusers-seeder.js
sequelize db:seed --seed 20230326181536-companies-seeder.js
sequelize db:seed --seed 20230325224908-externalusers-seeder.js
echo Seed Successful, enjoy the rest of your day Mr Cassidy!
echo ;)