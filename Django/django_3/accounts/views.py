from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomUserCreationForm
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout

# Create your views here.
def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        # form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            # 로그인
            # login(request, 유저정보)
            # login으로 받으면 함수 login과 겹치기 때문에 이름을 바꾸어 사용
            auth_login(request, form.get_user())
            return redirect('articles:index')
    else:
        form = AuthenticationForm()
    context = {
        'form': form,
    }
    return render(request, 'accounts/login.html', context)


def logout(request):
    # 로그아웃
    auth_logout(request)
    return redirect('articles:index')


def signup(request):
    if request.method == 'POST':
        # User를 auth.User에서 accounts.User로 바꾸었으므로 해당 사항을
        # forms.py에 입력하여 새로운 폼으로 받아와야 함
        # form = UserCreationForm(request.POST)
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('articles:index')
    else:
        # form = UserCreationForm()
        form = CustomUserCreationForm()
    context = {
        'form': form,
    }
    return render(request, 'accounts/signup.html', context)