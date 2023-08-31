class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: :create

    def index
        if @user
            render json: User.all, status: :ok
        else 
            render json: { error: "You must log in or sign up to view this page." }, status: :unauthorized
        end
    end

    def show
        if @user
            render json: @user, status: :ok
        else 
            render json: { error: "You must log in or sign up to view this page." }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :ok
    end

    def destroy
        if @user
            @user.destroy
            head :no_content, status: :ok
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