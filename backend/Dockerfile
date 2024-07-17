# syntax=docker/dockerfile:1.4
FROM python:3.12-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

#WORKDIR .
WORKDIR /app

# Install the application dependencies
COPY requirements.txt /app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY . /app/
COPY .env /app/

EXPOSE 8001

#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD ["gunicorn", "backend.wsgi.application", "--bind", "127.0.0.1:8000"]
#CMD ["gunicorn", "backend.wsgi.application", "--bind", "0.0.0.0:8001"]
CMD ["sh", "-c", "source /app/.env && gunicorn backend.wsgi:application --bind 0.0.0.0:8001"]
