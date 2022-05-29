FROM python:3.8-alpine

WORKDIR /usr/src/app/weltried_aimodel

COPY ./requirements.txt /usr/src/app/weltried_aimodel
RUN apk update \
    && apk add make automake gcc g++ subversion python3-dev gfortran \
    && apk add --update-cache --no-cache lapack-dev cmake
RUN pip install -r requirements.txt

COPY . /usr/src/app/weltried_aimodel

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
