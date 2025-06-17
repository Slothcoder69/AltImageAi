import os
os.environ["TRANSFORMERS_NO_TF"] = "1"

from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from PIL import Image
import base64
import io

app = Flask(__name__)
CORS(app)

pipe = None  # define it globally, but load only inside main

@app.route("/generate-alt", methods=["POST"])
def generate_alt():
    try:
        data = request.get_json()
        image_data = base64.b64decode(data["image"])
        image = Image.open(io.BytesIO(image_data)).convert("RGB")
        result = pipe(image)
        caption = result[0]["generated_text"]
        return jsonify({"alt_text": caption})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("⏳ Loading model... please wait")
    pipe = pipeline("image-to-text", model="nlpconnect/vit-gpt2-image-captioning")
    print("✅ Model loaded successfully")
    app.run(debug=True, port=5000, use_reloader=False)
