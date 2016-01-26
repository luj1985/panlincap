class RemoveAreaOnInvestee < ActiveRecord::Migration
  def self.up
    change_table :investees do |t|
      t.remove :area
    end
  end

  def self.down
  end
end
