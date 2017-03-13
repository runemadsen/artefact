FROM node:6.1.0

RUN useradd --user-group --create-home --shell /bin/false artefact && npm install --global npm@3.8.6

ENV HOME=/home/artefact

COPY package.json $HOME/app/
RUN chown -R artefact:artefact $HOME/*

USER artefact
WORKDIR $HOME/app
RUN npm install

USER root
COPY . $HOME/app
RUN chown -R artefact:artefact $HOME/*
USER artefact

CMD ["npm", "start"]
