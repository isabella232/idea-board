module IdeaBoardGraphql
  module Mutations
    class CreateIdea < UserRequiredMutation
      field :idea, Types::Idea, null: true

      argument :title, GraphQL::Types::String, required: true
      argument :body, GraphQL::Types::String, required: false

      def resolve(title:, body: nil)
        idea = Idea.new(title: title, body: body, user: context[:current_user])

        if idea.save
          { idea: idea }
        else
          {}
        end
      end
    end
  end
end
