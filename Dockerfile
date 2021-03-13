FROM node:slim

RUN apt-get update
RUN apt-get install -y git curl unzip
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["bash", "/entrypoint.sh"]