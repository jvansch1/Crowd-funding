from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import User

# Create your views here.

def new(request):
    template = loader.get_template('user_creation/new.html')
    return HttpResponse(template.render({}, request))

def create(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = User(username=username, password=password).save()
    return HttpResponse("Creating A user")
