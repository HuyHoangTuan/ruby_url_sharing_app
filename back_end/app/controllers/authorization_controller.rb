class AuthorizationController < ApplicationController
    protect_from_forgery except: [ :login, :register ]
    skip_before_action :authenticate_user

    private
        def accept_params
            params.require(:authorization).permit(:username, :password)
        end
    public
        def login
            @account = Account.find_by(username: accept_params[:username])
            if @account.nil? || (!@account.nil? && @account.authenticate(accept_params[:password]).nil?)
                head :unauthorized
            else
                token = Auth.issue_token(id: @account.id)
                cookies.signed[:jwt] = { value: token, httponly: true, expires: 30.days.from_now }
                render json: { id: @account.id, csrf: form_authenticity_token  }
            end
        end

        def register
            @account = Account.new(accept_params)
            if @account.save
                head :created
            else
                render json: @account.errors, status: :bad_request
            end
        end

        def logout
            cookies.delete(:jwt)
            render json: {}
        end

        def test
            render json: params
        end
end
