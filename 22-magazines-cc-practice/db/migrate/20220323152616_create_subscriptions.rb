class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :price
      # you can use belongs_to or references interchangeably
      t.belongs_to :reader
      # it's also totally fine to set up column for the foreign key as just an integer column as below
      t.integer :magazine_id
    end
  end
end
