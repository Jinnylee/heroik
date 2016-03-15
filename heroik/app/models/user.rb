class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :posts
  has_many :comments
  has_many :votes

  has_attached_file :image

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
