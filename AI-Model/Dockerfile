FROM python:3.8-buster

WORKDIR /usr/src/app/weltried_aimodel

COPY ./requirements.txt /usr/src/app/weltried_aimodel
RUN pip install -r requirements.txt

COPY . /usr/src/app/weltried_aimodel

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
