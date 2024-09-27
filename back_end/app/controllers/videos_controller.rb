class VideosController < ApplicationController
    skip_before_action :authenticate_user, only: [ :show, :index ]
    def new
        @video = Video.new
    end

    def create
        @account = Account.find(@account_id)
        @video = @account.videos.build(video_params)
        if @video.save
            render json: @video, status: :created
        else
            render json: @video.errors, status: :unprocessable_content
        end
    end

    def show
        @video = Video.find(params[:id])
    end
    def index
        @videos = Video.all
    end

    def destroy
        @video = Video.find(params[:id])
        @video.destroy
        head :no_content
    end

    private
        def video_params
            params.require(:video).permit(:url, :title, :description)
        end
end
