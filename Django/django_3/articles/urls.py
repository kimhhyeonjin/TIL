from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),

    # create: 데이터를 받아 DB에 저장하는 함수
    path('create/', views.create, name='create'),

    # detail: 글 조회
    path('detail/<article_id>', views.detail, name='detail'),

    # update: 데이터를 받아 DB에 저장하는 함수
    path('update/<article_id>', views.update, name='update'),

    # delete: 글 삭제
    path('delete/<article_id>', views.delete, name='delete'),
]
