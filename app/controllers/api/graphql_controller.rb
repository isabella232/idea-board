module Api
  class GraphqlController < ApplicationController
    def execute
      context = {}

      result = IdeaBoardGraphql::Schema.execute(
        params[:query],
        variables: params[:variables] || {},
        context: context,
        operation_name: params[:operationName]
      )

      render json: result
    rescue => e
      raise e unless Rails.env.development?
      handle_error_in_development e
    end

    private

    def handle_error_in_development(e)
      logger.error e.message
      logger.error e.backtrace.join("\n")

      render json: { error: { message: e.message, backtrace: e.backtrace }, data: {} }, status: 500
    end
  end
end
