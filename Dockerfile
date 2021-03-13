FROM hayd/debian-deno:1.5.2

RUN apt-get update
RUN apt-get install -y git nodejs

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]