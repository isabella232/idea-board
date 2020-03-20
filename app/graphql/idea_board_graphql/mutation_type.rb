module IdeaBoardGraphql
  class MutationType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, GraphQL::Types::String, null: false, description: "Test Mutation" do
      argument :pong, GraphQL::Types::String, required: false, default_value: "pong"
    end

    field :create_idea, mutation: Mutations::CreateIdea
    field :add_vote, mutation: Mutations::AddVote
    field :remove_vote, mutation: Mutations::RemoveVote

    def ping(pong:)
      pong
    end
  end
end
