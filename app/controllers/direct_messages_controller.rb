class DirectMessagesController < ApplicationController
    def index
        if @user
            dms = @user.direct_messages 
            render json: dms, status: :ok
        else
            render json: {error: "Could not fetch DMs."}, status: :not_found
        end
    end

    def create
        if @user
            dm = @user.direct_messages.create(dm_params)
            render json: dm, status: :created
        else
            render json: {error: "You must login or signup to send a DM."}, status: :unauthorized
        end
    end

    private

    def dm_params
        params.permit(:recipient_id, :content)
    end
end