from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ('title',)
# forms.py
# from django import forms
# from .models import Task
#
# class TaskForm(forms.Form):
#     title = forms.CharField(max_length=200)
#     completed = forms.BooleanField(default=False)
#     description = forms.CharField(widget=forms.Textarea)
