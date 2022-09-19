# Form은 Django의 '유효성 검사 도구' 중 하나로
# 외부의 악의적 공격 및 데이터 손상에 대한 중요한 방어 수단

from django import forms
from .models import Article

# Form
# class ArticleForm(forms.Form):
#     title = forms.CharField(max_length=10)
#     content = forms.CharField(widget=forms.Textarea)

#     NATION_A = 'kr'
#     NATION_B = 'ch'
#     NATION_C = 'jp'
#     NATIONS_CHOICES = [
#         (NATION_A, '한국'),
#         (NATION_B, '중국'),
#         (NATION_C, '일본'),
#     ]
#     # 드랍다운 형식
#     nation = forms.ChoiceField(choices=NATIONS_CHOICES)
#     nation = forms.ChoiceField(choices=NATIONS_CHOICES, widget=forms.RadioSelect)

# ModelForm
class ArticleForm(forms.ModelForm):

    class Meta:
        # model = 어떤 모델을 기반으로 할지(호출하지 않음)
        model = Article
        # fields = 어떤 모델필드를 출력할지
        # fields = ('title', 'content',)
        fields = '__all__'
        # exclude = ('title',)