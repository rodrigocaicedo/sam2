# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-07-16 13:22
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios_sam', '0004_auto_20180508_1354'),
    ]

    operations = [
        migrations.CreateModel(
            name='Relative_Details',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alive', models.BooleanField(default=True)),
                ('instruction', models.CharField(blank=True, max_length=50, null=True)),
                ('profession', models.CharField(blank=True, max_length=50, null=True)),
                ('address_work', models.CharField(blank=True, max_length=80, null=True)),
                ('office', models.CharField(max_length=9, validators=[django.core.validators.RegexValidator(message='Ingrese su tel\xe9fono en el formato 022345678.', regex='^0+\\d{8}$')], verbose_name='office phone')),
            ],
        ),
        migrations.RemoveField(
            model_name='relative',
            name='alive',
        ),
        migrations.RemoveField(
            model_name='student',
            name='state',
        ),
        migrations.AddField(
            model_name='relative',
            name='joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined'),
        ),
        migrations.AddField(
            model_name='relative',
            name='through',
            field=models.CharField(blank=True, max_length=50, verbose_name='joined thourgh'),
        ),
        migrations.AddField(
            model_name='relative_details',
            name='relative',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='usuarios_sam.Relative'),
        ),
    ]
