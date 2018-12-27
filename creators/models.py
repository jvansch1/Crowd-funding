from django.db import models

# Create your models here.

class Creator(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=1000)


