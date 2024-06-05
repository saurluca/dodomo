from django.db import models


class TodoTask(models.Model):
    id = models.BigAutoField(primary_key=True)
    titel = models.CharField(max_length=255)
    description = models.CharField(max_length=255, default="description")
    assignee = models.CharField(max_length=255, default="me")

    class Meta:
        managed = True
        db_table = 'todo_task'
