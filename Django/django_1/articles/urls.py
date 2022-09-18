from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),
    # new: 글을 작성 후 페이지를 리턴하는 함수
    path('new/', views.new, name='new'),
    # create: 데이터를 받아 DB에 저장하는 함수
    path('create/', views.create, name='create'),
]
