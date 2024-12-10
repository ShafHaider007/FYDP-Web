from django.urls import path
from .views import cadastral_map

urlpatterns = [
    path("api/maps/cadastral/", cadastral_map, name="cadastral_map"),
]
