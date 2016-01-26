class RemoveLangFields < ActiveRecord::Migration
  def self.up
    remove_column :menus, :lang
    remove_column :declarations, :lang
  end

  def self.down
  end
end
