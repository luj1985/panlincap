class Member < ActiveRecord::Base
  validates_presence_of :name, :description
  before_create :create_order

  def to_localized lang
    if lang == 'en' then
      model = {
        :id => self.id,
        :avatar => self.avatar,
        :name => (self.name_en.blank? ? self.name : self.name_en),
        :title => (self.title_en.blank? ? self.title : self.title_en),
        :description => (self.description_en.blank? ? self.description : self.description_en),
        :suffix => self.suffix,
        :position => self.position
      }
    else 
      model = {
        :id => self.id,
        :avatar => self.avatar,
        :name => self.name,
        :title => self.title,
        :description => self.description,
        :suffix => self.suffix,
        :position => self.position
      }
    end
    model
  end

private
  def create_order
    max = Member.maximum("priority") || 0
    self.priority = max + 1
  end
end
