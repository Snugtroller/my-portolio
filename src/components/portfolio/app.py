from flask import Flask,send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/resume')
def resume():
    # Specify the path to your PDF file
    pdf_path = "me.pdf"
    # Use send_file to send the PDF file to the client
    return send_file(pdf_path, as_attachment=True)

if __name__=="__main__":
    app.run(debug=True)