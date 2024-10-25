from django.db import models
from django.contrib.auth.models import User
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
    

# One to many

class BlogReviews(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name="reviews")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating =  models.IntegerField()
    comment = models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} review for {self.blog.title}'
    
# Many to many

class BlogTags(models.Model):
    blog_tags = models.ManyToManyField(Blog, related_name="tags")
    tag = models.CharField(max_length=20)

    def __str__(self):
        return self.tag
    
# One to One

class BlogCertification(models.Model):
    blog = models.OneToOneField(Blog, on_delete=models.CASCADE, related_name="certification")
    certification = models.CharField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Certification for {self.blog.title}'
