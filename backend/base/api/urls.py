from django.urls import path
from . import views
from .views import MyTokenObtainPairView


from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('', views.getRoutes),
    path('users/register', views.registerUser, name='register'),
    path('posts/create', views.createPost, name='create_post'),
    path('posts/get', views.getPosts, name='get_posts'), 

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]