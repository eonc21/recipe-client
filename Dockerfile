FROM node

WORKDIR /App

COPY . .

ENV PORT=5000
ENV DOTNET_ASPNETCORE_ENVIRONMENT=Production

RUN npm ci

RUN git clone https://github.com/eonc21/Recipes-Server.git

RUN wget https://packages.microsoft.com/config/ubuntu/21.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb
RUN rm packages-microsoft-prod.deb

RUN apt-get update; \
   apt-get install -y apt-transport-https && \
   apt-get update && \
   apt-get install -y aspnetcore-runtime-5.0 dotnet-sdk-5.0

# CMD [ "npm", "start" ]
ENTRYPOINT /app/start.sh