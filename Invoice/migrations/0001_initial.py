# Generated by Django 4.0.4 on 2022-05-16 14:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('address_line1', models.CharField(blank=True, max_length=300, null=True)),
                ('state', models.CharField(blank=True, max_length=250, null=True)),
                ('postal_code', models.CharField(blank=True, max_length=100, null=True)),
                ('contact', models.CharField(blank=True, max_length=50, null=True)),
                ('email_address', models.EmailField(blank=True, max_length=254, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]