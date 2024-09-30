module ApplicationCable
    class Connection < ActionCable::Connection::Base
        include AuthenticationConcern

        identified_by :account_id

        def connect
            self.account_id = self.extract_account_id
            reject_unauthorized_connection unless self.account_id.nil?
        end

        def disconnect
            self.account_id = nil
        end
    end
end
