class CreateVideos < ActiveRecord::Migration[7.2]
    def change
        create_table :videos do |t|
            t.string :url
            t.string :title
            t.string :description
            t.references :account, null: false, foreign_key: true

            t.timestamps
        end
    end
end
