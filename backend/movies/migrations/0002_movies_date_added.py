# Generated by Django 4.2.8 on 2024-01-23 19:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("movies", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="movies",
            name="date_added",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]