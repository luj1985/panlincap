class AddAreaToInvestee < ActiveRecord::Migration
  def self.up
    change_table :investees do |t|
      t.references :invest_area
    end
  end

  def self.down
    change_table :investees do |t|
      t.remove :invest_area
    end
  end
end
