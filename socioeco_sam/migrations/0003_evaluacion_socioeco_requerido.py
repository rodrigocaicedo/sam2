# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-05-16 19:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socioeco_sam', '0002_auto_20180327_1102'),
    ]

    operations = [
        migrations.AddField(
            model_name='evaluacion_socioeco',
            name='requerido',
            field=models.BooleanField(default=False),
        ),
    ]
