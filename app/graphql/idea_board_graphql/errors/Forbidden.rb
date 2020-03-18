module IdeaBoardGraphql
  module Errors
    class Forbidden < GraphQL::ExecutionError
      def to_h
        super.merge({ "extensions" => {"code" => "FORBIDDEN"} })
      end
    end
  end
end
