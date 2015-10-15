class CreateFounds < ActiveRecord::Migration
  def self.up
    create_table :founds do |t|
      t.string :issue
      t.string :name
      t.string :status
      t.string :period
      t.string :company
      t.string :portfolio
      t.timestamps
    end
  end

  def self.down
    drop_table :founds
  end
end
