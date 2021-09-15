#! /usr/bin/env bash

cd Recipes-Server

DATABASE_URL=$DATABASE_URL DOTNET_ASPNETCORE_ENVIRONMENT=Production dotnet run &

cd ..

npm run build
npm run start:prod