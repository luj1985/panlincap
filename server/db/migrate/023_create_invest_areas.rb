class CreateInvestAreas < ActiveRecord::Migration
  def self.up
    create_table :invest_areas do |t|
      t.string :name
      t.string :name_en
      t.timestamps
    end
  end

  def self.down
    drop_table :invest_areas
  end
end
