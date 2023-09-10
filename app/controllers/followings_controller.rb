class FollowingsController < ApplicationController
    def index
        if @user
            followers = @user.followings 
            render json: followers, status: :ok
        else
            render json: {error: "Could not fetch followers."}, status: :not_found
        end
    end

    def create
        if @user
            follow = @user.followings.create(following_params)
            render json: follow, status: :created
        else
            render json: {error: "You must login or signup to follow another user."}, status: :unauthorized
        end
    end

    def destroy
        follow = Following.find_by(id: params[:id])
        if @user && @user.id == follow.user_id
            follow.destroy
            render json: follow, status: :ok
        else
            render json: {error: "You can only remove your own follows."}, status: :unauthorized
        end
    end

    private

    def following_params
        params.permit(:followed_user_id)
    end
end