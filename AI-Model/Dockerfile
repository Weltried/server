FROM python:3.8-alpine

WORKDIR /usr/src/app/weltried_aimodel

COPY ./requirements.txt /usr/src/app/weltried_aimodel

RUN set -e; \
        apk add --no-cache --virtual .build-deps \
                gcc \
                libc-dev \
                linux-headers \
                mariadb-dev \
                python3-dev \
                postgresql-dev \
        ;

RUN pip install -r requirements.txt
RUN echo "Asia/Seoul" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

COPY . /usr/src/app/weltried_aimodel

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
