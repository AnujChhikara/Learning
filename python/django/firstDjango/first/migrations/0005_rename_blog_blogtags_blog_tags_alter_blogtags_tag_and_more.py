# Generated by Django 5.1.2 on 2024-10-24 16:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first', '0004_blogauthorprofile_blogtags'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogtags',
            old_name='blog',
            new_name='blog_tags',
        ),
        migrations.AlterField(
            model_name='blogtags',
            name='tag',
            field=models.CharField(max_length=20),
        ),
        migrations.CreateModel(
            name='BlogCertification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('certification', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('blog', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='certification', to='first.blog')),
            ],
        ),
        migrations.DeleteModel(
            name='BlogAuthorProfile',
        ),
    ]
