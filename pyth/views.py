from django.http import HttpResponse,Http404,HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import *
from django.template.context import RequestContext
from django.contrib.auth.models import User
from forms import Appoinmentform
from django.contrib.auth.decorators import login_required

@login_required()
def home(request):
    return render_to_response('Layout/home.html',{'attempt':('There are no Questionnaire')},context_instance = RequestContext(request))
@login_required()
def index(request):
    return render_to_response('Layout/index.html',{'attempt':('There are no Questionnaire')},context_instance = RequestContext(request))
def Appointment(request):

    if request.method=='POST':
     form=Appoinmentform(request.POST)
     if form.is_valid():


         return render_to_response('Layout/index.html',{'form':'form'},context_instance=RequestContext(request))
