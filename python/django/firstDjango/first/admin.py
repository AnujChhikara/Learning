from django.contrib import admin
from .models import Blog, BlogAuthorProfile,BlogTags


# Register your models here.

class BlogAuthorInline(admin.TabularInline):
    model = BlogAuthorProfile
    extra = 2

class BlogTagsInline(admin.TabularInline):
    model = BlogTags
    extra = 2

class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'summary', 'created_at']
    inlines = [BlogAuthorInline]  # Only BlogAuthorInline, as BlogTagsInline is not needed
    filter_horizontal = ['tags']  # Allow horizontal filtering of tags

admin.site.register(Blog, BlogAdmin)
admin.site.register(BlogTags)