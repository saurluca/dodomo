from datetime import date
from django.db import models


class TodoTask(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, default="description")
    due_date = models.DateField(default=date.today)
    completed = models.BooleanField(default=False)
    user = models.CharField(max_length=255, default="admin")

    def __str__(self):
        return self.title

    class Meta:
        managed = True
        db_table = "todo_task"
