# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-03-27 16:02
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
        ('canales_sam', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registro_Grupos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_ticket', models.CharField(max_length=10)),
                ('correo_ticket', models.EmailField(max_length=254)),
                ('nombre', models.CharField(max_length=100)),
                ('grupo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.Group')),
            ],
        ),
    ]