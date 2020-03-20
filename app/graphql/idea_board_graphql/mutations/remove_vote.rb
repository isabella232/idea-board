module IdeaBoardGraphql
  module Mutations
    class RemoveVote < BaseUserRequired
      field :idea, Types::Idea, null: false

      argument :idea_id, GraphQL::Types::ID, required: true

      def resolve(idea_id:)
        idea = Idea.find(idea_id)
        Vote.find_by(idea: idea, user: context[:current_user]).destroy
        { idea: idea.reload }
      end
    end
  end
end
