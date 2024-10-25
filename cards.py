from flask import Flask, render_template, request, jsonify, render_template
from waitress import serve
import random

app = Flask(__name__)

def rand_01_list(x):
    return [random.choice([0, 1]) for _ in range(x)]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/roll_cards', methods=['POST'])
def roll_cards():
    n_cards = int(request.form.get('n_cards'))
    try:
        cardlist = rand_01_list(n_cards)
        return jsonify({"status": "success", "cardlist": cardlist})
    except Exception as e:
        return jsonify({"status": "error", "cardlist": str(e)})

if __name__ == "__main__" and not app.debug:
    serve(app, host="0.0.0.0", port=18093, connection_limit=5000, channel_timeout=600, cleanup_interval=600)