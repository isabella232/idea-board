class ChangeVotesCountDefault < ActiveRecord::Migration[6.0]
  def change
    change_column_default :ideas, :votes_count, from: nil, to: 0
  end
end
