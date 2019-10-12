from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=200)

    def __str__(self):
        return self.username


class Event(models.Model):
    title = models.CharField(max_length=70)
    description = models.TextField()
    pub_date = models.DateField()
    beginning = models.DateField()
    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    type = models.CharField(max_length=50)

    def __str__(self):
        return self.title
