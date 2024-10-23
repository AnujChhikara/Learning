from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# Many to many

class BlogTags(models.Model):
    tag = models.CharField(max_length=100)

    def __str__(self):
        return self.tag

class Blog(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to='blog_images/')
    body=models.TextField()
    author = models.CharField(max_length=100, default='Anonymous')
    tags = models.ManyToManyField(BlogTags, related_name='blogs')  # Add ManyToManyField to Blog
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
    


# One to One

class BlogAuthorProfile(models.Model):
    blog = models.OneToOneField(Blog, on_delete=models.CASCADE, related_name="author_profile")
    bio = models.TextField()  # Detailed biography of the author
    website = models.URLField(null=True, blank=True)  # Author's personal website
    social_handle = models.CharField(max_length=100, null=True, blank=True)  # Social media handle

    def __str__(self):
        return f"Profile of {self.blog.author}"