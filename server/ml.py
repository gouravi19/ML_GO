from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # allows requests from React frontend

@app.route('/')
def home():
    return "ML model server is running"

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image = request.files['image']
    try:
        img = Image.open(image.stream)
        # Replace this section with actual model inference
        print("Image received for prediction")
        dummy_result = {
            "WBC_count": 5600,
            "RBC_count": 4.5e6,
            "status": "Normal"
        }
        return jsonify(dummy_result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
