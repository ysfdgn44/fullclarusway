# Generated by Django 4.2.1 on 2023-05-08 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(default='none@cw.com', max_length=254)),
                ('number', models.IntegerField(default=0)),
                ('picture', models.ImageField(default='', upload_to='images/')),
                ('is_active', models.BooleanField(default=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Öğrenci',
                'verbose_name_plural': 'Öğrenciler',
                'ordering': ['-first_name'],
            },
        ),
    ]
