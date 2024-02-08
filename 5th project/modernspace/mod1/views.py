from django.shortcuts import render
from django.http import HttpResponse
from mod1.models import *

def index(request):
	return render(request,"index.html")


# Create your views here.
def login(request):
	return render(request,"login.html")

	