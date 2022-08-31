from django.contrib import admin

# Register your models here.
from .models import Post

class PostAdmin(admin.ModelAdmin):
    fields = ['user', 'content']


admin.site.register(Post, PostAdmin)