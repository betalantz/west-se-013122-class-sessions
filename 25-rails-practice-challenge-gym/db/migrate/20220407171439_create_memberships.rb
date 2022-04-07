class CreateMemberships < ActiveRecord::Migration[6.1]
  def change
    create_table :memberships do |t|
      t.references :gym, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true
      t.integer :charge

      t.timestamps
    end
  end
end
