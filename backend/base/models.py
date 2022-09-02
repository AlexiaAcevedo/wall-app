from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    content = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)