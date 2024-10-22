from django.db import models

# Create your models here.

class Blog(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to='blog_images/')
    body=models.TextField()
    author = models.CharField(max_length=100, default='Anonymous')
    summary = models.TextField(default='No summary')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title