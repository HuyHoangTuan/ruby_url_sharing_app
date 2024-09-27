class Account < ApplicationRecord
    has_secure_password
    has_many :videos, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }
end
