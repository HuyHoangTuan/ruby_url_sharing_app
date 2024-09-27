require 'jwt'


class Auth

    def self.issue_token(payload)
        JWT.encode(payload, secret_key, algorithm)
    end

    def self.decode(token)
        body = JWT.decode(token, secret_key, true, {algorithm: algorithm}).first
        HashWithIndifferentAccess.new(body)
    rescue JWT::DecodeError => error
        nil
    end

    private
        def self.secret_key
            ENV['secret_key_base']
        end

        def self.algorithm
            ENV['jwt_algorithm']
        end

end