from django.shortcuts import render, redirect
from django.views.decorators.http import require_safe, require_http_methods, require_POST
from .models import Article
from .forms import ArticleForm

# Create your views here.
@require_safe       # GET인 요청에 대해서만 실행
def index(request):
    articles = Article.objects.all()
    context = {
        'articles': articles,
    }
    return render(request, 'articles/index.html', context)


# def new(request):
#     form = ArticleForm()
#     context = {
#         'form' : form,
#     }
#     return render(request, 'articles/new.html', context)


@require_http_methods(['GET', 'POST'])
def create(request):
    if request.method == 'POST':
        # create
        form = ArticleForm(request.POST)
        # 유효성 검사
        if form.is_valid():
            article = form.save()       # 저장 후 인스턴스를 반환
            return redirect('articles:detail', article.pk)

    else:
        # new
        form = ArticleForm()

    context = {
        'form' : form,
    }
    return render(request, 'articles/create.html', context)


# def create(request):
#     form = ArticleForm(request.POST)
#     # 유효성 검사
#     if form.is_valid():
#         article = form.save()       # 저장 후 인스턴스를 반환
#         return redirect('articles:detail', article.pk)
#     # print(f'에러: {form.errors}')
#     # 에러가 발생하는 경우 에러메시지를 포함한 new.html로 돌아가도록
#     context = {
#         'form': form,
#     }
#     return render(request, 'articles/new.html', context)

'''
    # 사용자의 데이터를 받아서 (2가지 방법)
    # 1. method =GET인 경우
    # print(request.GET)  # 딕셔너리 형태
    # request.GET.get('html에서 설정한 name값')
    # title = request.GET.get('title')
    # content = request.GET.get('content')

    # 2. method=POST인 경우
    # print(request.POST)  # 딕셔너리 형태
    # request.POST.get('html에서 설정한 name값')
    title = request.POST.get('title')
    content = request.POST.get('content')


    # DB에 저장 (3가지 방법)
    # 1. (인스턴스를 만들고 인스턴스에 데이터 입력 후 저장)
    article = Article()
    article.title = title
    article.content = content
    # 데이터가 저장되기 전 유효성 검사 과정을 거쳐야 하므로 save() 메서드가 사용되는 방법을 선택
    article.save()

    # 2. (인스턴스를 생성할 때 클래스 변수를 함께 입력)
    # article = Article(title = title, content = content)
    # article.save()

    # 3. (QuerySet API 중 create() 메서드 활용)
    # Article.objects.create(title = title, content = content)

    # 글 작성을 완료한 후 뜨는 페이지 설정
    # 방금 작성한 글 페이지(detail)로 이동
    return redirect('articles:detail', article.id)
'''


@require_safe
def detail(request, article_id):
    article = Article.objects.get(id=article_id)
    context = {
        'article' : article,
    }
    return render(request, 'articles/detail.html', context)


# def edit(request, article_id):
#     article = Article.objects.get(id=article_id)
#     form = ArticleForm(instance=article)
#     context = {
#         'article' : article,
#         'form': form,
#     }
#     return render(request, 'articles/edit.html', context)


@require_http_methods(['GET', 'POST'])
def update(request, article_id):
    article = Article.objects.get(id=article_id)
    if request.method == 'POST':
        form = ArticleForm(request.POST, instance=article)
        if form.is_valid():
            article = form.save()
            return redirect('articles:detail', article.id)

    else:
        form = ArticleForm(instance=article)

    context = {
        'article' : article,
        'form': form,
    }
    return render(request, 'articles/update.html', context)


# def update(request, article_id):
#     article = Article.objects.get(id=article_id)
#     form = ArticleForm(request.POST, instance=article)
#     if form.is_valid():
#         article = form.save()
#         return redirect('articles:detail', article.id)
#     # 유효성 검증을 실패한 경우
#     context = {
#         'form': form,
#     }
#     return render(request, 'articles/edit.html', context)

'''
    # article.title = request.POST.get('title')
    # article.content = request.POST.get('content')
    # article.save()   
    # return redirect('articles:detail', article.id)
'''


@require_POST
def delete(request, article_id):
    # if request.method == 'POST':        # 데코레이터 있으면 없어도 됨
    article = Article.objects.get(id=article_id)
    article.delete()
    return redirect('articles:index')