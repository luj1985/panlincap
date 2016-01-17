class AddOrderToInvestee < ActiveRecord::Migration
  def self.up
    change_table :investees do |t|
      t.integer :order
    end
  end

  def self.down
    change_table :investees do |t|
      t.remove :order
    end
  end
end
