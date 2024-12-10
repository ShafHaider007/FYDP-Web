from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Include the geo_app routes
    path('', include('geo_app.urls')),
]
