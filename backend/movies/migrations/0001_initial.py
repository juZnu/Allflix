# Generated by Django 4.2.8 on 2024-01-23 17:33

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Movies",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=500)),
                ("genre", models.JSONField(default=list)),
                ("cast", models.JSONField(default=list)),
                ("crew", models.JSONField(default=list)),
                ("year", models.PositiveIntegerField()),
                ("overview", models.TextField(max_length=2000)),
                (
                    "rating",
                    models.FloatField(
                        validators=[
                            django.core.validators.MaxValueValidator(5),
                            django.core.validators.MinValueValidator(0),
                        ]
                    ),
                ),
            ],
        ),
    ]
