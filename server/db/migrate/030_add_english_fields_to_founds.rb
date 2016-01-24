class AddEnglishFieldsToFounds < ActiveRecord::Migration
  def self.up
    change_table :founds do |t|
      t.string :issue_en
    t.string :name_en
    t.string :status_en
    t.string :period_en
    t.string :company_en
    t.string :portfolio_en
    end
  end

  def self.down
    change_table :founds do |t|
      t.remove :issue_en
    t.remove :name_en
    t.remove :status_en
    t.remove :period_en
    t.remove :company_en
    t.remove :portfolio_en
    end
  end
end
