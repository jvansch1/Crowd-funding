from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader

# Create your views here.

def new(request):
    template = loader.get_template('user_creation/new.html')
    return HttpResponse(template.render({}, request))

def create(request):
    return HttpResponse("Creating a User")
