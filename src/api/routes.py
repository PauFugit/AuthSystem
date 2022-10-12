"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from api.models import User

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    email= request.json.get('email')
    password= request.json.get('password')

    if not email: return jsonify({ 
        'status': 'failed', 'message':'Email is required', 'data': None 
    }), 400
    if not password: return jsonify({ 
        'status': 'failed', 'message':'Password is required', 'data': None 
    }), 400

    uExists = User.query.filter_by(email = email).first()
    #no existe
    if not uExists: return jsonify({
        'status': 'failed', 
        'message':'User already exists',
        'data': None
    }), 401
    #validacion pass
    if not check_password_hash(uExists.password, password):
        return jsonify({
            'status': 'failed', 
            'message': 'Password is incorrect', 
            'data': None
        }), 401

    #expiracion fecha
    expired = datetime.timedelta(minutes=59)

    #access token
    access_token = create_access_token(
        identity=uExists.id,
        expires_delta=expired
    )

    data = {
        'access_token': access_token,
        'user': uExists.serialize()
    }

    return jsonify({
        "status": "success",
        "message": "Login successfull :D",
        "data": data
    }), 200

@api.route('/register', methods=['POST'])
def register():
    email= request.json.get('email')
    password= request.json.get('password')

    if not email: return jsonify({ 
        'status': 'failed', 'message':'Email is required', 'data': None 
    }), 400
    if not password: return jsonify({ 
        'status': 'failed', 'message':'Password is required', 'data': None 
    }), 400

    uFound = User.query.filter_by(email = email).first()
    #no existe
    if not uFound: return jsonify({
        'status': 'failed', 
        'message':'User already exists',
        'data': None
    }), 401
    #validacion pass
    if not check_password_hash(uFound.password, password):
        return jsonify({
            'status': 'failed', 
            'message': 'Password is incorrect', 
            'data': None
        }), 401

    #expiracion fecha
    expired = datetime.timedelta(minutes=59)

    #access token
    access_token = create_access_token(
        identity=uFound.id,
        expires_delta=expired
    )

    data = {
        'access_token': access_token,
        'user': uFound.serialize()
    }

    return jsonify({
        "status": "success",
        "message": "Register successfull :D",
        "data": data
    }), 200