module IdeaBoardGraphql
  module Types
    class Idea < GraphQL::Schema::Object
      field :id, GraphQL::Types::ID, null: false,
            description: "The idea's unique identifier."
      field :title, GraphQL::Types::String, null: false,
            description: "A short title describing the idea."
      field :body, GraphQL::Types::String, null: true,
            description: "A description of the idea. May contain markdown formatted text."
      field :votes, GraphQL::Types::Int, null: false,
            description: "The idea's number of votes.",
            method: :votes_count
      field :author, GraphQL::Types::String, null: false,
            description: "The user who added this idea."
      field :voted, GraphQL::Types::Boolean, null: false,
            description: "Whether the current user voted for this idea."

      def author
        object.user.name
      end

      def voted
        context[:current_user].present? && object.voted(context[:current_user])
      end
    end
  end
end
