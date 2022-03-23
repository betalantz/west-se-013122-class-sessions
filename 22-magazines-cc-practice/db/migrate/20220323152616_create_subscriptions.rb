class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :price
      t.belongs_to :reader
      t.references :magazine
    end
  end
end
