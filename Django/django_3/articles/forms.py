# Form은 Django의 '유효성 검사 도구' 중 하나로
# 외부의 악의적 공격 및 데이터 손상에 대한 중요한 방어 수단

from django import forms
from .models import Article


# ModelForm
class ArticleForm(forms.ModelForm):
    title = forms.CharField(
        label='제목',
        # 위젯은 유효성검사와 상관 없는 부분
        widget=forms.TextInput(
            attrs={
                'class': 'my-title form-control',
                'placeholder': 'Enter the title',
                # 길이를 정하더라도 유효성검사를 하지는 않음
                'maxlength': 10,
            }
        )
    )

    content = forms.CharField(
        label='내용',
        widget=forms.Textarea(
            attrs={
                'class': 'my-content form-control',
                'placeholder': 'Enter the content',
                'rows': 5,
                'cols': 50,
            }
        ),
        error_messages={
            'required': 'Please enter your content',
        }
    )

    class Meta:
        # model = 어떤 모델을 기반으로 할지(호출하지 않음)
        model = Article
        # fields = 어떤 모델필드를 출력할지
        # fields = ('title', 'content',)
        fields = '__all__'
        # exclude = ('title',)