# syntax=docker/dockerfile:1
FROM python:3.12-alpine


WORKDIR /code

# Install the application dependencies
COPY requirements.txt /code/

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY . /code/

EXPOSE 8000

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
