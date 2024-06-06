from django.urls import path
from . import views

urlpatterns = [
    path("", views.ApiOverview, name="home"),
    path("<str:model_name>/all/", views.view, name="items"),
    path("<str:model_name>/add/", views.add, name="items"),
    path("<str:model_name>/<int:pk>/update/", views.update, name="update"),
    path("<str:model_name>/<int:pk>/delete/", views.delete, name="delete"),
]
