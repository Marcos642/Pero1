from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('aplicacoes.url')),   # gestao de url em aplicações, mais facil !
]
