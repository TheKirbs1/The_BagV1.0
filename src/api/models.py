from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    discs = db.relationship("Disc", back_populates="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "discs": [disc.serialize() for disc in self.discs],
            "favorite_discs":[disc.serialize() for disc in self.favorite_discs]
            # do not serialize the password, it's a security breach
        }



class Disc(db.Model):
    __tablename__ = "disc_table"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    birth = db.Column(db.Date)
    gender = db.Column(db.String, nullable=True)
    breed = db.Column(db.String(250), nullable=True)
    spayed_neutered = db.Column(db.String, nullable=True)
    weight = db.Column(db.String(250), nullable=True)
    avatar = db.Column(db.String(250), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    user = db.relationship("User", back_populates="discs")
   
    


    def __repr__(self):
        return f'<disc {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "birth": self.birth,
            "gender": self.gender,
            "breed": self.breed,
            "spayed_neutered": self.spayed_neutered,
            "weight": self.weight,
            "avatar": self.avatar
        }