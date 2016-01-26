class RemoveLangOnInvestees < ActiveRecord::Migration
  def self.up
    change_table :investees do |t|
      t.remove :lang
    end
  end

  def self.down
  end
end
