from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Profile

profile_bp = Blueprint('profile', __name__)

@profile_bp.route('/update', methods=['POST'])
@jwt_required()
def update_profile():
    user = get_jwt_identity()
    data = request.json
    profile = Profile.query.filter_by(user_id=user['id']).first()
    if not profile:
        profile = Profile(user_id=user['id'])
        db.session.add(profile)
    profile.industry = data.get('industry')
    profile.location = data.get('location')
    profile.services = data.get('services')
    db.session.commit()
    return jsonify({'message': 'Profile updated successfully'}), 200