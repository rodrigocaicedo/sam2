# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from canales_sam.models import Registro_Temas, Registro_Grupos

admin.site.register(Registro_Temas)
admin.site.register(Registro_Grupos)

# Register your models here.
