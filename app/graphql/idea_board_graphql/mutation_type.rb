module IdeaBoardGraphql
  class MutationType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, GraphQL::Types::String, null: false, description: "Test Mutation"

    field :create_idea, mutation: Mutations::CreateIdea
    field :vote_for, mutation: Mutations::VoteForIdea

    def ping
      "pong"
    end
  end
end
