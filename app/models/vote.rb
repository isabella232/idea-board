class Vote < ApplicationRecord
  belongs_to :idea, counter_cache: true
  belongs_to :user

  validates :user, uniqueness: { scope: :idea, message: "has already voted for this idea" }
end
