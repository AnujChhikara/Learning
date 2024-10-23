# Generated by Django 5.1.2 on 2024-10-22 15:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first', '0003_blogreviews'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogAuthorProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.TextField()),
                ('website', models.URLField(blank=True, null=True)),
                ('social_handle', models.CharField(blank=True, max_length=100, null=True)),
                ('blog', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='author_profile', to='first.blog')),
            ],
        ),
        migrations.CreateModel(
            name='BlogTags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=100)),
                ('blog', models.ManyToManyField(related_name='tags', to='first.blog')),
            ],
        ),
    ]
