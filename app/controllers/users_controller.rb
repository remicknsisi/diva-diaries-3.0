require_relative '../services/auth_token'

class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: :create

    def index
        # if @user
        #     render json: User.all, status: :ok
        # else 
        #     render json: { error: "You must log in or sign up to view this page." }, status: :unauthorized
        # end

        render json: User.all, status: :ok
    end

    def show
        if @user
            render json: @user, include: [:likes], status: :ok
        else 
            render json: { error: "You must log in or sign up to view this page." }, status: :unauthorized
        end
    end

    def create
        userData = User.create!(user_params)
        if userData.profile_picture == nil
            userData.update(profile_picture: "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg")
        end
        session[:user_id] = userData.id
        auth_token = AuthToken.encode(user_id: userData.id)
        render json: {user: userData, authToken: auth_token}, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :ok
    end

    def destroy
        if @user
            @user.destroy
            render json: @user, status: :ok
        else
            render json: { error: "You may only delete your own account!" }, status: :unauthorized
        end
    end

    def users_who_liked
        # code here for users who liked the post 
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :profile_picture, :bio)
    end 

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end