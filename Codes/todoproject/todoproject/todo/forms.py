from django import forms

from .models import TodoModel

class TodoModelForm(forms.ModelForm):
    def __init__(self):
        for field in self.fields.values():
            field.widget.attrs["class"] = "form-control"

    class Meta:
        model = TodoModel
        fields = ("title", "memo", 'priority', 'duedate')      