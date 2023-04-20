from django.shortcuts import render

# Paginas do site

def index(request):
    return render(request, 'index.html')

def carrinhoCompras(request):
    return render(request, 'carrinhoCompras.html')

def login(request):
    return render(request, 'login.html')

def pagamento(request):
    return render(request, 'pagamento.html')

def productDetails(request):
    return render(request, 'productDetails.html')

def produtos(request):
    return render(request, 'produtos.html')

def registro(request):
    return render(request, 'registro.html')

def sobreNos(request):
    return render(request, 'sobreNos.html')

def erro(request):
    return render(request, 'erro.html')

## Por aplicar...
#def contato(request):
#    return render(request, 'footes.html')

#########  end estrutura