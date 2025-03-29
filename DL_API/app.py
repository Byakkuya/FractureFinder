import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from predictions import predict  # Import the predict function from predictions.py

app = Flask(__name__)

# Configuration
UPLOAD_FOLDER = 'static/uploads/'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Root endpoint
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'message': 'Welcome to the Bone Fracture Detection API',
        'endpoints': {
            '/predict': 'POST - Upload an X-ray image to predict if it’s fractured'
        }
    })

# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict_image():
    # Check if a file is included in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    
    # Validate file
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type. Allowed: png, jpg, jpeg'}), 400
    
    # Save the uploaded file securely
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)
    
    try:
        # Step 1: Predict the bone type using the "Parts" model
        bone_type = predict(filepath, model="Parts")
        
        # Step 2: Predict fracture status using the appropriate model for the bone type
        result = predict(filepath, model=bone_type)
        
        # Prepare response
        response = {
            'bone_type': bone_type,
            'result': result,
            'image_url': f'/static/uploads/{filename}'
        }
        
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': f'Prediction failed: {str(e)}'}), 500
    
    #finally:
            # Optional: Clean up the uploaded file
            #if os.path.exists(filepath):
             #    os.remove(filepath)



if __name__ == '__main__':
    
    app.run(debug=True, host='0.0.0.0', port=5000)