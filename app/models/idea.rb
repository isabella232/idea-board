class Idea < ApplicationRecord
  belongs_to :user
  has_many :votes, dependent: :destroy
  has_many :comments

  scope :with_voter, ->(user) {
    # String interpolation is safe here because no user data is used.
    joins("LEFT OUTER JOIN votes ON ideas.id = votes.idea_id AND votes.user_id = #{user.id}")
      .select("ideas.*, votes.user_id as voter_id")
  }

  def voted(user)
    if self.attributes.key?('voter_id')
      self.attributes['voter_id'] == user.id
    else
      votes.where(user: user).exists?
    end
  end
end
