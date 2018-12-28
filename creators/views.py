from django.shortcuts import render
from creators.models import Creator
from django.http import JsonResponse

# Create your views here.

def index(request):
    creators_to_render = Creator.objects.all().values('name')
    context = {
        'creators': creators_to_render
    }

    response = JsonResponse(list(creators_to_render), safe=False)
    return response



def show(request, creator_id):
    creator = Creator.objects.get(pk=creator_id)
    context = {
        'creator': creator
    }
    return render(request, 'creators/show.html', context=context)
