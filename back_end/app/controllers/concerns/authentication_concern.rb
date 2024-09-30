module AuthenticationConcern
    extend ActiveSupport::Concern

    included do
        before_action :authenticate_user if respond_to? :before_action
    end

    def extract_account_id
        token = token = cookies.signed[:jwt]
        account_id = Rails.cache.fetch(token.to_s, expires_in: 30.minutes) do
            info = Auth.decode(token)
            if info.nil?
                nil
            else
                info["id"]
            end
        end
    end

    def authenticate_user
        @account_id = self.extract_account_id
        if @account_id.nil?
            head :unauthorized
        end
    end
end