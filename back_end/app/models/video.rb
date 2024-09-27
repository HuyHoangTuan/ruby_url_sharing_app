class Video < ApplicationRecord
    belongs_to :account
    validates :url, presence: true
end
