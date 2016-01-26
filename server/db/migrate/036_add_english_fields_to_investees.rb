class AddEnglishFieldsToInvestees < ActiveRecord::Migration
  def self.up
    change_table :investees do |t|
      t.string :name_en
    t.string :brief_en
    t.text :description_en
    end
  end

  def self.down
    change_table :investees do |t|
      t.remove :name_en
    t.remove :brief_en
    t.remove :description_en
    end
  end
end
