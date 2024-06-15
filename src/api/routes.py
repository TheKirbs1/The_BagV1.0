"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# /token POST
# this route is for when the user ALREADY exists and needs an access token
# create a user query with a conditional to see if the user exists, or return None
# test on Postman 

@api.route('/token', methods=['POST'])
def generate_token():

    #recieving the request and converting the body of the request into json format
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Query your database for email and password
    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        response = {
            "msg": "Email or Password does not match"
        }
        return jsonify(response), 401

    access_token = create_access_token(identity=user.id)
    response = {
        "access_token": access_token,
        "user_id": user.id,
        "msg": f'Welcome {user.email}! This worked!'
    }

    return jsonify(response), 200