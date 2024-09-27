class ApplicationController < ActionController::Base
    # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
    allow_browser versions: :modern
    protect_from_forgery with: :exception
    before_action :authenticate_user
    def authenticate_user
        token = cookies.signed[:jwt]
        @account_id = Rails.cache.fetch(token.to_s, expires_in: 30.minutes) do
            info = Auth.decode(token)
            if info.nil?
                nil
            else
                info["id"]
            end
        end
        if @account_id.nil?
            head :unauthorized
        end
    end
end
