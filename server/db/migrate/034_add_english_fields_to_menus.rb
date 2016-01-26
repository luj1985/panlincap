class AddEnglishFieldsToMenus < ActiveRecord::Migration
  def self.up
    change_table :menus do |t|
      t.string :title_en
    end
  end

  def self.down
    change_table :menus do |t|
      t.remove :title_en
    end
  end
end
