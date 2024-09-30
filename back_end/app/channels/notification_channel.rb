class NotificationChannel < ApplicationCable::Channel
    def subscribed
        puts "NotificationChannel#subscribed - params: #{params} #{account_id}"
        stream_from "notifications"
        stream_from "notifications_#{account_id}"
    end

    def unsubscribed
        # Any cleanup needed when channel is unsubscribed
    end
end
