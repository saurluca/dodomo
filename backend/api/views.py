import openai
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.apps import apps
from importlib import import_module
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI()


@api_view(["GET"])
def get_meme(request):
    try:
        # get prompt other vise defaults to cats
        prompt = request.query_params.get("prompt", "cats")
        prompt = "A funny meme about" + prompt
    except TypeError:
        prompt = "A funny meme about cubes"

    try:
        response = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            n=1,
            size="1024x1024",
            style="natural",
        )
        return Response(response)
    except openai.OpenAIError as e:
        return Response(status=e.http_status)


@api_view(["DELETE"])
def delete(request, model_name, pk):
    try:
        model = apps.get_model("api", model_name)
    except LookupError:
        return Response(
            {"error": "Model not found."}, status=status.HTTP_400_BAD_REQUEST
        )

    item = get_object_or_404(model, pk=pk)
    item.delete()
    return Response(status=status.HTTP_202_ACCEPTED)


@api_view(["POST"])
def update(request, model_name, pk):
    ModelClass = apps.get_model("api", model_name)
    SerializerClass = getattr(
        import_module("api.serializers"), f"{model_name}Serializer"
    )

    item = get_object_or_404(ModelClass, pk=pk)
    data = SerializerClass(instance=item, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def view(request, model_name):
    ModelClass = apps.get_model("api", model_name)
    SerializerClass = getattr(
        import_module("api.serializers"), f"{model_name}Serializer"
    )

    limit = int(
        request.query_params.get("limit", 10)
    )  # Default limit to 5 if not provided

    user = request.query_params.get("user", None)

    # Fetch items with a limit
    query_params = request.query_params.dict()
    query_params.pop("limit", None)  # Remove 'limit' from query params if exists
    query_params.pop("user", None)

    if user:
        items = ModelClass.objects.filter(user=user, **query_params)[:limit]
    else:
        items = ModelClass.objects.filter(**query_params)[:limit]

    if items:
        serializer = SerializerClass(items, many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def add(request, model_name):
    try:
        SerializerClass = getattr(
            import_module("api.serializers"), f"{model_name}Serializer"
        )

        item = SerializerClass(data=request.data)
        # print(request.data)

        if item.is_valid():
            item.save()
            return Response(item.data, status=status.HTTP_201_CREATED)
        else:
            return Response(item.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        # print("Error: ", e)
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def ApiOverview(request):
    api_urls = {
        "all_items": "/",
        "View": "<model_name>/view",
        "Add": "<model_name>/add",
        "Update": "<model_name>/pk/update",
        "Delete": "<model_name>/pk/delete",
    }

    return Response(api_urls)
