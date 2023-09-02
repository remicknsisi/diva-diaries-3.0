class CommentsController < ApplicationController
    def index
        comments = Comment.all
        if comments
            render json: comments, include: [:user], status: :ok
        else
            render json: {error: "Could not fetch comments."}, status: :not_found
        end
    end
end