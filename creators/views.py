from django.shortcuts import render
from creators.models import Creator

# Create your views here.

def index(request):
    creators_to_render = Creator.objects.all()
    context = {
        'creators': creators_to_render
    }
    print(context)
    return render(request, 'creators/index.html', context=context)

def show(request, creator_id):
    creator = Creator.objects.get(pk=creator_id)
    context = {
        'creator': creator
    }
    return render(request, 'creators/show.html', context=context)


