class AddIdentifyToMember < ActiveRecord::Migration
  def self.up
    change_table :members do |t|
      t.string :identity
    end
  end

  def self.down
    change_table :members do |t|
      t.remove :identity
    end
  end
end
