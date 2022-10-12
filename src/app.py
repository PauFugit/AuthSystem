"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager, create_refresh_token
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from api.models import db, User
from api.routes import api
import datetime


app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///autenticationsystem'
app.config['JWT_SECRET_KEY'] = 'f0fec5d882b5a761bb2f4e98ef078135'
app.config['JSON_SORT_KEYS'] = False

db.init_app(app)
Migrate(app, db)
CORS(app)
jwt = JWTManager(app)



# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')


@app.route('/', methods = ['GET'])
def root():
    return jsonify({"msg" : "It's working :D"}), 200

#login route
@app.route('/login', methods=['POST'])
def login():

    email = request.json.get('email')
    password = request.json.get('password')

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
        "message": "Login successfully :D",
        "data": data
    }), 200

#register route

@app.route('/register', methods=['POST'])
def register():
    email = request.json.get('email')
    password = request.json.get('password')
    

    if not email: return jsonify({ 
        'status': 'failed', 
        'message':'Email is required' 
    }), 400
    if not password: return jsonify({ 
        'status': 'failed', 
        'message':'Password is required' 
    }), 400
    
    #user ya existe
    uFound = User.query.filter_by(email=email).first()
    if uFound: return jsonify({
        'status': 'failed', 
        'message': 'Email already exists',
        'data': None
    }), 400 

    #si no existe...

    user = User()
    user.email=email
    user.password=generate_password_hash(password)

    user.save()

    #registro exitoso

    if user: return jsonify({
        'status': 'success',
        'message': 'Register successful :D',
        'data': None

    }), 200
    else: return jsonify({
        'status': 'failed', 
        'message': 'Error, please try again',
        'data': None
    }), 200

@app.route('/private', methods=['GET'])
@jwt_required()
def private():
    id = get_jwt_identity()
    user_session = User.query.get(id)

    return jsonify(user_session.serialize()), 200


if __name__ == '__main__':
    app.run()