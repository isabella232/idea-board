module IdeaBoardGraphql
  module Mutations
    class AddVote < BaseUserRequired
      field :idea, Types::Idea, null: false

      argument :idea_id, GraphQL::Types::ID, required: true

      def resolve(idea_id:)
        idea = Idea.find(idea_id)
        Vote.create!(idea: idea, user: context[:current_user])
        { idea: idea.reload }
      rescue ActiveRecord::RecordInvalid => invalid
        if invalid.record.errors[:user]
          raise GraphQL::ExecutionError, "Duplicate Vote"
        end
      end
    end
  end
end
