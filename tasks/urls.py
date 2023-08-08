from django.contrib import admin
from django.urls import path
from tasks.views import task_list, create_task, update_task, delete_task, task_list_json

urlpatterns = [
    path('', task_list, name='task_list'),
    path('create/', create_task, name='create_task'),
    path('update/<int:pk>/', update_task, name='update_task'),
    path('delete/<int:pk>/', delete_task, name='delete_task'),
    path('tasks/json/', task_list_json, name='task_list_json'),
    path('tasks/json/', task_list_json, name='update_status'),
]