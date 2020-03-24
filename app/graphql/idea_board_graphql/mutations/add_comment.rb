module IdeaBoardGraphql
  module Mutations
    class AddComment < BaseUserRequired
      field :idea, Types::Idea, null: false

      argument :idea_id, GraphQL::Types::ID, required: true
      argument :text, GraphQL::Types::String, required: true

      def resolve(idea_id:, text:)
        idea = Idea.find(idea_id)
        Comment.create!(idea: idea, user: context[:current_user], body: text)
        { idea: idea.reload }
      end
    end
  end
end

