ARG PRODUCT_VERSION

FROM node:26-slim

# RUN apk update && apk upgrade && \
#     apk --no-cache add ca-certificates bash openssl git curl wget 

# Use the system Google Chrome installed below instead of Puppeteer's download
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update
RUN apt-get install gnupg wget -y
RUN apt-get install fonts-noto-color-emoji -y
RUN wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# ADD https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf /usr/share/fonts/NotoColorEmoji.ttf 

RUN fc-cache -fv

COPY ./docker/docker-entrypoint.sh /
COPY ./yaml-resume-builder.tgz /
RUN ls -la /
RUN npm install -g /yaml-resume-builder.tgz
RUN rm /yaml-resume-builder.tgz

WORKDIR /src

ENTRYPOINT ["/docker-entrypoint.sh"]