class AddParamToMenu < ActiveRecord::Migration
  def self.up
    change_table :menus do |t|
      t.string :param
    end
  end

  def self.down
    change_table :menus do |t|
      t.remove :param
    end
  end
end
