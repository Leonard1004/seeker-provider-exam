from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Profile

match_bp = Blueprint('match', __name__)

@match_bp.route('/providers', methods=['GET'])
@jwt_required()
def get_providers():
    user = get_jwt_identity()
    profile = Profile.query.filter_by(user_id=user['id']).first()
    if not profile:
        return jsonify({'message': 'Profile not found'}), 404
    matches = Profile.query.filter_by(location=profile.location, industry=profile.industry).all()
    return jsonify([{'id': m.user_id, 'industry': m.industry, 'location': m.location} for m in matches]), 200