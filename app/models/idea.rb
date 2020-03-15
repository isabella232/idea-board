class Idea < ApplicationRecord
  belongs_to :user
  has_many :votes

  scope :with_voter, ->(user) {
    # String interpolation is safe here because no user data is used.
    joins("LEFT OUTER JOIN votes ON ideas.id = votes.idea_id AND votes.user_id = #{user.id}")
      .select("ideas.*, votes.user_id as voted")
  }
end
