class CreateInvestees < ActiveRecord::Migration
  def self.up
    create_table :investees do |t|
      t.string :name
      t.string :brief
      t.string :area
      t.string :website
      t.string :logo
      t.text :description
      t.timestamps
    end
  end

  def self.down
    drop_table :investees
  end
end
