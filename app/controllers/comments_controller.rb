class CommentsController < ApplicationController
    def index
        comments = Comment.all
        if comments
            render json: comments, include: [:user, :post], status: :ok
        else
            render json: {error: "Could not fetch comments."}, status: :not_found
        end
    end

    def create
        if @user
            comment = @user.comments.create(comment_params)
            if comment.valid?
                render json: comment, status: :created
            else
                render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "You must login or signup to leave a comment."}, status: :unauthorized
        end
    end

    private

    def comment_params
        params.permit(:post_id, :content)
    end
end