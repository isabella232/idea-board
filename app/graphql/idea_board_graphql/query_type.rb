module IdeaBoardGraphql
  class QueryType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, GraphQL::Types::String, null: false, description: "Test Query"

    field :ideas, [Types::Idea], null: false, extras: [:lookahead]
    field :idea, Types::Idea, null: false do
      argument :id, GraphQL::Types::ID, required: true
    end

    def ping
      "pong"
    end

    def ideas(lookahead:)
      query = Idea.all

      if lookahead.selects?(:voted) && context[:current_user]
        query = query.with_voter(context[:current_user])
      end

      if lookahead.selects?(:author)
        query = query.includes(:user)
      end

      query
    end

    def idea(id:)
      Idea.find(id)
    end
  end
end
