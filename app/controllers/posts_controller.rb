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

    def create
        if @user
            post = @user.posts.create(post_params)
            if post.valid?
                render json: post, status: :created
            else
                render json: {errors: post.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "You must login or signup to create a post."}, status: :unauthorized
        end
    end

    def delete
        post = Post.find_by(id: params[:id])
        if @user && @user.id == post.user_id
            post.destroy
            render json: post, status: :ok
        else
            render json: {error: "You can only delete your own posts."}, status: :unauthorized
        end
    end

    private

    def post_params
        params.permit(:location, :image, :caption)
    end
end