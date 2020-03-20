module IdeaBoardGraphql
  module Mutations
    class RemoveVote < BaseUserRequired
      field :idea, Types::Idea, null: false

      argument :idea, GraphQL::Types::ID, required: true

      def resolve(idea:)
        voted_idea = Idea.find(idea)
        Vote.find_by(idea: voted_idea, user: context[:current_user]).destroy
        { idea: voted_idea.reload }
      end
    end
  end
end
