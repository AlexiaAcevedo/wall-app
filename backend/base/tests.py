from django.test import Client
from django.test import TestCase
from .models import Post
from django.contrib.auth.models import User

from django.urls import reverse


class UserTest(TestCase):
    def setUp(self):
        user_one = User(
            email = 'test@gmail.com',
            username = 'test123',
            password = 'password'
        )
        user_one.save()
        print(user_one.id)

    def test_user_exists(self):
        user_count = User.objects.all().count()
        print(f"Number of users: {user_count}")
        self.assertEqual(user_count, 1)

    def test_register_url(self):
        c = Client()
        data = {
            "email": 'test@gmail.com',
            "username": 'test123',
            "password": 'password'
        }
        response = c.post('/api/users/register', data=data, content_type='application/json')
        print(dir(response))
        self.assertEqual(response.status_code, 200)


class PostTest(TestCase):
    def setUp(self):
        post = Post()
        post.content = "This is a test case"
        post.save()
        print(post.content)

    def test_post_exists(self):
        record_count = Post.objects.all().count()
        print(f"Number of posts: {record_count}")
        self.assertEqual(record_count, 1)

    def test_get_posts_url(self):
        c = Client()
        response = c.get('/api/posts/get')
        self.assertEqual(response.status_code, 200)

    def test_create_post_url(self):
        c = Client()
        response = c.post('api/posts/create', {
            "user": 1,
            "content": "Testing123"
            })
        self.assertEqual(response.status_code, 200)
