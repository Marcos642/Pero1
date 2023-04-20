from django.urls import path

from .views import index,carrinhoCompras,login,pagamento,productDetails,produtos,registro,sobreNos,erro


urlpatterns = [
    path('', index, name='index'),
    path('carrinhoCompras',carrinhoCompras, name='carrinhoCompras'),
    path('login',login, name='login'),
    path('pagamento',pagamento, name='pagamento'),
    path('productDetails',productDetails, name='productDetails'),
    path('produtos',produtos, name='produtos'),
    path('registro',registro, name='registro'),
    path('sobreNos',sobreNos, name='sobreNos'),
    path('erro',erro, name='erro'),

]