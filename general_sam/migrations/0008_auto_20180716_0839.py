# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-07-16 13:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('general_sam', '0007_estado_matricula'),
    ]

    operations = [
        migrations.AlterField(
            model_name='matricula',
            name='estudiante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios_sam.Student'),
        ),
    ]
