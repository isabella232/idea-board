class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.references :idea, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end

    add_index :votes, ["idea_id", "user_id"], unique: true
    add_column :ideas, :votes_count, :integer
  end
end
