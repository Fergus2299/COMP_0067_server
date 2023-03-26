@echo off
echo Seed files running ...
call sequelize db:seed --seed 20230316232610-programs-seeder.js
call sequelize db:seed --seed 20230319185759-internalusers-seeder.js
call sequelize db:seed --seed 20230326181536-companies-seeder.js
call sequelize db:seed --seed 20230325224908-externalusers-seeder.js
echo Database seed successful!
echo enjoy the rest of your day Mr Cassidy ;)