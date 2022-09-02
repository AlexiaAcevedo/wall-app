from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from rest_framework import status
from base.api.serializers import PostSerializer
from base.models import Post
from base.api.serializers import UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.mail import EmailMessage


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/users/register',
        'api/posts/get',
        'api/posts/create',
    ]

    return Response(routes)

@api_view(['POST'])
def registerUser(request):
    print("register")
    data = request.data
    try:
        user = User.objects.create_user(
            email=data['email'],
            username=data['username'],
            password=data['password']
        )

        msg = EmailMessage('Welcome to The Wall App',
            'Hello - Thank you for joining The Wall. We are looking forward to your first post!', to=[user.email])
        msg.send()
        
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'Problem trying to save new user in the database!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def createPost(request):
    data = request.data
    print( f"user id: {data['user']}, content: {data['content']}")
    try:
        post = Post(user_id=data['user'], content=data['content'])
        post.save()
        serializer = PostSerializer(post, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'Problem trying to save new post in the database!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all().order_by('-created')
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)