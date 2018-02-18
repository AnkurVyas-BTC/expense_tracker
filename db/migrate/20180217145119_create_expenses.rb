class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :title
      t.integer :price
      t.datetime :date

      t.timestamps
    end
  end
end
