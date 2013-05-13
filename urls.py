from django.conf.urls.defaults import patterns, include, url
from django.views.generic.simple import direct_to_template
from django.contrib.auth.models import User

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf import settings
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^home/','pyth.views.home',name='home'),
    # url(r'^pythology/', include('pythology.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
urlpatterns += patterns('',

    url( r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT } ),
    (r'^signup/',include('registration.backends.default.urls')),
    url(r'^$','pyth.views.index',name='index'),


)