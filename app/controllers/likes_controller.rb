class LikesController < ApplicationController
    def index
        likes = Like.all
        if likes
            render json: likes, status: :ok
        else
            render json: {error: "Could not fetch likes."}, status: :not_found
        end
    end

    def create
        if @user
            like = @user.likes.create(like_params)
            if like.valid?
                render json: like, status: :created
            else
                render json: {errors: like.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "You must login or signup to like a post."}, status: :unauthorized
        end
    end

    private

    def like_params
        params.permit(:post_id)
    end
end