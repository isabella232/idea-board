module IdeaBoardGraphql
  module Types
    class Comment < GraphQL::Schema::Object
      field :id, GraphQL::Types::ID, null: false,
            description: "The comment's unique identifier."
      field :body, GraphQL::Types::String, null: false,
            description: "The comment's body."
      field :created_by, GraphQL::Types::String, null: false,
            description: "The name of the user that created the comment"
      field :created_at, GraphQL::Types::String, null: false,
            description: "The date the comment was created"

      def created_by
        object.user.name
      end

      def created_at
        object.created_at.strftime("Created at %I:%M%p on %m/%d/%Y")
      end
    end
  end
end

