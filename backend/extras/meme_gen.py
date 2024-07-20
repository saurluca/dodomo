from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI()

response = client.images.generate(
    model="dall-e-3",
    prompt="A funny cat meme about clothes",
    n=1,
    size="1024x1024",
    style="natural",
)

print(response.data[0].url)
