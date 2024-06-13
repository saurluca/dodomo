from django.db import models
from django.utils import timezone


class TodoTask(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, default="description")
    due_date = models.DateField(default=timezone.now().date())
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    class Meta:
        managed = True
        db_table = "todo_task"
