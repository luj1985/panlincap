class AddLanguageToMenus < ActiveRecord::Migration
  def self.up
    change_table :menus do |t|
      t.string :lang, default: "zh"
    end
  end

  def self.down
    change_table :menus do |t|
      t.remove :lang
    end
  end
end
