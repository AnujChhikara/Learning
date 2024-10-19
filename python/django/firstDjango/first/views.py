from django.shortcuts import render

# Create your views here.

def firstView(request):
    return render(request, 'firstTemplates/firstTemplate.html')

def products(request):
    return render(request, 'firstTemplates/products.html')