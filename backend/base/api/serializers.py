from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from base.models import Post



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'username', 'password']



class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class PostSerializer(serializers.ModelSerializer):
    def getUsername(self, obj):
        return obj.user.username

    username = serializers.SerializerMethodField('getUsername')

    class Meta:
        model = Post
        fields = '__all__'