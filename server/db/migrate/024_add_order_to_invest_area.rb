class AddOrderToInvestArea < ActiveRecord::Migration
  def self.up
    change_table :invest_areas do |t|
      t.integer :order
    end
  end

  def self.down
    change_table :invest_areas do |t|
      t.remove :order
    end
  end
end
