require_relative '../services/auth_token'

class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        userData = User.find_by(username: params[:username])
        if userData&.authenticate(params[:password])
            session[:user_id] = userData.id
            auth_token = AuthToken.encode(user_id: userData.id)
            render json: { user: userData, authToken: auth_token }, status: :created
        else
            render json: { error: { login: "Invalid email or password" }}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end