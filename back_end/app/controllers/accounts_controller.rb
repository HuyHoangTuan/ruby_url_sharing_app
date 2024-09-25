class AccountsController < ApplicationController

    private
        def account_params
            params.require(:account).permit(:username, :password)
        end
    public
        def login
            @account = Account.find_by(username: account_params[:username])
            if @account.nil? || (!@account.nil? && @account.authenticate(account_params[:password]))
                render json: {}, status: :unauthorized
            else
                render json: {}
            end
        end
end
