class LikesController < ApplicationController
    def index
        likes = Like.all
        if likes
            render json: likes, status: :ok
        else
            render json: {error: "Could not fetch likes."}, status: :not_found
        end
    end
end