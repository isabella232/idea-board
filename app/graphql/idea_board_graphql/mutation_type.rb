module IdeaBoardGraphql
  class MutationType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, GraphQL::Types::String, null: false, description: "Test Mutation" do
      argument :pong, GraphQL::Types::String, required: false, default_value: "pong"
    end

    def ping(pong:)
      pong
    end
  end
end
