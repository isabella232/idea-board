module IdeaBoardGraphql
  module Mutations
    class VoteForIdea < BaseUserRequired
      field :idea, Types::Idea, null: false

      argument :idea, GraphQL::Types::ID, required: true

      def resolve(idea:)
        voted_idea = Idea.find(idea);
        vote = Vote.create!(idea: voted_idea, user: context[:current_user])
        { idea: voted_idea }
      rescue ActiveRecord::RecordInvalid => invalid
        if invalid.record.errors[:user]
          raise GraphQL::ExecutionError, "Duplicate Vote"
        end
      end
    end
  end
end
