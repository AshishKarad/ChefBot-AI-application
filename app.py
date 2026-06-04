from flask import Flask, request, jsonify, render_template
from services.db_service import save_order

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/order", methods=["POST"])
def create_order():

    data = request.json

    order_id = save_order(
        data["name"],
        data["mobile"],
        data["email"],
        data["address"],
        data["recipe"]
    )

    return jsonify({
        "message": "Order Created",
        "order_id": order_id
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
