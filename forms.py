from django import forms
from django.utils.translation import ugettext_lazy as _

class Appoinmentform(forms.Form):


        ClientName = forms.CharField(max_length=100)
        AppointmentDate = forms.DateTimeField()
        ApplyDate = forms.DateTimeField()
        NameOfApplicant = forms.CharField(max_length=50)
