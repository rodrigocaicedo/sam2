# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-03-27 16:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socioeco_sam', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='situacion_habitacional',
            name='posesion_vivienda',
            field=models.CharField(choices=[('PROPIA', 'Propia'), ('ARRENDADA', 'Arrendada'), ('TRABAJO', 'Cedida por el trabajo'), ('FAMILIAR', 'Cedida por alg\xfan familiar'), ('OTRA', 'otra')], default='', max_length=20),
        ),
    ]
