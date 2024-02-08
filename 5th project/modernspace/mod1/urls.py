from django.contrib import admin
from django.urls import path
from mod1.views import *

urlpatterns = [
    path('about/', about)
]
