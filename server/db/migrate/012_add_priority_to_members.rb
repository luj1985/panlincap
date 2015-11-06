class AddPriorityToMembers < ActiveRecord::Migration
  def self.up
    change_table :members do |t|
      t.integer :priority
    end
    
    Member.all.each do |m|
      m.priority = m.id
      m.save
    end
  end

  def self.down
    change_table :members do |t|
      t.remove :priority
    end
  end
end
