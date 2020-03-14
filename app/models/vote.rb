class Vote < ApplicationRecord
  belongs_to :idea, counter_cache: true
  belongs_to :user
end
