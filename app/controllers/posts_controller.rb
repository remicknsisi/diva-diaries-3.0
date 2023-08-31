class PostsController < ApplicationController
    def index
        posts = Post.all
        if posts
            render json: posts, status: :ok
        else
            render json: {error: "Could not fetch posts."}, status: :not_found
        end
    end

    def show
        post = Post.find_by(id: params[:post_id])
        if post
            render json: post, status: :ok
        else
            render json: {error: "Could not find post with id of #{params[:id]}."}, status: :not_found
        end
    end

end