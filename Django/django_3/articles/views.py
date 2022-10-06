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


@require_safe
def detail(request, article_id):
    article = Article.objects.get(id=article_id)
    context = {
        'article' : article,
    }
    return render(request, 'articles/detail.html', context)


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


@require_POST
def delete(request, article_id):
    # if request.method == 'POST':        # 데코레이터 있으면 없어도 됨
    article = Article.objects.get(id=article_id)
    article.delete()
    return redirect('articles:index')
