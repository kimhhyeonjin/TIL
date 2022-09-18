from django.shortcuts import render
from .models import Article

# Create your views here.
def index(request):
    articles = Article.objects.all()
    context = {
        'articles': articles,
    }
    return render(request, 'articles/index.html', context)


def new(request):
    return render(request, 'articles/new.html')


def create(request):
    # 사용자의 데이터를 받아서
    title = request.GET.get('title')
    content = request.GET.get('content')

    # DB에 저장 (3가지 방법)
    # 1 (인스턴스를 만들고 인스턴스에 데이터 입력 후 저장)
    article = Article()
    article.title = title
    article.content = content
    # 데이터가 저장되기 전 유효성 검사 과정을 거쳐야 하므로 save() 메서드가 사용되는 방법을 선택
    article.save()

    # 2 (인스턴스를 생성할 때 인자를 함께 입력)
    article = Article(title = title, content = content)
    article.save()

    # 3 (QuerySet API 중 create() 메서드 활용)
    # Article.objects.create(title = title, content = content)

    return render(request, 'articles/create.html')