from django.contrib import admin
from .models import BlogReviews, Blog, BlogTags, BlogCertification

# Register your models here.
class BlogReviewInline(admin.TabularInline):
    model = BlogReviews
    extra = 2

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author')
    inlines = [BlogReviewInline]

class BlogTagsAdmin(admin.ModelAdmin):
    list_display = ( 'tag',)
    filter_horizontal = ('blog_tags',)

class BlogCertificationAdmin(admin.ModelAdmin):
    list_display = ('certification', 'blog')



admin.site.register(Blog, BlogAdmin)
admin.site.register(BlogTags, BlogTagsAdmin)
admin.site.register(BlogCertification, BlogCertificationAdmin)
