module IdeaBoardGraphql
  class MutationType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, String, null: false, description: "Test Mutation"

    field :create_idea, mutation: Mutations::CreateIdea

    def ping
      "pong"
    end
  end
end
