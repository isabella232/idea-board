module IdeaBoardGraphql
  class QueryType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, String, null: false, description: "Test Query"

    field :ideas, [Types::Idea], null: false
    field :idea, Types::Idea, null: false do
      argument :id, GraphQL::Types::ID, required: true
    end

    def ping
      "pong"
    end

    def ideas
      Idea.all
    end

    def idea(id:)
      Idea.find(id)
    end
  end
end
